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
        const toggleMenu = () => {
            navLinks.classList.toggle("open");
            hamburger.classList.toggle("open");
            // Update aria-expanded attribute
            const isExpanded = navLinks.classList.contains("open");
            hamburger.setAttribute("aria-expanded", isExpanded);
        };

        hamburger.addEventListener("click", toggleMenu);
        hamburger.addEventListener("keydown", (event) => { // For keyboard accessibility
            if (event.key === "Enter" || event.key === " ") {
                toggleMenu();
            }
        });

        // Close nav when link clicked (on mobile)
        navAnchors.forEach(link => link.addEventListener("click", () => {
            if (window.innerWidth <= 600) {
                if (navLinks.classList.contains("open")) { // Only if menu is open
                    toggleMenu(); // Use the same toggle function to ensure states are consistent
                }
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