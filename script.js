document.addEventListener("DOMContentLoaded", function() {
    const rules = document.querySelectorAll(".rules li");
    
    rules.forEach(rule => {
        rule.addEventListener("mouseover", function() {
            rule.style.color = "#FFA500";
        });
        
        rule.addEventListener("mouseout", function() {
            rule.style.color = "white";
        });
    });
});
