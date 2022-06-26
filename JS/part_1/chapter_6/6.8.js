// Задача Вывод каждую секунду

function printNumbersInterval(from, to) {
  let i = from;
  let interval = setInterval(() => {
    alert(i)
    if(i == to) {
      clearInterval(interval);
    }
    i++
  }, 1000)
}

function printNumbersTimeout(from, to) {
  let i = from;

  setTimeout(() => {
    alert(i)
    if(i == to) {
      return
    } else {
      i++
      return printNumbersTimeout(from + 1, to);
    }

  }, 1000)
}