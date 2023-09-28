const valid = () => {
  const selectItems = document.querySelectorAll("input.calc-item");
  const validTel = document.querySelectorAll('input[type="tel"]');
  const validText = document.querySelectorAll(
    'form.input[type="text"], input[placeholder="Ваше сообщение"] '
  );
  const validEmail = document.querySelectorAll('input[type="email"]');

  selectItems.forEach((item) => {
    item.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/([^\d()-])/g, '');
    })
})
validText.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я0-9\s-[:punct:]]/g, '');
      //e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ0-9\s\p{P}]/g, '');
     })
})
validEmail.forEach((item) => {
    item.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/([^[A-Za-z0-9@\-_.!~*'])/g, '');
    })
})

  validTel.forEach((item) => {
      item.addEventListener('input', (e) => {
          e.target.value = e.target.value.replace(/([^\d()-])/g, '');
      })
  })
};

export default valid;
