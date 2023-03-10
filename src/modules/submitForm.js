import { emailValid, passwordValid, confirmPasswordValid, nameValid, lastNameValid } from './validateInput'
//ye98j8o0R

const form = document.querySelector('form');

function postData(form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isformValid = emailValid && passwordValid && confirmPasswordValid && nameValid && lastNameValid;
    let object = {};
    const formData = new FormData(form);

    formData.forEach(function (value, key) {
      object[key] = value;
    });

    if (isformValid) {
      console.log(object)
    } else {
      console.log('error')
    }
  })
}

postData(form);

