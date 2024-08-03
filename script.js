const form = document.getElementById('myForm');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const usernameError = document.getElementById('usernameError');
const phoneError = document.getElementById('phoneError');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    if (username.value === '') {
        usernameError.textContent = 'Username is required';
        isValid = false;
    } else if (username.value.length < 3){
        usernameError.textContent = 'Required Atleast 3 letters';
        isValid = false;
    }
    else {
        usernameError.textContent = '';
    }

    if (phone.value === '') {
        phoneError.textContent = 'Phone number is required';
        isValid = false;
    } else if (!/^\d{10}$/.test(phone.value)) {
        phoneError.textContent = 'Invalid phone number';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

  if (isValid) {
        console.log('Form submitted successfully');
    }
});