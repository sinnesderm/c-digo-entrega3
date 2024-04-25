document.addEventListener("DOMContentLoaded", function() {
    const recetas = document.querySelectorAll(".receta");
    recetas.forEach((receta, index) => {
        anime({
            targets: receta,
            opacity: [0, 1],
            translateY: [50, 0],
            delay: index * 300,
            duration: 1000,
            easing: "easeInOutQuad"
        });
    });
});
