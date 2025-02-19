document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");

    function handleScroll() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            aboutSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});