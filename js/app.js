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

// Form submission handling
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "6f5ebc77-7554-4913-bf17-4115768475df");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});