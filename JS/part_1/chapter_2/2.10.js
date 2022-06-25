// Задача Название JavaScript

let nameJS = prompt("Какое 'официальное' название JavaScript?");

if(nameJS == "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}

// Задача Покажите знак числа

let number = +prompt("Введите число", 0);

if(number < 0) {
  alert(-1);
}else if(namber > 0) {
  alert(1);
}else {
  alert(0);
}

// Задача Перепишите 'if' в '?'

let result = (a + b < 4) ? "Мало" : "Много";

// Задача Перепишите 'if..else' в '?'

let message = (login == "Сотрудник") ? "Привет" :
            (login == "Директор") ? "Здравствуйте" :
            (login == "") ? "Нет логина" :
            "";

