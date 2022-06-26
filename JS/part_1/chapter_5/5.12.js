// Задача Преобразуйте объект в JSON, а затем обратно в обычный объект

let jsonUser = JSON.stringify(user);
let newUser = JSON.parse(jsonUser);

// Задача Исключить обратные ссылки

alert(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));