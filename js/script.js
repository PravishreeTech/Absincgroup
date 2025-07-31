////////////// NAVBAR RESPONSIVE //////////////
const toggleBtn = document.getElementById('mobile-menu-toggle');
const nav = document.querySelector('.primary-nav');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

////////////// HERO SECTION //////////////
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".hero-next");
    const prevBtn = document.querySelector(".hero-prev");

    let currentIndex = 0;
    let slideInterval;

    // Show slide based on index
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
        currentIndex = index;
    }

    // Go to next slide
    function nextSlide() {
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Go to previous slide
    function prevSlide() {
        let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    // Start auto sliding
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    // Stop auto slide
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Dot click handler
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });

    // Arrow click handlers
    nextBtn.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // Initialize
    showSlide(currentIndex);
    startAutoSlide();
});

////////////// SOLUTIONS TAB SECTION //////////////
const buttons = document.querySelectorAll(".toggle-btn");
const desktopContent = document.getElementById("main-content");
const isMobile = () => window.innerWidth <= 768;

// Content for each section
const contentData = {
    content1: [
        "INDs, NDAs, ANDAs, BLAs, eCTDs, and global submission strategies",
        "FDA 505(b)(2) and biosimilar pathways",
        "Regulatory writing, data integrity audits, and submission review",
        "Pre-IND & Type B/C Meeting prep and agency interactions",
        "eCTD compilation and lifecycle management",
        "Third-party audits for FDA, EMA, WHO compliance",
    ],
    content2: [
        "cGMP audits, remediation, and quality systems implementation",
        "Aseptic manufacturing consulting and facility readiness",
        "QA/QC oversight, SOP writing, and training",
        "Process & cleaning validations",
        "Mock inspections and 483/NOD response support",
        "Risk-based approach to QMS development",
    ],
    content3: [
        "Analytical method validation and transfer",
        "Bioassay and potency testing for biologics and biosimilars",
        "Technology transfer support (domestic and international)",
        "Product comparability, stability, and impurity strategy",
        "End-to-end CMC support across preclinical to commercial phases",
    ],
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const points = contentData[targetId];
        const mobileBox = document.getElementById(targetId);

        if (isMobile()) {
            // Toggle for mobile
            if (mobileBox.classList.contains("active")) {
                mobileBox.classList.remove("active");
                mobileBox.innerHTML = "";
            } else {
                document.querySelectorAll(".mobile-content").forEach((mc) => {
                    mc.classList.remove("active");
                    mc.innerHTML = "";
                });
                mobileBox.classList.add("active");
                mobileBox.innerHTML = `<ul>${points.map(item => `<li> ${item}</li>`).join("")}</ul>`;
            }
        } else {
            // Desktop: Show content on right panel
            desktopContent.innerHTML = `<ul>${points.map(item => `<li> ${item}</li>`).join("")}</ul>`;
        }
    });
});

////////////// TESTIMONIALS SECTION //////////////
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".testimonial-dot");

    if (testimonials.length === 0 || dots.length === 0) {
        console.warn("Testimonials or dots not found.");
        return;
    }

    let currentIndex = 0;
    let interval;

    function showSlide(index) {
        testimonials.forEach((el, i) => {
            el.classList.toggle("active", i === index);
        });
        dots.forEach((el, i) => {
            el.classList.toggle("active", i === index);
        });
        currentIndex = index;
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        showSlide(nextIndex);
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });

    showSlide(currentIndex);
    startAutoSlide();
});

////////////// JOBS PAGE APPLICATION FORM //////////////
// const applyBtn = document.querySelector('#applyNowBtn'); // Add id to your Apply Now button
const modal = document.getElementById('applicationModal');
const closeBtn = document.querySelector('.close-btn');

// Get all apply now buttons
const applyBtns = document.querySelectorAll(".apply-now");

// Loop through and attach click event
applyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

// Close modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Click outside to close
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

