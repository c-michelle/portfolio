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
    threshold: 0.1
});

slideElements.forEach((element) => observer.observe(element));