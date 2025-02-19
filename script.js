document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");

    function handleScroll() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            aboutSection.style.transform = "scale(1.05)"; /* Slight zoom when appearing */
        } else {
            aboutSection.style.transform = "scale(1)";
        }
    }

    window.addEventListener("scroll", handleScroll);
});
