// Задача Привет, object

let user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Задача Проверка на пустоту

function isEmpty(obj) {
    if(Object.keys(obj).length > 0) {
        return false;
    } else {
        return true;
    }
}

// Задача Сумма свойств объекта

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }

// Задача Умножаем все числовые свойства на 2
  
  function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] == "number") {
          obj[key] *= 2;
        }
      }
  }
  