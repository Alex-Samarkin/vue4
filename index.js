/*jshint multistr: true */

Vue.component("table-header", {
  props: ["table_h", "table_number"],

  template: '<h4 align="right">Заголовок таблицы N {{table_number}} {{table_h}}</h4>'
});

Vue.component("table-first", {
  props: ["head", "data"],

  template: '<table id="table1" width="90%">\
  <thead>\
    <th>{{ head.id }}</th>\
    <th>{{ head.fio }}</th>\
    <th>{{ head.age }}</th>\
    <th>{{ head.gender }}</th>\
  </thead>\
  <tbody>\
  <tr v-for="person in data">\
    <td id="table2">{{ person.id }}</td>\
    <td id="table2">{{ person.fio }}</td>\
    <td id="table2">{{ person.age }}</td>\
    <td id="table2">{{ person.gender }}</td>\
  </tr>\
  </tbody>\
  </table>'
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