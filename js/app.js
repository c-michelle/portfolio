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