/*jshint multistr: true */

Vue.component("table-header", {
  props: ["table_h", "table_number"],

  template: '<h4 align="right">Заголовок таблицы N {{table_number}} {{table_h}}</h4>'
});

Vue.component("table-first", {
  props: ['person', 'persons'],

  template: '\
   <table id="table1" width="90%">\
    < thead >\
    <th>{{ person.id }}</th>\
    <th>{{ person.fio }}</th>\
    <th>{{ person.age }}</th>\
    <th>{{ person.gender }}</th>\
        </thead>\
  <tr v-for="person in persons">\
    <td id="table2">{{ person.id }}</td>\
    <td id="table2">{{ person.fio }}</td>\
    <td id="table2">{{ person.age }}</td>\
    <td id="table2">{{ person.gender }}</td>\
  </tr>\
      </table >\
  '
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