// Задача Операции с массивами

let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[Math.floor(styles.length/2)] = "Классика";

alert(styles.shift());

styles.unshift("Рэп", "Регги");

// Задача Сумма введённых чисел

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число");

    if(value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

// Задача Подмассив наибольшей суммы

function getMaxSubSum(arr) {
  let maxSum = 0;

  for(let i = 0; i < arr.length; i++) {
    let startSum = 0;
    for(let j = i; j < arr.length; j++) {
      startSum += arr[j];
      maxSum = Math.max(maxSum, startSum);
    }
  }

  return maxSum;
}

