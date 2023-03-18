const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confPassword');
const nameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#last-name');
export let emailValid, passwordValid, confirmPasswordValid, nameValid, lastNameValid;
const emailPattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
const passwordPattern = /(?=.*\d)((?=.*[a-z])(?=.*[A-Z]).{8,20})/ //латинские символы, минимум одна цифра, маленькая и большая буква, не менее 8 символов
const namePattern = /^[а-яА-ЯёЁa-zA-Z]+$/ // Имя не должно содержать цифр и пробелов

function validateInput(input, pattern) {
  return pattern.test(input.value);
}

function classChange(input, isValid) {
  if (isValid) {
    input.classList.remove('_unvalid');
    input.classList.add('_valid');
  } else {
    input.classList.add('_unvalid');
    input.classList.remove('_valid');
  }
}

export function removeValidClass() {
  emailInput.classList.remove('_valid');
  passwordInput.classList.remove('_valid');
  confirmPasswordInput.classList.remove('_valid');
  nameInput.classList.remove('_valid');
  lastNameInput.classList.remove('_valid');
  emailValid = passwordValid = confirmPasswordValid = nameValid = lastNameValid = false;
}

emailInput.addEventListener('input', () => {
  emailValid = validateInput(emailInput, emailPattern);
  classChange(emailInput, emailValid);
})

passwordInput.addEventListener('input', () => {
  passwordValid = validateInput(passwordInput, passwordPattern);
  classChange(passwordInput, passwordValid);
})

confirmPasswordInput.addEventListener('input', () => {
  confirmPasswordValid = confirmPasswordInput.value === passwordInput.value;
  classChange(confirmPasswordInput, confirmPasswordValid);
})


nameInput.addEventListener('input', () => {
  nameValid = validateInput(nameInput, namePattern);
  classChange(nameInput, nameValid);
})

lastNameInput.addEventListener('input', () => {
  lastNameValid = validateInput(lastNameInput, namePattern);
  classChange(lastNameInput, lastNameValid);
})