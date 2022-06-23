
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
let Name = document.getElementById("beer-name");
let Image = document.getElementById("beer-image");
let beerDescription = document.getElementById("beer-description");
let beerReviews =document.getElementById("review-list")
function listCocktails(drinks) {
  drinks.forEach((drinks) => {
    const list = document.createElement("li");
    list.innerText = drinks.strDrink;

    cList.appendChild(list);
    list.addEventListener("click", () => {
      beerName.textContent = drinks.strDrink;
      beerImage.setAttribute("src", data.image_url);
      beerDescription.textContent = data.description;
      beerReviews.textContent = data.reviews;
    });
  });
}