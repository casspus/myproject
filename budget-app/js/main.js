'use strict';

let btnStart = document.getElementById('start'),	
	budget = document.getElementsByClassName('budget-value'), // Доход
	daybudget = document.getElementsByClassName('daybudget-value'), // Бюджет на 1 день	
	level = document.getElementsByClassName('level-value'), // Уровень дохода
	expenses = document.getElementsByClassName('expenses-value'), // Обязательные расходы 	
	optionalexpenses = document.getElementsByClassName('optionalexpenses-value'), // Возможные траты	 
	income = document.getElementsByClassName('income-value'), // Дополнительный доход	
	monthsavings = document.getElementsByClassName('monthsavings-value'), // Накопления за 1 месяц	
	yearsavings = document.getElementsByClassName('yearsavings-value'), // Накопления за 1 год

	expensesItem = document.getElementsByClassName('expenses-item'), //поля(input) c обязательными расходами

	btnExpensesItem = document.getElementsByTagName('button')[0], // Утвердить oбязательные расходы
	btnOptionalExpenses = document.getElementsByTagName('button')[1], // Утвердить необязательные расходы
	btnCountBudget = document.getElementsByTagName('button')[2], // Расчет дневного бюджета

	optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'), // Поля для ввода необязательных расходов

	chooseIncome = document.querySelector('.choose-income'), // статьи возможного дохода

	savings = document.querySelector('#savings'), // чекбокс
	sum = document.querySelector('.choose-income'), // сумма
	percent = document.querySelector('.choose-percent'), // процент
	year = document.querySelector('.year-value'), // год
	month = document.querySelector('.month-value'), // месяц
	day = document.querySelector('.day-value'); // день


console.log(btnStart);
console.log(expensesItem);

console.log(btnExpensesItem);
console.log(btnOptionalExpenses);
console.log(btnCountBudget);

console.log(optionalexpensesItem);

console.log(chooseIncome);

console.log(savings);
console.log(sum);
console.log(percent);
console.log(year);
console.log(month);
console.log(day);

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)