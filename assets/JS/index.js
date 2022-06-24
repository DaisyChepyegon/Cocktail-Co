
document.addEventListener("DOMContentLoaded", () => {

  getData();

});

function getData(){
    fetch('http://localhost:3000/drinks')
      .then(response =>response.json())
      .then((drinks) => {
        //console.log(data[0])
        listCocktails(drinks)
      })
      .catch(error =>  console.log(error))
}

const cocktailList = document.querySelector("#cocktailList");
let image = document.getElementById("img");
let ingredient = document.getElementById("ingredients");
let measurement = document.getElementById("measurements");
let instruction =document.getElementById("instructions")

function listCocktails(drinks) {
  // data = JSON.parse(data);
  for(let data in drinks){
  //data.forEach((data) => {
    console.log(typeof data)
    let list = document.createElement("li");
    list.innerText = data.strDrink;

    cocktailList.appendChild(list);
    list.addEventListener("click", () => {

      image.setAttribute("src", data.strDrinkThumb);
      ingredient.innerHTML = data.strIngredient1;
      measurement.innerHTML = data.strMeasure1;
      instruction.innerHTML = data.strInstructions;

    });
  };
}