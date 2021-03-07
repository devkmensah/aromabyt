// LOGIN PAGE
const loginRegister = document.querySelector('#login-register');
const loginLink = document.querySelector('.login-link');
const close = document.querySelector('.close');

// Show login area when login link is clicked
loginLink.addEventListener('click', () => {
    loginRegister.style.display = 'block';
});

// Close login area with the x icon on click
close.addEventListener('click', () => {
    loginRegister.style.display = 'none';
});

// Close login area when the login background is cliked
loginRegister.addEventListener('click', e => {
    if (e.target.id == 'login-register') {
        loginRegister.style.display = 'none';
    }
});

// REGISTER PAGE
const register = document.querySelector('#register');
const closeRegister = document.querySelector('.close-register');
const registerLinkOther = document.querySelector('.register-link-other');
// const createAccount = document.querySelector('.create');
const yetLink = document.querySelector('.yet-link');

// Show register page when register link is clicked
// registerLink.addEventListener('click', () => {
//     register.style.display = 'block';
// });

// Show register page when create class is clicked
// createAccount.addEventListener('click', () => {
//     register.style.display = 'block';
// });

// Show register page when yet link is clicked
yetLink.addEventListener('click', () => {
    register.style.display = 'block';
});

// Show register page when register link is clicked on the login page
registerLinkOther.addEventListener('click', () => {
    register.style.display = 'block';
});

// Close register page when x icon is clicked
closeRegister.addEventListener('click', () => {
    register.style.display = 'none';
});

// Close register when background is clicked
register.addEventListener('click', e => {
    if (e.target.id === 'register') {
        register.style.display = 'none';
    }
});

// DELIVERY PAGE
const deliveryNav = document.querySelector('.delivery-nav');
const collectNav = document.querySelector('.collect-nav');
const delivery = document.querySelector('#delivery');
const collect = document.querySelector('#collect');

console.log(delivery, collect, deliveryNav, collectNav);

const btn1 = document.querySelector('.btn-delivery')
btn1.addEventListener('click', e => {
    e.preventDefault();
    if ((e.target.className = 'delivery-nav')) {
        delivery.style.display = 'block';
    }
    if ((e.target.className = 'collect-nav')) {
        collect.style.display = 'none';
    }
    // if(e.target.className = 'delivery-nav'){
    //     deliveryNav.style.color = '#73020C';
    // }
});

console.log(btn1, btn2);
const btn2 = document.querySelector('.btn-collect')
// COLLECT PAGE
btn2.addEventListener('click', e => {
    e.preventDefault()
    if ((e.target.className = 'collect-nav')) {
        collect.style.display = 'block';
    }
    if ((e.target.className = 'delivery-nav')) {
        delivery.style.display = 'none';
    }
});
