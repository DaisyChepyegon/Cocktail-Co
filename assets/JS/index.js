
document.addEventListener("DOMContentLoaded", () => {

  getData();
  

});

function getData(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(response =>response.json())
      .then((drinks) => {
        //console.log(data[0])
        listCocktails(drinks)
        console.log(drinks)
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
    // console.log(typeof data)
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



  fetch(`http://localhost:3000/drinks`)
    .then((data) => {
      return data.json();
    })
    .then((completeddata) => {
      let drinks = "";
      completeddata.map((value) => {
        drinks += `
      <div id="drinks">

        <img src=${value.strDrinkThumb} alt="img" class ="images">
        <h3>${value.strDrink}</h3>
        <ol> <li class="like">Like <span class="like-glyph">&#x2661;</span></li></ol>

      </div>
               `
      });
      document.getElementById("drink").innerHTML = drinks;
    }).catch((Error) => {
      console.log(Error)
    })


const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

 const hearts = document.querySelectorAll(".like-glyph");
 

  const likePost = (e) =>{ 

const heart = e.target
heart.innerText = EMPTY_HEART
mimicServerCall()

  .then( responce => {
    (heart.innerText === EMPTY_HEART)?
    (heart.innerText = FULL_HEART, heart.classList.add("activated-heart"))
    :(heart.innerText = EMPTY_HEART, heart.classList.remove("activated-heart"))
  })

  
}

hearts.forEach( heart => {
heart.addEventListener("click", likePost)
})










