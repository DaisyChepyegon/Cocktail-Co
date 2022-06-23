document.addEventListener('DOMContentLoaded', () => {

  const loginInput = document.getElementsByClassName('input-login')
  const signupInput= document.getElementsByClassName('signup-input')
  const signupSwitch=document.getElementById('switch-up');
  const loginSwitch=document.getElementById('switch-down');

  loginInput.addEventListener("submit", (event) => {
    signin(event);
  });

  signupInput.addEventListener('submit', (event) => {
    register(event);
  });

  signupSwitch.addEventListener('click',()=>{
    signup.style.display = "none";
    login.style.display = "block";
    
});

loginSwitch.addEventListener('click',()=>{
    login.style.display = "none";
    signup.style.display = "block";
});

})



