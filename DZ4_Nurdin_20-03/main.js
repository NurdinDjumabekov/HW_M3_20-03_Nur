const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  const request = new XMLHttpRequest(); // создание запроса
  request.open("GET", "data.json"); // объявление метода запроса и указание пути
  request.setRequestHeader("Content-type", "application/json"); // указывание заголовка
  request.send(); // отправка запроса

  request.addEventListener("load", () => {
    const data = JSON.parse(request.response);
    data.map((i) => {
      console.log(i);
      document.querySelector(".name1").innerHTML = i.name;
      document.querySelector(".age1").innerHTML = i.age;
    });
  });
});
