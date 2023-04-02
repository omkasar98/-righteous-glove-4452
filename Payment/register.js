let formEL = document.querySelector("form");
let nameInp = document.getElementById("name");
let emailInp = document.getElementById("email");
let passwordInp = document.getElementById("password");
let cfmPassword = document.getElementById("psw-repeat");
let phoneInp = document.getElementById("phone");
let gender = document.getElementById("gender");

let users = JSON.parse(localStorage.getItem("user-data"));
if (users == null) {
  users = [];
}


formEL.addEventListener("submit", function (ele) {
  ele.preventDefault();

  let obj = {
    name: nameInp.value,
    email: emailInp.value,
    gender: gender.value,
    password: passwordInp.value,
    ConformPassword: cfmPassword.value,
    phone: phoneInp.value,
  };
 

  users.push(obj);
  
  localStorage.setItem("user-data", JSON.stringify(users));
  formEL.reset();
  alert("Registered Successfully!");
  window.open("login.html", "_self");
});
