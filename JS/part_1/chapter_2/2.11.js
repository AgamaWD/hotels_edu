// Задача Проверка значения из диапазона

if(age >= 14 && age <= 90) {} // Фигурные скобки поставил просто чтобы редактор не подсвечивал ошибку

// Задача Проверка значения вне диапазона

if (age < 14 || age > 90) {}

// Задача Проверка логина

let userName = prompt("Введите логин");

if (userName == "Админ") {

  let password = prompt("Введите пароль");

  if(password == "Я главный") {
    alert("Здравствуйте!");
  } else if(password == "" || pass === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }

} else if(userName == "" || userName === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}