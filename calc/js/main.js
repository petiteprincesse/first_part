'use strict';

const startButton = document.getElementById('start');
console.log('startButton: ', startButton);

const addIncome = document.getElementsByTagName('button')[0];
console.log('addIncome: ', addIncome);
const addExpenses = document.getElementsByTagName('button')[1];
console.log('addExpenses: ', addExpenses);

const checkDeposit = document.querySelector('#deposit-check');
console.log('checkDeposit: ', checkDeposit);

const additionalIncomes = document.querySelectorAll('.additional_income-item');
console.log('additionalIncomes: ', additionalIncomes);

const outputData = document.querySelectorAll("[class$='-value']");
console.log('outputData: ', outputData);

const salary = document.querySelector(".salary-amount");
console.log('salary: ', salary);

const incomeTitle = document.querySelector(".income-items>.income-title");
console.log('incomeTitle: ', incomeTitle);

const incomeAmount = document.querySelector(".income-items>.income-amount");
console.log('incomeAmount: ', incomeAmount);

const expensesTitle = document.querySelector(".expenses-items>.expenses-title");
console.log('expensesTitle: ', expensesTitle);

const expensesAmount = document.querySelector(".expenses-items>.expenses-amount");
console.log('expensesAmount: ', expensesAmount);

const additionalExpenses = document.querySelector(".additional_expenses-item");
console.log('additionalExpenses: ', additionalExpenses);

const target = document.querySelector(".target-amount");
console.log('target: ', target);

const period = document.querySelector(".period-select");
console.log('period: ', period); 