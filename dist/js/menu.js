// 1. LOGIN FORM
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
  // hideLogin();
  if (e.key === 'Escape') {
    hideLogin();
    unHideBodyScroll();
    hideRegister();
  }
});

FIXME: console.log('fix');
//3. STICKY MENU-LIST NAVIGATION
// const menuListContainer = document.querySelector('#menu-list');
// const pageTop = menuListContainer.offsetTop;
// // const smoothPosition = document.querySelector('#menu');
// // console.log(smoothPosition, pageTop);

// const stickMenu = () => {
//   if (pageYOffset >= pageTop) {
//     menuListContainer.classList.add('sticky');
//     // smoothPosition.classList.add('smooth-position');
//   } else {
//     menuListContainer.classList.remove('sticky');
//     // smoothPosition.classList.remove('smooth-position');
//   }
// };

// onscroll = () => {
//   stickMenu();
// };
// console.log(menuListContainer, pageTop, smoothPosition);

TODO: console.log('do');
const menuNavContainer = document.querySelector('#menu-list');
const smoothKickIn = document.querySelector('#menu');
// const mainArea = document.querySelector('#main-area');
// const mainAreaHeight = mainArea.getBoundingClientRect();
const menuNavHeight = menuNavContainer.getBoundingClientRect().height;
const menuHeader = document.querySelector('#menu-header');
console.log(
  menuNavContainer,
  menuNavHeight,
  menuHeader,
  // mainArea,
  // mainAreaHeight,
  smoothKickIn
);

// menuNavContainer.classList.remove('sticky');
// smoothKickIn.classList.remove('smooth-position');

const menuHeaderObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) {
      menuNavContainer.classList.add('sticky');
      //   mainArea.classList.add('m-top');
    } else {
      //   mainArea.classList.remove('m-top');
      menuNavContainer.classList.remove('sticky');
    }
  },
  { root: null, threshold: 0, rootMargin: `-${menuNavHeight}px` }
);

menuHeaderObserver.observe(menuHeader);
// menuHeaderObserver.unobserve(menuHeader);

// 4. MENU-LIST SMOOTH NAVIGATION LINKS
const menuListWrapper = document.querySelector('.items');
console.log(menuListWrapper);

menuListWrapper.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('item-link')) {
    const links = e.target.getAttribute('href');
    console.log(links);
    document.querySelector(links).scrollIntoView({ behavior: 'smooth' });
  }
});
