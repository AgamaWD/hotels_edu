// Задача Найти размер прокрутки снизу

let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// Задача Узнать ширину полосы прокрутки

let cont = document.createElement("div");

cont.style.overflowY = "scroll";
cont.style.width = "50px";
cont.style.height = "50px";
document.body.append(cont);
let scrollWidth = cont.offsetWidth - cont.clientWidth;
cont.remove();

// Задача Поместите мяч в центр поля

ball.style.left = field.clientWidth / 2 - ball.offsetWidth / 2 + 'px'
ball.style.top = field.clientHeight / 2 - ball.offsetHeight / 2 + 'px'