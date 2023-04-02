let formEL = document.querySelector("form");
let emailInp = document.getElementById("email");
let passwordInp = document.getElementById("password");

let users = JSON.parse(localStorage.getItem("user-data"));
if (users == null) {
  users = [];
}
formEL.addEventListener("submit", function (ele) {
  ele.preventDefault();

  if (users.some((el) => el.email === emailInp.value)) {
    if (
      users.some(
        (el) => el.email === emailInp.value && el.password === passwordInp.value
      )
    ) {
      alert("Successfully loggedin");
      window.open("Homepage.html", "_self");
      formEL.reset();
    } else {
      alert("Please enter correct password");
    }
  } else {
    alert("Please enter correct email");
  }
});
