const loginForm = document.getElementById("inpform");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // console.log(email,password)

  if (email === "admin" && password === "admin") {
    // Redirect to admin page
    window.location.href = "/admin//html/admin.html";
  } else {
    // Make a request to API to check if user exists
    fetch("https://boaitandbaits-backend.onrender.com/users")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.email === email && user.password === password);
        if (user) {
          // Redirect to home page
          window.location.href = "/index.html";
        } else {
          // Show error message
          alert("User not registered, please register first");
        }
      })
      .catch((error) => {
        console.error(error);
        // Show error message
        alert("An error occurred while trying to login, please try again later.");
      });
  }
});
