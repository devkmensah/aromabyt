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
const mainArea = document.querySelector('#main-area');
const mainAreaHeight = mainArea.getBoundingClientRect();
const menuNavHeight = menuNavContainer.getBoundingClientRect().height;
const menuHeader = document.querySelector('#menu-header');
console.log(
  menuNavContainer,
  menuNavHeight,
  menuHeader,
  mainArea,
  mainAreaHeight,
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

//D...... FORM VALIDATION
const signUpForm = document.getElementById('sign-up-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailInfo = document.getElementById('email-info');
const postcodeInfo = document.getElementById('postcode-info');
const phoneInfo = document.getElementById('phone-info');
const inputWrapper = document.getElementById('input-wrapper');

// console.log(
//   signUpForm,
//   firstName,
//   lastName,
//   emailInfo,
//   postcodeInfo,
//   phoneInfo,
//   inputWrapper
// );

// 7. a
const postcodeValidation = function (postField) {
  const postRegex = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$/;
  if (postRegex.test(postField.value.trim())) {
    successMessage(postField);
  } else {
    errorMessage(postField, 'valid postcode e.g: ln5 8ld');
  }
};

// 8. a
const phoneValidation = function (phoneField) {
  const phoneRegex = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
  if (phoneRegex.test(phoneField.value.trim())) {
    successMessage(phoneField);
  } else {
    errorMessage(phoneField, 'valid phone number is required');
  }
};

// 6. a
const lengthCheck = function (input, min, max) {
  if (input.value.length < min) {
    errorMessage(
      input,
      `${inputFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    errorMessage(
      input,
      `${inputFieldName(input)} must be less than ${max} charcters`
    );
  } else {
    successMessage(input);
  }
};

// 5.a Email regex validation
const emailValidation = function (emailField) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(emailField.value.trim())) {
    successMessage(emailField);
  } else {
    errorMessage(emailField, 'valid email e.g: jon@gmail.com');
  }
};

// 4. Get placeholder of each input field
const inputFieldName = function (inputField) {
  return inputField.placeholder.toLowerCase();
};

// 3.a Error Message Function
const errorMessage = function (inputField, message) {
  const inputWrapper = inputField.parentElement;
  inputWrapper.className =
    'input-holder error animate__animated animate__headShake';
  const editMessage = inputWrapper.querySelector('small');
  editMessage.innerText = message;
};
// 3.b. Success Message Function
const successMessage = function (inputField) {
  const inputWrapper = inputField.parentElement;
  inputWrapper.className = 'input-holder success';
};

// 2.Function for All Input field entry check
const allInputCheck = function (inputFieldArray) {
  inputFieldArray.forEach(inputField => {
    // console.log(inputField.value);
    if (inputField.value.trim() === '') {
      errorMessage(inputField, ` ${inputFieldName(inputField)} required`);
    } else {
      successMessage(inputField);
    }
  });
};

// 1. Submit Event Listener
signUpForm.addEventListener('submit', e => {
  e.preventDefault();

  // console.log(firstName.value);
  // console.log(lastName.value);
  // console.log(emailInfo.value);
  // console.log(postcodeInfo.value);
  // console.log(phoneInfo.value);

  //1.b. All Input field entry check
  allInputCheck([firstName, lastName, emailInfo, postcodeInfo, phoneInfo]);

  // 5.a
  emailValidation(emailInfo);

  // 6. b
  lengthCheck(firstName, 4, 16);
  lengthCheck(lastName, 4, 16);

  // 7. b
  postcodeValidation(postcodeInfo);

  // 8. b
  phoneValidation(phoneInfo);
});
