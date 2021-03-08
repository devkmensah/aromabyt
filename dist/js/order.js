// 1. LOGIN FORM
const loginRegister = document.querySelector('#login-register');
const loginLink = document.querySelector('.login-link');
const xCloseLogin = document.querySelector('.close');

const displayLogin = e => {
  loginRegister.style.display = 'block';
};

const hideLogin = e => {
  loginRegister.style.display = 'none';
};

loginLink.addEventListener('click', e => {
  e.preventDefault();
  displayLogin();
});

xCloseLogin.addEventListener('click', () => hideLogin());

loginRegister.addEventListener('click', e => {
  if (!e.target) return;
  if (e.target.id === 'login-register') hideLogin();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') hideLogin();
});

// 2. REGISTER / SIGN UP FORM
const signUpLink = document.querySelectorAll('.sign-up-link');
const register = document.querySelector('#register');
const xCloseRegister = document.querySelector('.close-register');

const displayRegister = e => {
  register.style.display = 'block';
};

const hideRegister = e => {
  register.style.display = 'none';
};

signUpLink.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    displayRegister();
  });
});

xCloseRegister.addEventListener('click', e => {
  hideLogin();
  hideRegister();
});

register.addEventListener('click', e => {
  hideLogin();
  if (!e.target.id) return;
  if (e.target.id === 'register') hideRegister();
});

document.addEventListener('keydown', e => {
  hideLogin();
  if (e.key === 'Escape') hideRegister();
});

// 3. DELIVERY OR I'LL COLLECT ORDER LINKS
const orderOptions = document.querySelector('.order-options');
const orderLinks = document.querySelectorAll('.order-link');
const orderContent = document.querySelectorAll('.order-link-content');
// console.log(orderOptions, orderLinks, orderContent);
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
