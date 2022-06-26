// Задача Вычислить сумму чисел до данного

function sumToCycle(n) { 
  let sum = 0;

  for(i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

function sumToRecursion(n) { 
  
  if(n - 1 == 0) {
    return n
  } else {
    return n + sumToRecursion(n - 1);
  }  
}

function sumToFormula(n) { 
  return (1 + n) / 2 * n;
}

// Задача Вычислить факториал

function factorial(n) { 
  
  if(n - 1 <= 1) {
    return n
  } else {
    return n * factorial(n - 1);
  }  
}

// Задача Числа Фибоначчи

function fib(n) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Задача Вывод односвязного списка

function printListCycle(list) {

  while(list !== null) {
    alert(list.value);
    list = list.next;
  }
}

function printListRecursion(list) {

  if(list == null) {
    return
  } else {
    alert(list.value);
    printListRecursion(list.next)
  }
}

// Задача Вывод односвязного списка в обратном порядке

function printReverseListCycle(list) {

  let listValues = []

  while(list !== null) {
    listValues.push(list.value);
    list = list.next;
  }

  for(i = listValues.length - 1; i >= 0; i--) {
    alert(listValues[i]);
  }
}