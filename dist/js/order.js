// LOGIN FORM 
const loginRegister = document.querySelector('#login-register');
const loginLink = document.querySelector('.login-link');
const close = document.querySelector('.close');

loginLink.addEventListener('click', e => {
    loginRegister.style.display = 'block';
});

close.addEventListener('click', () => {
    loginRegister.style.display = 'none';
});

loginRegister.addEventListener('click', e => {
    if (e.target.id === 'login-register') {
        loginRegister.style.display = 'none';
    }
});

// // REGISTER FORM
// const register = document.querySelector('#register');
// const closeRegister = document.querySelector('.close-register');
// const registerLinkOther = document.querySelector('.register-link-other');
// // const createAccount = document.querySelector('.create');
// const yetLink = document.querySelector('.yet-link');

// // Show register page when register link is clicked
// // registerLink.addEventListener('click', () => {
// //     register.style.display = 'block';
// // });

// // Show register page when create class is clicked
// // createAccount.addEventListener('click', () => {
// //     register.style.display = 'block';
// // });

// // Show register page when yet link is clicked
// yetLink.addEventListener('click', () => {
//     register.style.display = 'block';
// });

// // Show register page when register link is clicked on the login page
// registerLinkOther.addEventListener('click', () => {
//     register.style.display = 'block';
// });

// // Close register page when x icon is clicked
// closeRegister.addEventListener('click', () => {
//     register.style.display = 'none';
// });

// // Close register when background is clicked
// register.addEventListener('click', e => {
//     if (e.target.id === 'register') {
//         register.style.display = 'none';
//     }
// });

// DELIVERY OR I'LL COLLECT ORDER
const orderOptions = document.querySelector('.order-options');
const orderLinks = document.querySelectorAll('.order-link');
const orderContent = document.querySelectorAll('.order-link-content');
console.log(orderOptions, orderLinks, orderContent);
orderOptions.addEventListener('click', function (e) {
    e.preventDefault();
    const clicked = e.target.closest('.order-link');
    console.log(clicked);

    if (!clicked) return;
    orderLinks.forEach(link => link.classList.remove('order-link-active'));
    orderContent.forEach(content =>
        content.classList.remove('order-link-content-active')
    );
    clicked.classList.add('order-link-active');
    const activeContent = document
        .querySelector(`.order-link-content-${clicked.dataset.tab}`)
        .classList.add('order-link-content-active');
});
