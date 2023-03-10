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

emailInput.addEventListener('input', () => {
  emailValid = validateInput(emailInput, emailPattern);
})

passwordInput.addEventListener('input', () => {
  passwordValid = validateInput(passwordInput, passwordPattern);
})

confirmPasswordInput.addEventListener('input', () => {
  confirmPasswordValid = confirmPasswordInput.value === passwordInput.value;
})


nameInput.addEventListener('input', () => {
  nameValid = validateInput(nameInput, namePattern);
})

lastNameInput.addEventListener('input', () => {
  lastNameValid = validateInput(lastNameInput, namePattern);
})