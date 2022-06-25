// Задача Переведите текст вида border-left-width в borderLeftWidth

function camelize(str) {

  let arr = str.split("-");
  
  arr.forEach((item, id, arr) => {
    if(id > 0) {
      arr[id] = item.slice(0, 1).toUpperCase() + item.slice(1);
    }
  });

  return arr.join("");
}

// Задача Фильтрация по диапазону

function filterRange(arr, a, b) {
  let filteredArr = [];

  for(i = 0; i < arr.length; i++) {
    if(arr[i] >= a && arr[i] <= b) {
      filteredArr.push(arr[i])
    }
  }

  return filteredArr
}

// Задача Фильтрация по диапазону "на месте"

function filterRangeInPlace(arr, a, b) {
  for(i = 0; i < arr.length; i++) {
    if(arr[i] <= a || arr[i] >= b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// Задача Сортировать в порядке по убыванию

arr.sort((a, b) => b - a);

// Задача Скопировать и отсортировать массив

function copySorted(arr) {
  let newArr = arr.sort();
  return newArr;
}

// Задача Создать расширяемый калькулятор

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

// Задача Трансформировать в массив имён

let namesArr = users.map(item => item.name);

// Задача Трансформировать в объекты

let userObjs = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

// Задача Отсортировать пользователей по возрасту

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

// Задача Перемешайте массив

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// Задача Получить средний возраст

function getAverageAge(users) {
  let agesSum = 0;

  users.forEach(user => {
    agesSum += user.age
  })

  return agesSum / users.length
}
 
// Задача Оставить уникальные элементы массива

function unique(arr) {
  return Array.from(new Set(arr))
}