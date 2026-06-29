// Cursor effect
const cursorGlow = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
});

// Slide-in animation
const slideElements = document.querySelectorAll(".slide-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

slideElements.forEach((element) => observer.observe(element));

// 
if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
}   

window.addEventListener("load", () => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
});

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-el").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }

        history.replaceState(null, "", window.location.pathname);
    });
});

// Particles.js configuration
particlesJS.load(
    "particles-js",
    "js/particles-config.json",
    function () {
        console.log("particles.js loaded");
    }
);

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    hamburger.textContent = "✕";
  } else {
    hamburger.textContent = "☰";
  }
});