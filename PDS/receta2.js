// Espera a que se cargue completamente la página
window.onload = function() {
    // Obtenemos todas las recetas por su clase
    var recetas = document.querySelectorAll('.receta');

    // Iteramos sobre cada receta
    recetas.forEach(function(receta) {
        // Agregamos la clase 'fade-in' para animar la entrada de la receta
        receta.classList.add('fade-in');
    });
};
