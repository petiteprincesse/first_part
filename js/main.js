"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let isNotText = function (n) {
  return n === null || n.trim() === "" || !isNaN(+n);
};

let startBtn = document.getElementById("start"),
  cancelBtn = document.getElementById("cancel"),
  btnPlus = document.getElementsByTagName("button"),
  incomePlus = btnPlus[0],
  expensesPlus = btnPlus[1],
  additionalIncomeItem = document.querySelectorAll(".additional_income-item"),
  depositCheck = document.querySelector("#deposit-check"),
  budgetDayValue = document.getElementsByClassName("budget_day-value")[0],
  budgetMonthValue = document.getElementsByClassName("budget_month-value")[0],
  expensesMonthValue = document.getElementsByClassName(
    "expenses_month-value"
  )[0],
  accumulatedMonthValue = document.getElementsByClassName(
    "accumulated_month-value"
  )[0],
  additionalIncomeValue = document.getElementsByClassName(
    "additional_income-value"
  )[0],
  additionalExpensesValue = document.getElementsByClassName(
    "additional_expenses-value"
  )[0],
  incomePeriodValue = document.getElementsByClassName("income_period-value")[0],
  targetMonthValue = document.getElementsByClassName("target_month-value")[0],
  salaryAmount = document.querySelector(".salary-amount"),
  incomeTitle = document.querySelector(".income-title"),
  expensesTitle = document.querySelector(".expenses-title"),
  expensesItems = document.querySelectorAll(".expenses-items"),
  additionalExpenses = document.querySelector(".additional_expenses-item"),
  periodSelect = document.querySelector(".period-select"),
  additionalExpensesItem = document.querySelector(".additional_expenses-item"),
  targetAmount = document.querySelector(".target-amount"),
  incomeItems = document.querySelectorAll(".income-items"),
  periodAmount = document.querySelector(".period-amount");

let inputAreas = document.querySelectorAll('input[type="text"]'),
  dataInputAreas = document.querySelectorAll('.data input[type="text"]');

const AppData = function () {
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.expensesMonth = 0;
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
};

