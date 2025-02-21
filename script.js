document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".about, .holders-benefits");

    function handleScroll() {
        const screenPosition = window.innerHeight / 1.2;

        sections.forEach((section) => {
            const sectionPosition = section.getBoundingClientRect().top;

            if (sectionPosition < screenPosition) {
                section.style.transform = "scale(1.05)";
            } else {
                section.style.transform = "scale(1)";
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
});
