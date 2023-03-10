import { emailValid, passwordValid, confirmPasswordValid, nameValid, lastNameValid, removeValidClass } from './validateInput';
import { messageWindow, showMessageWindow } from './showMessage';
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

    let birthDay = `${object.day}-${object.month}-${object.year}`;
    delete object.day;
    delete object.month;
    delete object.year;
    delete object.confirm - password;
    object.birthDay = birthDay;

    if (isformValid) {
      console.log(object)
      form.reset();
      showMessageWindow();
      removeValidClass();
    } else {
      console.log('error')
    }
  })
}

postData(form);

