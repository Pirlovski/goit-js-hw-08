import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const FORM_KEY = 'feedback-form-state';

const onFormInput = () => {
  //   const messageEL = evt.target.elements;

  // const mail = evt.target.elements.elements.email.value ;
  // const message = evt.target.elements.elements.message.value ;
  const formData = new FormData(feedbackForm);
  let userForm = {};
  formData.forEach((value, name) => (userForm[name] = value.trim()));
  localStorage.setItem(FORM_KEY, JSON.stringify(userForm));
};

feedbackForm.addEventListener('input', throttle(onFormInput, 500));

// получение из локального хранилища при перезагрузке страницы
const onPopulateForm = () => {
  if (localStorage.getItem(FORM_KEY)) {
    Object.entries(JSON.parse(localStorage.getItem(FORM_KEY))).forEach(
      ([name, value]) => (feedbackForm.elements[name].value = value),
    ); // `${name}: ${value}`; `${name}: value`; `${name} = value`
  }
};

onPopulateForm();
/*
Сабмит формы:
- Останавливаем поведение по умолчанию
- Очищаем интерфейс(форму от значений)
- Убираем отправленные данные из локального хранилища
*/
const onFormSubmit = evt => {
  evt.preventDefault();
  // const emailValue = messageEL.email.value ;
  // const textereaValue = messageEL.message.value ;
  if (feedbackForm.elements.email.value && feedbackForm.elements.message.value !== '') {
    console.log('Отправляем форму с данными: ', JSON.parse(localStorage.getItem(FORM_KEY)));
    evt.currentTarget.reset();
    localStorage.removeItem(FORM_KEY);
  }
};

feedbackForm.addEventListener('submit', onFormSubmit);
