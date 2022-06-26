// Задача Сумма с помощью замыканий

function sum(a) {

  return function(b) {
    return a + b;
  }
}

// Задача Фильтрация с помощью функции

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

// Задача Сортировать по полю

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

// Задача Армия функций

function makeArmy() {
  let shooters = [];
  let i = 0;

  while (i < 10) {
    let j = i;
    let shooter = function() {
      alert(j);
    };

    shooters.push(shooter);
    i++;
  }

  return shooters;
}

