document.addEventListener('DOMContentLoaded', () => {

  const loginInput = document.getElementById('input-login')
  const signupInput= document.getElementById('input-signup')
  const signupSwitch=document.getElementById('switch-up');
  const loginSwitch=document.getElementById('switch-down');

//   loginInput.addEventListener('submit', (event) => {
//     login(event);
//   });

//   signupInput.addEventListener('submit', (event) => {
//     register(event);
//   });

  signupSwitch.addEventListener('click',()=>{
    signupInput.style.display = "none";
    loginInput.style.display = "block";
    
  });

  loginSwitch.addEventListener('click',()=>{
    loginInput.style.display = "none";
    signupInput.style.display = "block";
  });


  const credential = document.getElementById('credentials')
  const cocktail= document.getElementById('cocktails')
  const submitButton=document.getElementById('subButton');
  const backButton=document.getElementById('backBtn');

  submitButton.addEventListener('click',()=>{
    credential.style.display = "none";
    cocktail.style.display = "block";
    
  });

  backButton.addEventListener('click',()=>{
    cocktail.style.display = "none";
    credential.style.display = "block";
  });


  })



  



