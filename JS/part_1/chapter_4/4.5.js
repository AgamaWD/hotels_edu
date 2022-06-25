// Задача Создание калькулятора при помощи конструктора

function Calculator() {
  this.read = function() {
    this.a = +prompt("Число а");
    this.b = +prompt("Число b");
  }

  this.sum() = function() {
    return this.a + this.b;
  }

  this.mul() = function() {
    return this.a * this.b;
  }
}

// Задача Создаём Accumulator

function Accumulator(startingValue) {
  this.value = startingValue;
  
  this.read = function() {
    this.num = +prompt("Введите число которое нужно прибавить");
    this.value += this.num; 
  }
}