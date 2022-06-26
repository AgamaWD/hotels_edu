// Задача Очистите элемент

function clear(elem) {
  elem.innerHTML = "";
}

// Задача Создайте список

let list = document.createElement("ul");
document.body.appendChild(list);


while(true) {
  let userText = prompt("Введите пункт списка");

  if(userText == "" || userText === null) break

  let listItem = document.createElement("li");
  listItem.textContent = userText;

  list.appendChild(listItem);
}

// Задача Создайте дерево из объекта

// Задача Выведите список потомков в дереве

// Задача Создайте календарь в виде таблицы

// Задача Цветные часы с использованием setInterval

// Задача Вставьте HTML в список

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// Задача Сортировка таблицы
