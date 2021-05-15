/* Задание 2
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

JSON:

{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}

JS-объект:

{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic' },
    { name: 'Vova', age: 60, prof: 'pilot' },
  ]
} */

console.log(JSON.parse(`
  {
    "list": [
      {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
      },
      {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
      }
    ]
  }`))
