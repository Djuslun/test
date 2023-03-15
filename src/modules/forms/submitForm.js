import { emailValid, passwordValid, confirmPasswordValid, nameValid, lastNameValid, removeValidClass } from './validateInput';
import { showMessageWindow } from './showMessage';
import { submitButtonError } from './animateForm';

const form = document.querySelector('form');

function postData(form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let isformValid = emailValid && passwordValid && confirmPasswordValid && nameValid && lastNameValid;
    let object = {};
    const formData = new FormData(form);

    formData.forEach(function (value, key) {
      object[key] = value;
    });

    let birthDay = `${object.day}-${object.month}-${object.year}`;
    let deletedItem = ['day', 'month', 'year', 'confirm - password'];
    deletedItem.forEach(item => delete object[item]);
    object.birthDay = birthDay;

    try {
      if (isformValid) {
        let response = await fetch('http://localhost:5000/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(object)
        });
        let result = await response.json();
        if (response.ok) {
          form.reset();
          showMessageWindow();
          removeValidClass();
          console.log(result)
        } else {
          throw new Error('submit error')
        }
      } else {
        throw new Error('submit error')
      }
    } catch (error) {
      submitButtonError();
      console.log(error.message)
    }
  })
}

postData(form);

