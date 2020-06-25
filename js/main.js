'use strict';
function argumentHandler(arg) {
  if (typeof arg != "string") {
    return "Введен некорректный тип данных";
  }
  arg = arg.trim();
  // let argLength = arg.length;
  if (arg.length > 30) {
    arg = arg.substr(0, 30) + "... ";
  }
  return arg;
}

console.log(argumentHandler("Олечка"));