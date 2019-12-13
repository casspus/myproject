'use strict';

let btnStart = document.getElementById('start'),	

	budget = document.getElementsByClassName('budget-value')[0], // Доход
	daybudget = document.getElementsByClassName('daybudget-value')[0], // Бюджет на 1 день	
	level = document.getElementsByClassName('level-value')[0], // Уровень дохода
	expenses = document.getElementsByClassName('expenses-value')[0], // Обязательные расходы 
	optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0], // Возможные траты	 
	income = document.getElementsByClassName('income-value')[0], // Дополнительный доход	
	monthsavings = document.getElementsByClassName('monthsavings-value')[0], // Накопления за 1 месяц	
	yearsavings = document.getElementsByClassName('yearsavings-value')[0], // Накопления за 1 год

	expensesItem = document.getElementsByClassName('expenses-item'), //поля(input) c обязательными расходами

	btnExpensesItem = document.getElementsByTagName('button')[0], // Утвердить oбязательные расходы
	btnOptionalExpenses = document.getElementsByTagName('button')[1], // Утвердить необязательные расходы
	btnCountBudget = document.getElementsByTagName('button')[2], // Расчет дневного бюджета

	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), // Поля для ввода необязательных расходов

	chooseIncome = document.querySelector('.choose-income'), // статьи возможного дохода

	savings = document.querySelector('#savings'), // чекбокс
	sum = document.querySelector('.choose-sum'), // сумма
	percent = document.querySelector('.choose-percent'), // процент
	year = document.querySelector('.year-value'), // год
	month = document.querySelector('.month-value'), // месяц
	day = document.querySelector('.day-value'); // день


console.log(expensesItem);

console.log(btnExpensesItem);

console.log(optionalExpensesItem);
console.log(btnOptionalExpenses);
console.log(btnCountBudget);

console.log(chooseIncome);

console.log(savings);
console.log(sum);
console.log(percent);

console.log(budget);
console.log(daybudget);
console.log(level);
console.log(expenses);
console.log(optionalexpenses);
console.log(income);
console.log(monthsavings);
console.log(yearsavings);

console.log(year);
console.log(month);
console.log(day);

console.log(btnStart);


// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)