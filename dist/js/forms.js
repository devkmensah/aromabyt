// FORM VALIDATION
const signUpForm = document.getElementById('sign-up-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailInfo = document.getElementById('email-info');
const postcodeInfo = document.getElementById('postcode-info');
const phoneInfo = document.getElementById('phone-info');
const inputWrapper = document.getElementById('input-wrapper');

// 3. Transform each placeholder's name to lower case
const inputFieldName = inputField => {
  return inputField.placeholder.toLowerCase();
};

// 2. Error & Success Messages
const errorMessage = (inputField, message) => {
  const inputWrapper = inputField.parentElement;
  inputWrapper.classList.add(
    'error',
    'animate__animated',
    'animate__headShake'
  );
  const editMessage = inputWrapper.querySelector('small');
  editMessage.innerText = message;
};

const successMessage = inputField => {
  const inputWrapper = inputField.parentElement;
  inputWrapper.classList.remove(
    'error',
    'animate__animated',
    'animate__headShake'
  );
  inputWrapper.classList.add('success');
};

// 7. Phone Number Validation
const phoneValidation = phoneField => {
  const phoneRegex = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;

  if (phoneField.value === '') {
    errorMessage(phoneField, `${inputFieldName(phoneField)} required`);
  } else if (!phoneRegex.test(phoneField.value.trim())) {
    errorMessage(phoneField, 'valid UK number is required');
  } else if (phoneRegex.test(phoneField.value.trim())) {
    successMessage(phoneField);
  }
};

// 6. Postcode validation
const postcodeValidation = postField => {
  const postRegex = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$/;

  if (postField.value === '') {
    errorMessage(postField, `${inputFieldName(postField)} required`);
  } else if (!postRegex.test(postField.value.trim())) {
    errorMessage(postField, 'valid postcode e.g: ln5 8ld');
  } else if (postRegex.test(postField.value.trim())) {
    successMessage(postField);
  }
};

// 5. Email Validation
const emailValidation = emailField => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailField.value === '') {
    errorMessage(emailField, `${inputFieldName(emailField)} required`);
  } else if (!emailRegex.test(emailField.value.trim())) {
    errorMessage(emailField, 'valid email e.g: jon@gmail.com');
  } else if (emailRegex.test(emailField.value.trim())) {
    successMessage(emailField);
  }
};

TODO: console.log('names to strings');
// 4. Max & Min input field names
const lengthCheck = (input, min, max) => {
  if (input.value === '') {
    errorMessage(input, `${inputFieldName(input)} required`);
  }
  // else if (Number.isFinite(input.value)) {
  //   // console.log('Name cannot include number');
  //   errorMessage(input, `${inputFieldName(input)} cannot include a number`);
  // }
  else if (input.value.length < min) {
    errorMessage(
      input,
      `${inputFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    errorMessage(
      input,
      `${inputFieldName(input)} must be less than ${max} characters`
    );
  } else {
    successMessage(input);
  }
};

// 1. Submit Form Hnadler
signUpForm.addEventListener('submit', function (e) {
  e.preventDefault();

  lengthCheck(firstName, 4, 16);
  lengthCheck(lastName, 4, 16);

  emailValidation(emailInfo);

  postcodeValidation(postcodeInfo);

  phoneValidation(phoneInfo);
});
