// Задача Сумма свойств объекта

function sumSalaries(salaries) {
  let sumSalaries = 0;
  
  salariesArr = Object.values(salaries);

  for (let salary of salariesArr) {
    sumSalaries += salary;
  }

  return sumSalaries
}

// Задача Подсчёт количества свойств объекта

function count(obj) {
  return Object.keys(obj).length;
}
