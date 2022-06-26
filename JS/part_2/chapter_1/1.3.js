// Задача Дочерние элементы в DOM

document.body.firstElementChild

document.body.lastElementChild

document.body.lastElementChild.lastElementChild

// Задача Выделите ячейки по диагонали

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
}