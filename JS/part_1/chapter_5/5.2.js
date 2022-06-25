// Задача Сумма пользовательских чисел

let a = +prompt("Первое число?");
let b = +prompt("Второе число?");

alert(a + b);

//Задача Вод числового значения

function readNumber() {
    
    let number = 0;

    do {
      number = prompt("Введите число");
    } while(!isFinite(number));
  
    if(number == "" || number === null) {
        return null;
    }

    return +number;
}

// Задача Случайное число от min до max

function random(min, max) {
    return min + Math.random() * (max - min);
  }

// Задача Случайное целое число от min до max

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }