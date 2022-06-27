// Задача Очистите элемент

function clear(elem) {
  elem.innerHTML = "";
}

// Задача Создайте список

function createTree(container, dom) {
  container.append(createTreeDom(dom));
}

function createTreeDom(data) {
  
  if(Object.keys(data).length == 0) return;

  let list = document.createElement('ul');

  for (let key in data) {
    let item = document.createElement('li');
    item.textContent = key;
    let childList = createTreeDom(data[key]);

    if(childList) {
      item.appendChild(childList);
    }

    list.append(item);
  }

  return list;
}

// Задача Выведите список потомков в дереве

let list = document.getElementsByTagName('li');

for (let item of list) {
  let count = item.getElementsByTagName('li').length;
  if (!count) continue;

  item.firstChild.data += `[ ${count} ]` ;
}

// Задача Создайте календарь в виде таблицы

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

function createCalendar(container, year, month) {
  
  let mon = month - 1;
  let d = new Date(year, mon);

  let table = `<table>
                <tr>
                  <th>ПН</th>
                  <th>ВТ</th>
                  <th>СР</th>
                  <th>ЧТ</th>
                  <th>ПТ</th>
                  <th>СБ</th>
                  <th>ВС</th>
                </tr>
                <tr>`;

  for(let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  while(d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if(getDay(d) % 7 == 6) {
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  if(getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  elem.innerHTML = table;
}

// Задача Вставьте HTML в список

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// Задача Сортировка таблицы

let rowsList = Array.from(table.rows).slice(1)

  rowsList.sort((row1, row2) => {
    if(row1.cells[0].innerHTML > row2.cells[0].innerHTML) {
      return 1
    } else {
      return -1
    }
  });

table.tBodies[0].append(...rowsList);
