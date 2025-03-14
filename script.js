document.addEventListener("DOMContentLoaded", function() {
    const rules = document.querySelectorAll(".rules li");

    rules.forEach(rule => {
        rule.addEventListener("mouseenter", () => {
            rule.style.transform = "translateX(10px)";
        });

        rule.addEventListener("mouseleave", () => {
            rule.style.transform = "translateX(0)";
        });
    });
});
