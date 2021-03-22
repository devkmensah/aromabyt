'use strict';
/* ----------------------------------------------------------- */
// 1. LOGIN FORM
/* ----------------------------------------------------------- */
const loginRegister = document.querySelector('#login-register');
const loginLink = document.querySelector('.login-link');
const xCloseLogin = document.querySelector('.close');
const body = document.querySelector('body');
console.log(body);

const displayLogin = e => {
  loginRegister.style.display = 'block';
};

const hideLogin = e => {
  loginRegister.style.display = 'none';
};

const hideBodyScroll = e => {
  body.style.overflow = 'hidden';
};

const unHideBodyScroll = e => {
  body.style.overflow = 'scroll';
};

loginLink.addEventListener('click', e => {
  e.preventDefault();
  hideBodyScroll();
  loginRegister.style.overflowY = 'scroll';
  displayLogin();
});

xCloseLogin.addEventListener('click', () => {
  unHideBodyScroll();
  hideLogin();
});

loginRegister.addEventListener('click', e => {
  if (e.target.id === 'login-register') {
    console.log('clicked');
    hideLogin();
    unHideBodyScroll();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') hideLogin();
  unHideBodyScroll();
});

/* ----------------------------------------------------------- */
// 2. REGISTER / SIGN UP FORM
/* ----------------------------------------------------------- */
const signUpLink = document.querySelectorAll('.sign-up-link');
const register = document.querySelector('#register');
const xCloseRegister = document.querySelector('.close-register');

const displayRegister = e => {
  register.style.display = 'block';
};

const hideRegister = e => {
  register.style.display = 'none';
};

const mainArea = document.querySelector('#main-area');
console.log(mainArea);
signUpLink.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    hideBodyScroll();
    register.style.overflowY = 'scroll';
    hideLogin();
    displayRegister();
  });
});

xCloseRegister.addEventListener('click', e => {
  unHideBodyScroll();
  hideLogin();
  hideRegister();
});

register.addEventListener('click', e => {
  if (e.target.id === 'register') {
    console.log('clicking');
    hideLogin();
    unHideBodyScroll();
    hideRegister();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    hideLogin();
    unHideBodyScroll();
    hideRegister();
  }
});

/* ----------------------------------------------------------- */
// 3. DELIVERY OR I'LL COLLECT ORDER LINKS
/* ----------------------------------------------------------- */
const orderOptions = document.querySelector('.order-options');
const orderLinks = document.querySelectorAll('.order-link');
const orderContent = document.querySelectorAll('.order-link-content');
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
