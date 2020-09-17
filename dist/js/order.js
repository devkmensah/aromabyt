// LOGIN PAGE 
const loginRegister = document.querySelector('#login-register');
const loginLink = document.querySelector('.login-link');
const close = document.querySelector('.close');

// Show login area when login link is clicked
loginLink.addEventListener('click', () => {
    loginRegister.style.display = 'block';
} );

// Close login area with the x icon on click
close.addEventListener('click', () => {
    loginRegister.style.display = 'none';
});

// Close login area when the login background is cliked
loginRegister.addEventListener('click', (e) => {
    if(e.target.id == 'login-register'){
        loginRegister.style.display = 'none';
    }
});



// REGISTER PAGE 
const register = document.querySelector('#register');
const registerLink = document.querySelector('.register-link');
const closeRegister = document.querySelector('.close-register');
const registerLinkOther = document.querySelector('.register-link-other');

// Show register page when register link is clicked
registerLink.addEventListener('click', () => {
    register.style.display = 'block';
});

// Show register page when register link is clicked on the login page
registerLinkOther.addEventListener('click', () => {
    register.style.display = 'block';
});

// Close register page when x icon is clicked
closeRegister.addEventListener('click', () => {
    register.style.display = 'none';
})

// Close register when background is clicked
register.addEventListener('click', (e) => {
    if(e.target.id === 'register'){
        register.style.display = 'none';
    }
})


