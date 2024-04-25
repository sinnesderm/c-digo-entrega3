document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('recipe-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener valores del formulario
        const ingredient = document.getElementById('ingredient').value;
        const cuisine = document.getElementById('cuisine').value;
        const diet = document.getElementById('diet').value;

        // Aquí puedes enviar los datos a un servidor para obtener las recetas recomendadas
        // Luego, puedes actualizar el DOM para mostrar las recetas recomendadas
        // Por ahora, simplemente mostraremos un mensaje de ejemplo
        displayRecipeResults([{ title: 'Receta 1', description: 'Descripción de la receta 1' }, { title: 'Receta 2', description: 'Descripción de la receta 2' }]);
    });
});

function displayRecipeResults(recipes) {
    const resultsContainer = document.getElementById('recipe-results');
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores

    if (recipes.length === 0) {
        resultsContainer.textContent = 'No se encontraron recetas. ¡Intenta con otros criterios!';
    } else {
        const ul = document.createElement('ul');
        recipes.forEach(recipe => {
            const li = document.createElement('li');
            li.innerHTML = `<h3>${recipe.title}</h3><p>${recipe.description}</p>`;
            ul.appendChild(li);
        });
        resultsContainer.appendChild(ul);
    }
}

document.getElementById('submit').addEventListener('click', function() {
    // Obtener los valores de los campos de entrada
    var age = document.getElementById('age').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var lifestyle = document.getElementById('Evida').value;
    var fitnessLevel = document.getElementById('fitness-level').value;
    var allergies = Array.from(document.getElementById('allergies').selectedOptions).map(option => option.value);
    var goal = document.getElementById('goals').value;

    // Lógica para determinar a qué página redirigir
    var nextPage = '';
    // Ejemplo de lógica para determinar la página según los datos ingresados
    if (age <= 18 && goal === 'build_muscle' && lifestyle === 'regular') {
        nextPage = 'recetas-musculares-juveniles.html';
    } else if (fitnessLevel === 'advanced' && allergies.length === 0 && goal === 'lose_weight') {
        nextPage = 'recetas-perdida-peso.html';
    } else {
        nextPage = 'recetas-genericas.html';
    }

    // Redirigir a la página determinada
    window.location.href = nextPage;
});