document.addEventListener('DOMContentLoaded', () => {

  const loginInput = document.getElementById('input-login')
  const signupInput= document.getElementById('input-signup')
  const signupSwitch=document.getElementById('switch-up');
  const loginSwitch=document.getElementById('switch-down');
  const loginSignup = document.getElementById('form')

  loginInput.addEventListener('submit', (event) => {
    login(event);
  });

  signupInput.addEventListener('submit', (event) => {
    register(event);
  });

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


  var emailArray = [];
var passwordArray = [];
var usernameArray = [];


/*function to register a user*/
function register(event) {
    event.preventDefault();
    //get input fields values from the form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("c-password").value;
    

      // //form validation
    // //check if name input in empty
  
    // //check if email input in empty
    if (email == "") {
        alert("Email required.");
        return;
    }
    

    // //check if password input in empty
    else if (password == "") {
        alert("Password required.");
        return;
    }
    // else if (password.value.length >= 6){
    //     alert("Password too short.");
    //     return ;

    // }
    //  //check if confirm input in empty
    else if (confirmPassword == "") {
        alert("Confirm Password required.");
        return;
    }
    // // compares if confirm password matches password 
    else if (password != confirmPassword) {
        alert("Password don't match retype your Password.");
        return;
    }


    //if validation is checked write data to array
    else if (emailArray.indexOf(email) == -1) {
        emailArray.push(email);
        passwordArray.push(password);

        alert("Signup succesful. \nLogin Now");
        //open login form
        //reset the input fields
        email.textContent = "";
        password.textContent = "";
        confirmPassword.textContent = "";
        const login=document.getElementById('login-page');
        const signup=document.getElementById('signup-page');
        signup.style.display = "none";
        login.style.display = "block";
    }
    //if email is already used then..
    else {
        alert(email + "is already registered to an account");
        return;

    }
}

//log in submit button function

function signin(event) {
    event.preventDefault();
    //get input fields values from the form
    const email = document.getElementById("l-email").value;
    const password = document.getElementById("l-password").value;
    //initialize registered accounts to a variable
    let i = emailArray.indexOf(email);

    //input fields validation
    //check if email field is empty and if email exists as registered account 

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        email.textContent= "";
        password.textContent="";
        return;
    }
    //check if password field is empty and if password is kinked to any email
    else if (passwordArray[i] != password) {
        if (password == "") {
            alert("Password required.");
            return;
        }
        alert("Password does not match.");
        email.textContent= "";
        password.textContent="";
        return;
    }
    //if verification true..
    else {
        alert(email + " Login Successful.");
        email.textContent= "";
        password.textContent="";
        //window.location.
        const loginSignup =document.getElementById('form')
        loginSignup.style.display="none";

        return;
    }

}



  



