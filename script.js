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
    savings: true,

    //метод объекта appData
    chooseExpenses: function() {
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
    },

    //метод объекта appData
    detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();	
		alert("Ваш дневной бюджет: " + appData.moneyPerDay + "руб.");    	
    },

    //метод объекта appData
	detectLevel: function() {
		if(appData.moneyPerDay < 1000){
			console.log("Уровень достатка низкий");
		} else if(appData.moneyPerDay > 1000 && appData.moneyPerDay < 3000){
			console.log("Уровень достатка средний");
		} else if (appData.moneyPerDay > 3000){
			console.log("Уровень достатка высокий");
		} else {
			console.log("Ошибка");
		}		
	},

    //метод объекта appData
	checkSavings: function() {
		// какова сумма накоплений и под какой процент
		if(appData.savings == true){
			let save = +prompt("Какова сумма накоплений?"),
				percent	= +prompt("Под какой процент?");

			//прибыль за месяц:	
			//деньги делим на 100/12 месяцев*на процент, который указал пользователь
			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},

    //метод объекта appData
	chooseOptExpenses: function() {
		// Функция для определения необязательных расходов
		for (let i = 1; i <= 3; i++){
			let questionOptExpenses = prompt("Статья необязательных расходов?");	
			appData.optionalExpenses[i] = questionOptExpenses;
		}	
		console.log(appData.optionalExpenses);		
	},

	//метод объекта appData
	chooseIncome: function() {
		let items = prompt("Что принесет доп. доход? (Перечислите через запятую)" , "");

		if (typeof(items) != "string" || items == "" || typeof(items) == null){

			console.log("Вы ввели некорректные данные или не ввели их вовсе");

		} else {
			appData.income = items.split(', ');

			//добавить какой-то элемент в конец
			appData.income.push(prompt("Может что-то еще?"));

			//сортируем по алф.
			appData.income.sort();					
		}	

		appData.income.forEach (function (itemmassive, i) {
			alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
		});	

        // appData.income.forEach (function (itemmassive, i) {
        //     alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        // });
	}
};	

//запускае методы
appData.detectDayBudget();		
appData.detectLevel();		
appData.chooseIncome();		

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}




















