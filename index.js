
document.addEventListener("DOMContentLoaded", () => {
  getData();
});

function getData(){
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')

  .then(response =>response.json())

  .then(drinks => console.log(drinks))
  
  .catch(error =>  console.log(error))

}
const cocktailList = document.querySelector("#cocktailList");
let image = document.getElementById("img");
let ingredient = document.getElementById("ingredients");
let measurement = document.getElementById("measurements");
let instruction =document.getElementById("instructions")
function listCocktails(drinks) {
  drinks.forEach((drinks) => {
    const list = document.createElement("li");
    list.innerText = drinks.strDrink;

    cocktailList.appendChild(list);
    list.addEventListener("click", () => {

      image.setAttribute("src", drinks.strDrinkThumb);
      ingredient.innerHTML = drinks.strIngredient1;
      measurement.innerHTML = drinks.strMeasure1;
      instruction.innerHTML = drinks.strInstructions;

    });
  });
}