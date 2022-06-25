// Задача Сделать первый символ заглавным

function ucFirst(str) {
  let newStr = str[0].toUpperCase() + str.slice(1);

  return newStr;
}

// Задача Проверка на спам

function checkSpam(str) {
  if(str.toLowerCase().indexOf("xxx", 0) >= 0 || str.toLowerCase().indexOf("viagra", 0) >= 0) {
    return true
  } else return false
}

// Задача Усечение строки

function truncate(str, maxlength) {
  if(str.length > maxlength) {
    return str.slice(0, maxlength-1) + "…"
  } else return str
}

// Задача Выделить число

function extractCurrencyValue(str) {
  return +str.slice(1);
}