let lang = prompt("Введите язык", "ru/en");

if (lang == "ru") {
  console.log("Понедельник");
  console.log("Вторник");
  console.log("Среда");
  console.log("Четверг");
  console.log("Пятница");
  console.log("Суббота");
  console.log("Воскресенье");
} else if (lang == "en") {
  console.log("Monday");
  console.log("Tuesday");
  console.log("Wednesday");
  console.log("Thursday");
  console.log("Friday");
  console.log("Saturday");
  console.log("Sunday");
} else {
  console.log("Выбран некорректный язык");
}

switch (lang) {
  case "ru":
    console.log("Понедельник");
    console.log("Вторник");
    console.log("Среда");
    console.log("Четверг");
    console.log("Пятница");
    console.log("Суббота");
    console.log("Воскресенье");
    break;
  case "en":
    console.log("Monday");
    console.log("Tuesday");
    console.log("Wednesday");
    console.log("Thursday");
    console.log("Friday");
    console.log("Saturday");
    console.log("Sunday");
    break;
  default:
    console.log("Выбран некорректный язык");
}

let arr = [
  [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
];

let namePerson = prompt("Представтесь, пожалуйста", "Артем");
let ship =
  namePerson == "Артем"
    ? "директор"
    : namePerson == "Максим"
    ? "преподаватель"
    : "студент";
console.log(ship);
