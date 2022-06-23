
document.addEventListener("DOMContentLoaded", () => {
  getData();
});

function getData(){
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')

  .then(response =>response.json())

  .then(drinks => console.log(drinks))
  
  .catch(error =>  console.log(error))

}
const cList = document.querySelector("#cocktailList");
let image = document.getElementById("img");
let ingredient = document.getElementById("ingredient");
let measurement = document.getElementById("measurements");
let instruction =document.getElementById("instructions")
function listCocktails(drinks) {
  drinks.forEach((drinks) => {
    const list = document.createElement("li");
    list.innerText = drinks.strDrink;

    cList.appendChild(list);
    list.addEventListener("click", () => {

      image.setAttribute("src", drinks.strDrinkThumb);
      ingredient.textContent = drinks.strIngredient1;
      measurement.textContent = drinks.strMeasure1;
      instruction.textContent = drinks.strInstructions;
      
    });
  });
}