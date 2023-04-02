let name = document.getElementById("name");
let email = document.getElementById("email")
let address= document.getElementById("address")
let city= document.getElementById("city")
let state= document.getElementById("state")
let code= document.getElementById("code")
let card1= document.getElementById("card1")
let cardNumber= document.getElementById("cardNumber")
let expMonth= document.getElementById("expMonth")
let expYear= document.getElementById("expYear")
let CVV= document.getElementById("CVV")
let payment = document.getElementById("payment");
payment.addEventListener("sumbit", (e) => {
    e.preventDefault();
    let obj = {
        name: name.value,
        email: email.value,
        address: address.value,
        city: city.value,
        state: state.value,
        code: code.value,
        card1: card1.value,
        cardNumber: cardNumber.value,
        expMonth: expMonth.value,
        expYear: expYear.value,
        CVV:CVV.value
        
    }

    fetch(" http://localhost:3000/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(obj)
    }).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
})