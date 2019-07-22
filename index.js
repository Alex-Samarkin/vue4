Vue.component("table-header", {
  props: ["table_h", "table_number"],

  template: '<h4 align="right">Заголовок таблицы N {{table_number}} {{table_h}}</h4>'
});

Vue.component("table-first", {
  props: ["id", "fio", "age", "gender"],

  template: "<tr><td>{{id}}</td><td>{{fio}}</td><td>{{age}}</td><td>{{gender}}</td></tr>"
});

var app = new Vue({
  el: "#app",
  data: {
    person: {
      id: "код записи",
      fio: "Фамилия, имя и отчество",
      gender: "Пол пациента",
      age: "Возраст"
    },
    persons: [{
        id: 1,
        fio: "Иванов Иван Иванович",
        gender: "m",
        age: 30
      },
      {
        id: 2,
        fio: "Петров Петр Петрович",
        gender: "m",
        age: 30
      },
      {
        id: 3,
        fio: "Никанорова Антонина Федоровна",
        gender: "f",
        age: 30
      },
      {
        id: 4,
        fio: "Самаркин Александр Иванович",
        gender: "m",
        age: 50
      },
      {
        id: 5,
        fio: "Белов Владимир Семенович",
        gender: "m",
        age: 65
      }
    ]
  }
});