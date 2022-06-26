
document.addEventListener("DOMContentLoaded", () => {

  getData();
  

});



//display first drink
// fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17222')
// .then(res => res.json())
// .then (data =>
//   {
     
//      const image = document.querySelector("#img").setAttribute("src", data.strDrinkThumb);
     
//      const instruction = document.querySelector("#instructions").innerText = data.strInstructions;

// })




function getData(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then(response =>response.json())
      .then((data) => {
        //console.log(data[0])
        listCocktails(data.drinks)
      })
      .catch(error =>  console.log(error))
}

const cocktailList = document.querySelector("#cocktailList");
let image = document.getElementById("img");
let ingredient = document.getElementById("ingredients");
let measurement = document.getElementById("measurements");
let instruction =document.getElementById("instructions")

function listCocktails(drink) {

 drink.forEach(element => {
    let list = document.createElement("li");
    list.textContent = element.strDrink;

    cocktailList.appendChild(list);
    list.addEventListener("click", () => {

      image.setAttribute("src",element.strDrinkThumb)
      instruction.innerHTML = element.strInstructions;

    if(element.strIngredient1 !== null){
        const ingre = document.createElement('li')
        ingre.textContent = element.strIngredient1
        ingredient.appendChild(ingre)
    }
    
    if (element.strIngredient2 !== null){
        const ingre1 = document.createElement('li')
        ingre1.textContent = element.strIngredient2
        ingredient.appendChild(ingre1)
    }
    if (element.strIngredient3 !== null) {
      const ingre2 = document.createElement("li");
      ingre2.textContent = element.strIngredient3;
      ingredient.appendChild(ingre2);
    }
    if (element.strIngredient4 !== null) {
      const ingre3 = document.createElement("li");
      ingre3.textContent = element.strIngredient4;
      ingredient.appendChild(ingre3);
    }
    if (element.strIngredient5 !== null) {
      const ingre4 = document.createElement("li");
      ingre4.textContent = element.strIngredient5;
      ingredient.appendChild(ingre4);
    }


  if(element.strMeasure1 !== null){
      const measure = document.createElement('li')
      measure.textContent = element.strMeasure1;
      measurement.appendChild(measure)
  }
  if(element.strMeasure2 !== null){
    const measure1 = document.createElement('li')
    measure1.textContent = element.strMeasure2;
    measurement.appendChild(measure1)
  }
  if(element.strMeasure3 !== null){
    const measure2 = document.createElement('li')
    measure2.textContent = element.strMeasure3;
    measurement.appendChild(measure2)
  }
  if(element.strMeasure4 !== null){
    const measure3 = document.createElement('li')
    measure3.textContent = element.strMeasure4
    measurement.appendChild(measure3)
  } 
  if(element.strMeasure5 !== null){
    const measure4 = document.createElement('li')
    measure4.textContent = element.strMeasure5
    measurement.appendChild(measure4)
  } 
  

    });
  })
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
        <h3>${value.strDrink}</h3><br>
        <h4 id="add"><span id="like">&#x2661;</span>  like </h4> 

      </div>`
      });
      document.getElementById("drink").innerHTML = drinks;
    }).catch((Error) => {
      console.log(Error)
    })


    // document.getElementById('like').addEventListener('click', changeColor);

    //    function changeColor() {
    //      this.style.color = "red";
    //      return false; 
    //    }


    // document.getElementsByClassName('fa fa-heart').addEventListener('click', function onClick() {
    //    style.color = "red";

    // });





// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// const like=document.querySelector('#like')
// like.addEventListener('click', (e) =>{

//  const heart = e.target;
//  heart.innerHTML = EMPTY_HEART

//  if(heart.innerHTML === EMPTY_HEART){
//      heart.innerHTML == FULL_HEART;
//      heart.classList.add("activated-heart")
     
//    }
//    else {
//      heart.innerHTML == EMPTY_HEART;
//      heart.classList.remove("activated-heart")
//    }

//   })




