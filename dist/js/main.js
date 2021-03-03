//A...... HAMBURGER MENU
const openHamburger = document.querySelector('#hamburger-toggler');
const mobileNav = document.querySelector('.sidenav');

function openMenu(e) {
  this.querySelector('.burger-icon').classList.toggle('fa-bars');
  this.querySelector('.burger-icon').classList.toggle('fa-times');
  mobileNav.classList.toggle('show');
}

openHamburger.addEventListener('click', openMenu);

console.log(openHamburger, mobileNav);

// HAMBURGER MENU
// const openHamburger = document.querySelector('#hamburger-toggler');
// const navBtnClose = document.querySelector('.sidenav-close');
// const hiddenNav = document.querySelector('.sidenav');
// console.log(openHamburger, hiddenNav, navBtnClose);

// openHamburger.addEventListener('click', () => {
//     hiddenNav.style.width = "100%";
// })

// navBtnClose.addEventListener('click', () => {
//     hiddenNav.style.width = "0%";
// })

//B..... SLIDER
const sliders = document.querySelectorAll('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');
const autoScroll = true;
const clickPause = false;
const clickPlay = true;
const intervalTime = 7000;

let sliderInterval;

const nextSlider = () => {
  // Get Current Class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    sliders[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlider = () => {
  // Get Current Class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    sliders[sliders.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// this section is for when the page or scrolling function is set to auto scroll and the cont auto is = true, if you do not want the butons to auto scroll, comment it out
// Auto slide
if (autoScroll) {
  // Run next slide at interval time
  sliderInterval = setInterval(nextSlider, intervalTime);
}

// Button events
nextBtn.addEventListener('click', e => {
  nextSlider();

  // this section is to make the images move smoothly rather than fast when the buttons are set to auto scroll, it will wait 5s for the next image to come in as is been set for the autos croll button
  if (autoScroll) {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlider, intervalTime);
  }
});

prevBtn.addEventListener('click', e => {
  prevSlider();
  // this section is to make the images move smoothly rather than fast when the buttons are set to auto scroll, it will wait 5s for the next image to come in as is been set for the autos croll button
  if (autoScroll) {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlider, intervalTime);
  }
});

// C...... DELIVERY POSTCODE VALIDATION
const postCode = document.getElementById('postcode');
const postInput = document.getElementById('post-input');
// console.log(postCode, postInput);

const deliveryPost = function () {
  if (postInput.value.trim() === '') {
    postCode.className = 'animate__animated animate__shakeX';
  }
};

postCode.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(deliveryPost.value);

  // postcodeValidation(postInput);
  deliveryPost(postCode);
});

//D...... FORM VALIDATION
const signUpForm = document.getElementById('sign-up-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailInfo = document.getElementById('email-info');
const postcodeInfo = document.getElementById('postcode-info');
const phoneInfo = document.getElementById('phone-info');
const inputWrapper = document.getElementById('input-wrapper');

console.log(
  signUpForm,
  firstName,
  lastName,
  emailInfo,
  postcodeInfo,
  phoneInfo,
  inputWrapper
);

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
