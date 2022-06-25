// Задача Выведите чётные числа

for(let i = 2; i <= 10; i++) {
  if(i % 2 == 0) {
    alert(i);
  }
}

// Задача Замените for на while

let i = 0;

while(i < 0) {
  alert( `number ${i}!` );
  i++;
}

// Задача Повторять цикл, пока ввод неверен

let number = 0;

while(number <= 100) {
  number = prompt("Введите число больше 100")
  if(number == "" || number === null || +number > 100) break
}

// Задача Вывести простые числа
    
let n = 20;
let sqrt = 0;

numberToCheck: for(let i = 2; i <= n; i++) {
  sqrt = Math.floor(Math.sqrt(i));

  if(i != 2 && i % 2 == 0) continue;
  
  for(let j = 2; j <= sqrt; j++) {
    if(i % j == 0) continue numberToCheck

  }

  alert(i);
}