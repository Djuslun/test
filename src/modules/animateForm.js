const forms = document.querySelectorAll('.form__input-item');

forms.forEach((item, i) => {
  setTimeout(() => {
    item.classList.remove('_hidden')
  }, i * 500);
})