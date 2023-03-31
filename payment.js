const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardNumber = document.querySelector("#cardNumber").value;
  const nameOnCard = document.querySelector("#nameOnCard").value;
  const expiryDate = document.querySelector("#expiryDate").value;
  const cvv = document.querySelector("#cvv").value;

  // Your payment processing logic here
    
 
});