AppData.prototype.calcResult = function () {
  this.start = this.start.bind(this);
  if (salaryAmount.value === "") {
    startBtn.removeEventListener("click", this.start);
    return;
  }
  this.start();
};
AppData.prototype.start = function () {
  this.budget = +salaryAmount.value;
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getIncomeMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();

  this.showResult();
  this.replaceBtn();
};
AppData.prototype.showResult = function () {
  const _this = this;
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(", ");
  additionalIncomeValue.value = this.addIncome.join(", ");
  targetMonthValue.value = this.getTargetMonth();
  incomePeriodValue.value = this.calcPeriod();
  periodSelect.addEventListener("change", function () {
    incomePeriodValue.value = _this.calcPeriod();
  });
};
AppData.prototype.addExpensesBlock = function () {
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  let expensesItemsArr = cloneExpensesItem.querySelectorAll("input");
  expensesItemsArr.forEach((item) => {
    item.value = "";
  });
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
  expensesItems = document.querySelectorAll(".expenses-items");
  if (expensesItems.length === 3) {
    expensesPlus.style.display = "none";
  }
};
AppData.prototype.getExpenses = function () {
  const _this = this;
  console.log(_this);
  expensesItems.forEach(function (item) {
    let itemExpenses = item.querySelector(".expenses-title").value;
    let cashExpenses = item.querySelector(".expenses-amount").value;
    if (itemExpenses !== "" && cashExpenses !== "") {
      _this.expenses[itemExpenses] = cashExpenses;
    }
  });
};
AppData.prototype.addIncomeBlock = function () {
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  let incomeItemsArr = cloneIncomeItem.querySelectorAll("input");
  incomeItemsArr.forEach((item) => {
    item.value = "";
  });
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
  incomeItems = document.querySelectorAll(".income-items");
  if (incomeItems.length === 3) {
    incomePlus.style.display = "none";
  }
};
AppData.prototype.getIncome = function () {
  const _this = this;
  incomeItems.forEach(function (item) {
    let itemIncome = item.querySelector(".income-title").value;
    let cashIncome = item.querySelector(".income-amount").value;
    if (itemIncome !== "" && cashIncome !== "") {
      _this.income[itemIncome] = cashIncome;
    }
  });
};
AppData.prototype.getAddExpenses = function () {
  let addExpenses = additionalExpensesItem.value.split(",");
  console.log(this);
  const _this = this;
  addExpenses.forEach(function (item) {
    item = item.trim();
    if (item !== "") {
      _this.addExpenses.push(item);
    }
  });
};
AppData.prototype.getAddIncome = function () {
  const _this = this;
  additionalIncomeItem.forEach(function (item) {
    let itemValue = item.value.trim();
    if (itemValue !== "") {
      _this.addIncome.push(itemValue);
    }
  });
};
AppData.prototype.changePeriodValue = function () {
  periodAmount.textContent = periodSelect.value;
};
AppData.prototype.getExpensesMonth = function () {
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
};
AppData.prototype.getIncomeMonth = function () {
  for (let key in this.income) {
    this.incomeMonth += +this.income[key];
  }
};
AppData.prototype.getBudget = function () {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function () {
  let requiredPeriod = Math.ceil(targetAmount.value / this.budgetMonth);
  return requiredPeriod;
  // if (requiredPeriod > 0) {
  //   console.log("Цель будет достигнута за : " + requiredPeriod + " месяцев");
  // } else {
  //   console.log("Цель не будет достигнута");
  // }
};
AppData.prototype.getStatusIncome = function () {
  if (this.budgetDay >= 1200) {
    return "У вас высокий уровень дохода!";
  } else if (this.budgetDay > 600 && this.budgetDay < 1200) {
    return "У вас средний уровень дохода";
  } else if (this.budgetDay <= 600 && this.budgetDay > 0) {
    return "К сожалению у вас уровень дохода ниже среднего";
  } else if (this.budgetDay < 0) {
    return "Что то пошло не так";
  } else if (this.budgetDay == 0) {
    return "Вы не зарабатываете";
  } else {
    return "Ошибка";
  }
};
AppData.prototype.getInfoDeposit = function () {
  this.deposit = confirm("Есть ли у вас депозит в банке?");
  if (this.deposit) {
    do {
      this.percentDeposit = prompt("Какой годовой процент?", "10");
    } while (!isNumber(this.percentDeposit));
    do {
      this.moneyDeposit = prompt("Какая сумма заложена?", 10000);
    } while (!isNumber(this.moneyDeposit));
  }
};
AppData.prototype.calcPeriod = function () {
  return this.budgetMonth * periodSelect.value;
};
AppData.prototype.replaceBtn = function () {
  dataInputAreas.forEach(function (item) {
    item.disabled = true;
  });
  cancelBtn.style.display = "block";
  startBtn.replaceWith(cancelBtn);
  this.reset = this.reset.bind(this);
  cancelBtn.addEventListener("click", this.reset);
};
AppData.prototype.reset = function () {
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.expensesMonth = 0;
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  inputAreas.forEach(function (item) {
    item.value = "";
  });
  dataInputAreas.forEach(function (item) {
    item.disabled = false;
  });
  depositCheck.checked = false;
  cancelBtn.style.display = "none";
  cancelBtn.replaceWith(startBtn);
};

AppData.prototype.eventListeners = function () {
  this.calcResult = this.calcResult.bind(this);
  this.addExpensesBlock = this.addExpensesBlock.bind(this);
  this.addIncomeBlock = this.addIncomeBlock.bind(this);
  this.chargePeriodValue = this.changePeriodValue.bind(this);
  startBtn.addEventListener("click", this.calcResult);
  expensesPlus.addEventListener("click", this.addExpensesBlock);
  incomePlus.addEventListener("click", this.addIncomeBlock);
  periodSelect.addEventListener("change", this.changePeriodValue);
};

const appData = new AppData();
console.log("appData : ", appData);
appData.eventListeners();
console.log("appData : ", appData);

let inputNameValid = document.querySelectorAll("[placeholder='Наименование']");
let inputAmountValid = document.querySelectorAll("[placeholder='Сумма']");

inputNameValid.forEach(function (item) {
  item.addEventListener("input", function (event) {
    event.target.value = event.target.value.replace(/[^а-яА-ЯёЁ\s]+$/, "");
  });
});

inputAmountValid.forEach(function (item) {
  item.addEventListener("input", function (event) {
    event.target.value = event.target.value.replace(/[^0-9]+$/, "");
  });
});

// appData.getTargetMonth();

// function incomingData() {
//   console.log("Наша программа включает в себя данные: ");
//   for (let key in appData) {
//     console.log(key + ": " + appData[key]);
//   }
// }

// incomingData();

// appData.getInfoDeposit();
// console.log("appData.percentDeposit: ", appData.percentDeposit);
// console.log("appData.moneyDeposit: ", appData.moneyDeposit);
// console.log(appData.calcSavedMoney());

// console.log(
//   appData.addExpenses
//     .map(function (value) {
//       return value[0].toUpperCase() + value.substr(1);
//     })
//     .join(", ")
// );
