'use strict';

let money, time;

function start(){
	money = +prompt("Ваш бюджет на месяц ");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц ");
	}
};
start();
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++){
		let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
			b = prompt("Во сколько обойдется", "");
		if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
		} else {
			i = i - 1;
		}
	};
}
chooseExpenses();

// Расчет дневного бюджета
function detectDayBudget(){
	appData.moneyPerDay = (appData.budget / 30).toFixed();	
	alert("Ваш дневной бюджет: " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel(){
	if(appData.moneyPerDay < 1000){
		console.log("Уровень достатка низкий");
	} else if(appData.moneyPerDay > 1000 && appData.moneyPerDay < 3000){
		console.log("Уровень достатка средний");
	} else if (appData.moneyPerDay > 3000){
		console.log("Уровень достатка высокий");
	} else {
		console.log("Ошибка");
	}
}
detectLevel();

// если на депозите есть сбережения
function checkSavings() {
	// какова сумма накоплений и под какой процент
	if(appData.savings == true){
		let save = +prompt("Какова сумма накоплений?"),
			percent	= +prompt("Под какой процент?");

		//прибыль за месяц:	
		//деньги делим на 100/12 месяцев*на процент, который указал пользователь
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}
checkSavings();

// Функция для определения необязательных расходов
function chooseOptExpenses() {
	for (let i = 1; i <= 3; i++){
		let questionOptExpenses = prompt("Статья необязательных расходов?");	
		appData.optionalExpenses[i] = questionOptExpenses;
	}	
	console.log(appData.optionalExpenses);
}
chooseOptExpenses();
















