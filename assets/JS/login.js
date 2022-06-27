document.addEventListener('DOMContentLoaded', () => {
//call using id
  const loginInput = document.getElementById('input-login')
  const signupInput = document.getElementById('input-signup')
  const signupSwitch = document.getElementById('switch-up');
  const loginSwitch = document.getElementById('switch-down');

//add  event listener to login and signup buttons
  loginInput.addEventListener('submit', (event) => {
    login(event);
  });

  signupInput.addEventListener('submit', (event) => {
    register(event);
  });
//add click event to display either login or register form
  signupSwitch.addEventListener('click', () => {
    signupInput.style.display = "none";
    loginInput.style.display = "block";

  });

  loginSwitch.addEventListener('click', () => {
    loginInput.style.display = "none";
    signupInput.style.display = "block";
  });

  const credential = document.getElementById('credentials')
  const cocktail = document.getElementById('cocktails')
  const submitButton = document.getElementById('subButton');
  const backButton = document.getElementById('backBtn');

  //click event to take you to main page
  submitButton.addEventListener('click', () => {
    credential.style.display = "none";
    cocktail.style.display = "block";

  });

  backButton.addEventListener('click', () => { //back to login
    cocktail.style.display = "none";
    credential.style.display = "block";
  });


})

const loginInput = document.getElementById('input-login')
const signupInput = document.getElementById('input-signup')
const register = document.getElementById("regBtn")

register.addEventListener('click', () => {
  signupInput.style.display = "none";
  loginInput.style.display = "block";

});