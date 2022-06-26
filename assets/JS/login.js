document.addEventListener('DOMContentLoaded', () => {

  const loginInput = document.getElementById('input-login')
  const signupInput= document.getElementById('input-signup')
  const signupSwitch=document.getElementById('switch-up');
  const loginSwitch=document.getElementById('switch-down');
  

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



  document.addEventListener("DOMContentLoaded", () => {
    fetchUsers();
  });
  const logInForm = document.getElementById("input-login");
  const email = document.getElementById("l-email");
  const password = document.getElementById("l-password");
  const form = document.getElementById("login");
  const adminPanel = document.getElementById("btn-admin");
  function fetchUsers() {
    fetch("http://localhost:3000/users")
      .then((resp) => resp.json())
      .then((users) => {
        loginAuth(users);
      });
  }
  //login function
  function loginAuth(users) {
    logInForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      let acc;
      for (let data of users) {
        //vadidates email
        if (email.value == "") {
          alert("Email required!");
          return;
        }
        //validate password
        if (password.value == "") {
          alert("Password required!");
          return;
        }
        //authenticate email
        if (!(email.value === data.email)) {
          alert("Not a registered username");
          password.value = "";
          return;
        }
        //authenticate password
        acc = data;
        if (!(password.value === acc.password)) {
          alert("Invalid password!");
          password.value = "";
          return;
        }
        if (!(acc.usertype === "admin")) {
          adminPanel.disabled = true;
        }
        alert(`welcome back ${data.name}`);
        //console.log(acc);
        form.style.display = "none";
        return;
      }
    });
  }


  