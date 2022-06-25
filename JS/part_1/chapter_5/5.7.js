// Задача Фильтрация уникальных элементов массива

function unique(arr) {
  return Array.from(new Set(arr))
}

// Задача Отфильтруйте анаграммы

function aclean(arr) {
  let map = new Map();

  for(let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}