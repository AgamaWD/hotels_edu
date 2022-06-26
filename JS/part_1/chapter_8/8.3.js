// Задача Добавить функциям метод "f.defer(ms)"

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

// Задача Добавьте функциям декорирующий метод "defer()"

Function.prototype.defer = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};
