// import throttle from 'lodash.throttle' ;

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input') ,
  textarea: document.querySelector('.feedback-form textarea') ,

  
};
const FORM_KEY = "feedback-form-state";


const onFormInput = evt => {
  const messageEL = evt.currentTarget.elements;
// console.dir(onFormInput) ;

const mail = messageEL.email.value ; 
const message = messageEL.message.value ;

const dataToSaved = {

  mail,
  message,
}

localStorage.setItem('feedback-form-state' , JSON.stringify(dataToSaved)) ;
};

refs.form.addEventListener('input',onFormInput);

// получение из локального хранилища при перезагрузке страницы
const onPopulateForm = () => {
const savedMessage = localStorage.getItem(FORM_KEY) ;


  if (savedMessage ) {
      Object.entries(JSON.parse(savedMessage )).forEach(([name, value]) => refs.form.elements[name].value = value); // `${name}: ${value}`; `${name}: value`; `${name} = value`
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
const emailValue = messageEL.email.value ;
const textereaValue = messageEL.message.value ;
if(emailValue && textereaValue !== ""){
  console.log('Отправляем форму с данными: ' , savedMessage ) ;
  evt.currentTarget.reset() ; 
  localStorage.removeItem( FORM_KEY) ; 
};
};

messageEL.addEventListener('submit' , onFormSubmit) ;