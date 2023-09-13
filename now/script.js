let date = new Date();

const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let dateStop = new Date('31 december 2023').getTime();
let dateNow = new Date().getTime();

const timeDay = document.getElementById('timeDay');
const dayOfWeek = document.getElementById('dayOfWeek');
const nowTime = document.getElementById('nowTime');
const newYear = document.getElementById('newYear');
const nowHour = new Date().getHours();

let getTimeOfDay = (hour) => {
    if (hour >= 6 && hour < 12) {
      return "Доброе утро";
    } else if (hour >= 12 && hour < 18) {
      return "Добрый день";
    } else if (hour >= 18 && hour < 24) {
      return "Добрый вечер";
    } else {
      return "Доброй ночи";
    }
  }

timeDay.textContent = getTimeOfDay(nowHour);
dayOfWeek.textContent = weekDays[date.getDay()];
nowTime.textContent = date.toLocaleTimeString('en');
newYear.textContent = Math.floor((dateStop - dateNow) / 1000 / 60 / 60 / 24);