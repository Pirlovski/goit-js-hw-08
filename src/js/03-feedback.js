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


const onPopulateForm = () => {
  if (localStorage.getItem(FORM_KEY)) {
      Object.entries(JSON.parse(localStorage.getItem(FORM_KEY))).forEach(([name, value]) => feedbackForm.elements[name].value = value); // `${name}: ${value}`; `${name}: value`; `${name} = value`
  }
};
onPopulateForm();

const onFormSubmit = event => {
  event.preventDefault();
  if (feedbackForm.elements.email.value && feedbackForm.elements.message.value !== "") {
      console.log('Отправляем форму с данными: ', JSON.parse(localStorage.getItem(FORM_KEY)));
      event.currentTarget.reset();
      localStorage.removeItem(FORM_KEY);
  };
};

feedbackForm.addEventListener("submit", onFormSubmit);