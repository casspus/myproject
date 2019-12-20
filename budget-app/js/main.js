'use strict';

let startBtn = document.getElementById('start'),	

	budgetValue = document.getElementsByClassName('budget-value')[0], // Доход
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0], // Бюджет на 1 день	
	levelValue = document.getElementsByClassName('level-value')[0], // Уровень дохода
	expensesValue = document.getElementsByClassName('expenses-value')[0], // Обязательные расходы 
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0], // Возможные траты	 
	incomeValue = document.getElementsByClassName('income-value')[0], // Дополнительный доход
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0], // Накопления за 1 месяц	
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0], // Накопления за 1 год

	expensesItem = document.getElementsByClassName('expenses-item'), //поля(input) c обязательными расходами
	expensesBtn = document.getElementsByTagName('button')[0], // Утвердить oбязательные расходы
	optionalExpensesBtn = document.getElementsByTagName('button')[1], // Утвердить необязательные расходы
	countBtn = document.getElementsByTagName('button')[2], // Расчет дневного бюджета
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), // Поля для ввода необязательных расходов
	incomeItem = document.querySelector('.choose-income'), // статьи возможного дохода

	checkSavings = document.querySelector('#savings'), // чекбокс
	sumValue = document.querySelector('.choose-sum'), // сумма
	percentValue = document.querySelector('.choose-percent'), // процент
	yearValue = document.querySelector('.year-value'), // год
	monthValue = document.querySelector('.month-value'), // месяц
	dayValue = document.querySelector('.day-value'); // день

let money, time;

startBtn.addEventListener('click', function() { //когда кликаем на кнопку старт, происходит функция
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt('Ваш бюджет на месяц?', '');

	while (isNaN(money) || money == '' || money == null){ // проверка ответа
		money = prompt("Ваш бюджет?", "");
	}

	appData.budget = money; // фиксируем ответы в глобальном объекте
	appData.timeData = time;

	budgetValue.textContent = money.toFixed(); // записываем данные в поле budgetValue
	yearValue.value = new Date(Date.parse(time)).getFullYear(); // создаем дату - год
	monthValue.value = new Date(Date.parse(time)).getMonth() +1; // создаем дату - месяц
	dayValue.value = new Date(Date.parse(time)).getDate(); // создаем дату - день
});

// обязательные расходы
expensesBtn.addEventListener('click', function() {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++){ // expensesItem.length - количество инпутов
		let a = expensesItem[i].value, // наименования расходов [i] - 0, первый инпут - наименование
			b = expensesItem[++i].value; // сколько это будет стоить [++i] - слудующий инпут
		if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
			sum += +b; // каждый раз добавляем к сумме значение b
		} else {
			i = i - 1;
		}
	};	
	expensesValue.textContent = sum; // записываем полученную сумму 
});

// необязательные расходы
optionalExpensesBtn.addEventListener('click', function() {
	for (let i = 0; i < optionalExpensesItem.length; i++){
		let opt = optionalExpensesItem[i].value;	
		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; // все данные через пробел
	}	
});

// Расчет дневного бюджета
countBtn.addEventListener('click', function() {
	if (appData.budget != undefined) { // проверка что пользователь нажал "начать рассчет"
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay; // выводим на страницу

		if(appData.moneyPerDay < 1000){
			levelValue.textContent = "Уровень достатка низкий";
		} else if(appData.moneyPerDay > 1000 && appData.moneyPerDay < 3000){
			levelValue.textContent = "Уровень достатка средний";
		} else if (appData.moneyPerDay > 3000){
			levelValue.textContent = "Уровень достатка высокий";
		} else {
			levelValue.textContent = "Ошибка";
		}				
	} else {
		dayBudgetValue.textContent = "Произошла ошибка";
	}			
});

// возможный доход
incomeItem.addEventListener('input', function() {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

// Есть ли накопления
checkSavings.addEventListener('click', function() {
	if (appData.savings == true) { // если значение в true, мы его должны выключить
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function() {  	
	if (appData.savings == true) { // рассчитываем накопления только если есть накопления
		let sum = +sumValue.value,
			percent = +percentValue.value;
		appData.monthIncome = sum/100/12*percent; // подсчет процентов на месяц
		appData.yearIncome = sum/100*percent; // подсчет процентов на год

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1); // выводим на экран (округляем до 1 цифры после ,)
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1); 		
	}
});

percentValue.addEventListener('input', function() {  	
	if (appData.savings == true) { // рассчитываем накопления только если есть накопления
		let sum = +sumValue.value,
			percent = +percentValue.value;
		appData.monthIncome = sum/100/12*percent; // подсчет процентов на месяц
		appData.yearIncome = sum/100*percent; // подсчет процентов на год

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1); // выводим на экран (округляем до 1 цифры после ,)
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1); 		
	}
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};	



