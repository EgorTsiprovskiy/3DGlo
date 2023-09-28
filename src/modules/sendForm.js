const sendFrom = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...'
  const errorText = 'Ошибка загрузки...'
  const successText = 'Данные отправлены!'
  const formUserName = form.querySelector('[name="user_name"]');
  console.dir(formUserName);
  let test = /^[а-яА-ЯЁё\s-]+$/g.test('ап ');
  console.log(test);

  const validate = (list) => {
    let success = true

    list.forEach(input => {
        if(input.name === "user_name"){
            if(/^[а-яА-ЯЁё\s-]+$/g.test(input.value)){
                success = true
            } else {
                alert('В строке "Ваше имя" разрешен ввод только кирилицы и пробелов!')
            success = false
            }
        } else if (input.name === "user_phone"){
            if(/^[0-9+\(\)-]+$/g.test(input.value)){
                success = true
            } else {
                alert('В строке "Номер телефона" разрешен ввод только цифр, знака “+”, круглых скобок и дефис!')
            success = false
            }
        } else if (input.name === "user_message"){
        if(/^[а-яА-ЯёЁ0-9\s[:punct:]]+$/g.test(input.value)){
            success = true
        } else {
            alert('В строке "Ваше имя" разрешен ввод только кирилицы и пробелов и знаков препинаний!')
        success = false
        }
        }
    })

    // list.forEach(input => {
    //     if(!input.classList.contains('success')){
    //         success = false
    //     }
    // })

    return success
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formUserMessage = form.querySelector('[name="user_message"]');
    const formUserPhone = form.querySelector('[name="user_phone"]');
    const formUserName = form.querySelector('[name="user_name"]');
    
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
        sendData(formBody)
        .then((data) => {
            statusBlock.textContent = successText
            formElements.forEach(input => {
                input.value = ''
            })
          })
          .catch((error) => {
            statusBlock.textContent = errorText
          })
    } else {
        alert('not valid')
    }
  }

  try{
    if(!form) {
        throw new Error('Верните форму')
    }
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        submitForm();
      });
  } catch(error){
    console.log(error.message);
  }
};

export default sendFrom;
