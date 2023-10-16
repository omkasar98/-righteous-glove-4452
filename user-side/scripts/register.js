const form = document.querySelector('#inpform');
const registerBtn = document.querySelector('#registerbtn');

registerBtn.addEventListener('click', function(event) {
  event.preventDefault(); // prevent the default form submit action

  const name = form.querySelector('#name').value;
  const gender = form.querySelector('#gender').value;
  const email = form.querySelector('#email').value;
  const password = form.querySelector('#password').value;
  const phoneNumber = form.querySelector('#phone').value;

  // Create a data object with the form values
  const data = {
    name: name,
    gender: gender,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
   status: "active",
    role: 'User'
  };

  // Send a POST request to your API endpoint
  fetch('https://boaitandbaits-backend.onrender.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      // Handle successful form submission
      console.log('Form submitted successfully');
    } else {
      // Handle form submission errors
      console.log('Form submission failed');
    }
  })
  .catch(error => {
    // Handle network errors
    console.log('Network error');
  });
});
