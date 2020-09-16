// LOGIN REGISTER PAGE

const loginRegister = document.querySelector('#login-register');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
// const loginBox = document.querySelector('.login-register-box');
const close = document.querySelector('.close');

console.log(loginRegister, loginLink, registerLink, close);

// Show login area when login link is clicked
loginLink.addEventListener('click', () => {
    loginRegister.style.display = 'block';
} );

// Close login area with the x icon 
close.addEventListener('click', () => {
    loginRegister.style.display = 'none';
});

// Close login area when the login background is cliked
loginRegister.addEventListener('click', (e) => {
    if(e.target.className == 'login-bg'){
        loginRegister.style.display = 'none';
    }
});
