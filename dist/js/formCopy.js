//D...... FORM VALIDATION
const signUpForm = document.getElementById('sign-up-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailInfo = document.getElementById('email-info');
const postcodeInfo = document.getElementById('postcode-info');
const phoneInfo = document.getElementById('phone-info');
const inputWrapper = document.getElementById('input-wrapper');

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
