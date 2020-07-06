"use strict";

function getCurrentDate() {
  let now = new Date();
  let day = now.getDay();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  function getExtendedForm() {
    let extendedDay = day;
    let extendedMonth = month;
    let extendedHours = hours;
    let extendedMinutes = minutes;
    let extendedSeconds = seconds;
    switch (extendedDay) {
      case 0:
        extendedDay = "воскресенье, ";
        break;
      case 1:
        extendedDay = "понедельник, ";
        break;
      case 2:
        extendedDay = "вторник, ";
        break;
      case 3:
        extendedDay = "среда, ";
        break;
      case 4:
        extendedDay = "четверг, ";
        break;
      case 5:
        extendedDay = "пятница, ";
        break;
      default:
        extendedDay = "суббота, ";
    }

    switch (extendedMonth) {
      case 0:
        extendedMonth = " января ";
        break;
      case 1:
        extendedMonth = " февраля ";
        break;
      case 2:
        extendedMonth = " марта ";
        break;
      case 3:
        extendedMonth = " апреля ";
        break;
      case 4:
        extendedMonth = " мая ";
        break;
      case 5:
        extendedMonth = " июня ";
        break;
      case 6:
        extendedMonth = " июля ";
        break;
      case 7:
        extendedMonth = " августа ";
        break;
      case 8:
        extendedMonth = " сентября ";
        break;
      case 9:
        extendedMonth = " октября ";
        break;
      case 10:
        extendedMonth = " ноября ";
        break;
      default:
        extendedMonth = " декабря ";
    }

    if ((extendedHours == 1) || (extendedHours == 21)) {
      extendedHours += " час ";
    }

    if (((extendedHours >= 2) && (extendedHours <= 4)) || ((extendedHours >= 22) && (extendedHours < 24))) {
      extendedHours += " часа ";
    }

    if ((extendedHours >= 5) && (extendedHours <= 20)) {
      extendedHours += " часов ";
    }

    let lastNumberOfMinutes = extendedMinutes.toString().slice(1);

    if ((lastNumberOfMinutes == 1) && (extendedMinutes !== 11)) {
      extendedMinutes += " минута ";
    }

    if (
      (lastNumberOfMinutes >= 2) &&
      (lastNumberOfMinutes <= 4) &&
      !((extendedMinutes >= 12) && (extendedMinutes <= 14))
    ) {
      extendedMinutes += " минуты ";
    }

    if (
      ((lastNumberOfMinutes >= 5) && (lastNumberOfMinutes <= 9)) ||
      ((extendedMinutes >= 11) && (extendedMinutes <= 14)) ||
      (lastNumberOfMinutes == 0)
    ) {
      extendedMinutes += " минут ";
    }

    let lastNumberOfSeconds = extendedSeconds.toString().slice(1);

    if ((lastNumberOfSeconds == 1) && (extendedSeconds !== 11)) {
      extendedSeconds += " секунда ";
    }

    if (
      (lastNumberOfSeconds >= 2) &&
      (lastNumberOfSeconds <= 4) &&
      !((extendedSeconds >= 12) && (extendedSeconds <= 14))
    ) {
      extendedSeconds += " секунды ";
    }

    if (
      ((lastNumberOfSeconds >= 5) && (lastNumberOfSeconds <= 9)) ||
      ((extendedSeconds >= 11) && (extendedSeconds <= 14)) ||
      (lastNumberOfSeconds == 0)
    ) {
      extendedSeconds += " секунд ";
    }

    return (
      "Сегодня " +
      extendedDay +
      date +
      extendedMonth +
      year +
      " года, " +
      extendedHours +
      extendedMinutes +
      extendedSeconds
    );
  }

  function getElectronicForm() {
    function getFullFormOfNumber(n) {
      n += 1;
      if (n.toString().length === 1) {
        n = "0" + n;
      }
      return n;
    }
    return (
      getFullFormOfNumber(date) +
      "." +
      getFullFormOfNumber(month) +
      "." +
      year +
      " - " +
      getFullFormOfNumber(hours) +
      ":" +
      getFullFormOfNumber(minutes) +
      ":" +
      getFullFormOfNumber(seconds)
    );
  }
  console.log("getExtendedForm();: ", getExtendedForm());
  console.log("getElectronicForm(): ", getElectronicForm());
}
setInterval(getCurrentDate, 1000);