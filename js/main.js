"use strict";

let week = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];
 
let date = new Date();
date = date.getDay();

let output = document.querySelectorAll(".day");

let i = 0;

for (let item of output) {
  item.textContent = week[i];

  if (i == 5 || i == 6) {
    item.classList.add("weekend");
  }

  if (i + 1 == date) {
    item.classList.add("current-day");
  }

  i++;
}

