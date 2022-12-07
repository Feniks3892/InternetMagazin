//-------------------------Email valid

const validateC = new window.JustValidate('#formC');

validateC
.addField('#nameC', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Недопустимый формат',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Недопустимый формат',
  },
])
.addField('#emailC', [
  {
    rule: 'required',
    errorMessage: 'Email is required',
  },
  {
    rule: 'email',
    errorMessage: 'Недопустимый формат',
  },
]);