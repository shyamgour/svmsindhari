// Responsive Navigation Hamburger
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    const navAnchors = document.querySelectorAll("nav a");

    // Highlight active link
    const path = window.location.pathname.split("/").pop() || "index.html";
    navAnchors.forEach(link => {
        if (link.getAttribute("href") === path) {
            link.classList.add("active");
        }
    });

    // Hamburger menu toggle
    if (hamburger && navLinks) {
        hamburger.onclick = function() {
            navLinks.classList.toggle("open");
            const expanded = hamburger.getAttribute("aria-expanded") === "true";
            hamburger.setAttribute("aria-expanded", !expanded);
            hamburger.classList.toggle("open");
        };
        // Close nav when link clicked (on mobile)
        navAnchors.forEach(link => link.addEventListener("click", () => {
            if (window.innerWidth <= 600) {
                navLinks.classList.remove("open");
                hamburger.classList.remove("open");
                hamburger.setAttribute("aria-expanded", "false");
            }
        }));
    }

    // Contact form feedback (static)
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thank you for contacting us! We will get back to you soon.");
            contactForm.reset();
        });
    }
});
