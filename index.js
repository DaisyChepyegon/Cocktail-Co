
document.addEventListener("DOMContentLoaded", () => {
  getData();
});

function getData(){
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')

  .then(response =>response.json())

  .then(drinks => console.log(drinks))
  
  .catch(error =>  console.log(error))

}