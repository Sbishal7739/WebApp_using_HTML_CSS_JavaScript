const searchBox = document.querySelector('.searchBox')
const searchBtn = document.querySelector('.searchBtn')
const recipeContainer = document.querySelector('.recipe-container')
const recipeDetailsContent = document.querySelector('.recipe-details-content')
const recipeCloseButton = document.querySelector('.recipe-close-btn')

const fetchRecipe = async (query) => {
    recipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>"
    try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        if (!data.ok) {
            throw new console.error(`HTTP Error! Status: ${data.status}`);
        }
        const response = await data.json()
        // console.log(response.meals);
        recipeContainer.innerHTML = ""
        response.meals.forEach(meal => {
            // console.log(meal);
            const recipeDiv = document.createElement('div')
            recipeDiv.classList.add('recipe')
            recipeDiv.innerHTML = `
                <img src = "${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3>
                <p><span>${meal.strArea}</span> Dish</p>
                <p>Belongs to <span>${meal.strCategory}</span > Category</p>
            `
            const button = document.createElement('button')
            button.textContent = 'View Recipe'
            recipeDiv.appendChild(button)

            button.addEventListener('click', () => {
                openRecipePopup(meal)
            })

            recipeContainer.appendChild(recipeDiv)
        })
    }
    catch (error) {
        // Create a container div
        const errorContainer = document.createElement('div');
        
        // Create the error heading
        const errorHeading = document.createElement('h2');
        errorHeading.textContent = 'Error in Fetching Recipes...';
        errorHeading.classList = 'error-heading'
        
        // Create the error image
        const errorImage = document.createElement('img');
        errorImage.src = '20945761.jpg'; // Replace 'path_to_error_image.jpg' with the actual path to your error image.
        errorImage.alt = 'Error';
        errorImage.classList.add('error-image');
    
        // Append the heading and image to the container
        errorContainer.appendChild(errorHeading);
        errorContainer.appendChild(errorImage);
    
        // Clear any previous content in the recipeContainer
        recipeContainer.innerHTML = '';
    
        // Append the error container to the recipeContainer
        recipeContainer.appendChild(errorContainer);
    }
    

}

// Function Featch Ingredients
const featchIngredients = (meal) => {
    let ingredientsList = ""
    for (let i = 1; i <= 20; i++) {
        let ingredient = meal[`strIngredient${i}`]
        if (ingredient) {
            let measure = meal[`strMeasure${i}`]
            console.log(meal);
            ingredientsList += `<li>${measure} ${ingredient}</li>`
            console.log(ingredientsList);
        }
        else {
            break
        }
    }
    return ingredientsList
}

const openRecipePopup = (meal) => {
    recipeDetailsContent.innerHTML = `
        <h2 class="recipe-name">${meal.strMeal}</h2>
        <h3 class="ingredents">Ingredents:</h3>
        <ul class="ingredient-list">${featchIngredients(meal)}</ul>
        <div class="recipe-instructions">
            <h3>Instruction:</h3>
            <p>${meal.strInstructions}</p>
        </div>
    `

    recipeDetailsContent.parentElement.style.display = "block"
}

recipeCloseButton.addEventListener('click', () => {
    recipeDetailsContent.parentElement.style.display = "none"
})

searchBtn.addEventListener('click', function (event) {
    event.preventDefault()
    const searchInput = searchBox.value.trim()
    if (!searchInput) {
        recipeContainer.innerHTML = `<h2>Type the food in the search box</h2>`
        return;
    }
    fetchRecipe(searchInput)
})

// fetchRecipe("chicken")
