// Задача Получите атрибут

document.querySelector("[data-widget-name]").getAttribute("data-widget-name")

// Задача Сделайте внешние ссылки оранжевыми

let links = document.querySelectorAll("a")

for(let link of links) {
  if(link.getAttribute("href") && link.getAttribute("href").includes("://") && !(link.getAttribute("href").startsWith("http://internal.com"))) {
    link.style.color = 'orange';
  }
}