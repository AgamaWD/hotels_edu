// Задача Перепишите функцию, используя оператор '?' или '||'

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

// Задача Функция min(a, b)

function min(a, b) {
  if(a < b) {
    return a;
  } else {
    return b;
  }
}

// Задача Функция pow(x,n)

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = +prompt("Введите число");
let n = +prompt("введите степень");

if (n < 1) {
  alert(`Степень должна быть натуральным числом. Число ${n} не является натуральным`);
} else {
  alert(pow(x, n));
}