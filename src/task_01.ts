/* Задание 1
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

XML:

<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>

JS-объект:

{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
} */

import { parseString } from "xml2js"

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

type Student = {
  name: string
  age: number
  prof: string
  lang: string
}

type StudentList = {
  list: Student[]
}

const convertJsObj = (inObj: any): StudentList => {
  const studentList: StudentList = { list: [] }

  inObj.list.student.forEach((student: any) => {
    const s_: Student = {
      name: `${student.name[0].first[0]} ${student.name[0].second[0]}`,
      age: +student.age[0],
      prof: `${student.prof[0]}`,
      lang: `${student.name[0].$.lang}`
    }
    studentList.list.push(s_)
  })
  return studentList
}

parseString(xmlString, (err, result) => {
  if (err) throw err
  console.log(convertJsObj(result))
})
