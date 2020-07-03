"use strict";

let arr = [];
arr = prompt("Введите семь любых многозначных чисел через один пробел").split(" ");
for (let i=0; i<arr.length; i++) {
  if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
    console.log(arr[i]);
  }
}

let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
for (let i=0; i<primeNumbers.length; i++) {
  primeNumbers[i] += ` Делители этого числа 1 и ${primeNumbers[i]}`;
  console.log(primeNumbers[i]);
} 