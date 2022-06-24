
document.addEventListener("DOMContentLoaded", () => {

  getData();
  

});

function getData(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
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




  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(response =>response.json())
    .then((drinks) => {
      console.log( typeof drinks)
      //const images = document.getElementsByClassName('image').setAttribute("src", 'drinks.strDrinkThumb');
      const  names = document.getElementsByClassName('name').innerText = drinks.strDrink;

    })

    //.initializing
  fetch(`http://localhost:3000/drinks`)
    .then((data) => {
      return data.json();
    })
    .then((completeddata) => {
      let data1 = "";
      completeddata.map((value) => {
        data1 += `
      <div id="drinks">
        <img src=${value.strDrinkThumb} alt="img" class ="images">
        <h3>${value.strDrink}</h3>
        <p> ${value.idDrink}</p>
      </div>
               `
      });
      document.getElementById("drink").innerHTML = data1;
    }).catch((Error) => {
      console.log(Error)
    })










