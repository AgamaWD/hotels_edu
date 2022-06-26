// Задача Декоратор-шпион

function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }
  wrapper.calls = [];

  return wrapper;
}

// Задача Задерживающий декоратор

function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

// Задача Декоратор debounce

function debounce(f, ms) {
  let isCooldown = false;

  return function() {
    if (isCooldown) {
      return;
    }
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };

}

// Задача Тормозящий (throttling) декоратор

function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs = [];
  let savedThis;

  function wrapper() {

    if (isThrottled) { 
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    func.apply(this, arguments); 
    isThrottled = true;
    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}



