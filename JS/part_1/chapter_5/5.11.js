// Задача Создайте дату

let date = new Date(2012, 1, 20, 3, 12);

alert(date)

// Задача Покажите день недели

function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

// Задача День недели в европейской нумерации

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

// Задача Какой день месяца был много дней назад?

function getDateAgo(date, days) {
  let startDate = new Date(date);

  startDate.setDate(date.getDate() - days);

  return startDate.getDate();
}

// Задача Последнее число месяца?

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);

  return date.getDate();
}

// Задача Сколько сегодня прошло секунд?

function getSecondsToday() {
  let now = new Date();
  let startOfTheDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.round((now - startOfTheDay) / 1000);
}

// Задача Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  return Math.round((tomorrow - now) / 1000);
}

// Задача Форматирование относительной даты

function formatDate(date) {
  let difference = new Date() - date;
  let sec = Math.floor(difference / 1000);
  let min = Math.floor(difference / 60000);
  let d = date;

  if(difference < 1000) {
    return "прямо сейчас";
  }

  if(sec < 60) {
    return `${sec} сек. назад`;
  }

  if(min < 60) {
    return `${min} мин. назад`;
  }

  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2));

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}