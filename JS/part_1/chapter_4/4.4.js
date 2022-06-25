// Задача Создайте калькулятор

let calculator = {
  read() {
    this.a = +prompt("Число а");
    this.b = +prompt("Число b");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
}

// Задача Цепь вызовов

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  }
}