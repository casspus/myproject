window.addEventListener('DOMContentLoaded', function() { // событие срабатывает, когда полностью загрузилась DOM структура (все теги)
	'use strict';

	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) { 
		// цикл
		for (let i = a; i < tabContent.length; i++) { //код будет подстраиваться под количество элементов
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}		
	}

	hideTabContent(1); //вместо "a" передаем "1", она подставляется в функцию, и цикл начинается с 1, то есть скрываем все tabContent, кроме первого

	//показываем именно тот контент, который необходим
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) { // проверяем, действительно ли элем. скрыт
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	// обработчик событий при клике на табы
	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) { // проверяем, действительно ли кликнули на этот элем.
			// цикл
			for (let i = 0; i < tab.length; i++) { // цикл закончитсч, когда закончатся табы
				if (target == tab[i]) { // если то, куда нажали полностью совпадает с определенным табом, который перебираем
					hideTabContent(0); // скрываем все табы
					showTabContent(i); // показываем только тот, который совпадает с нашим табом по нумерации
					break;
				} 
			}
		} 
	});

	
	// Timer
	
	// Задаем дедлайн (конечная дата)
	let deadLine = '2020-02-06';
		
	// узнаем промежуток времени между сейчас и дедлайном
	function getTimeRemaining(endtime) {

		// количество милисек. между 2 датами:
		let t = Date.parse(endtime) - Date.parse(new Date()), // new Date() - время сейчас

			// кол-во сек. из милисек. до 59:
			seconds = Math.floor((t/1000) % 60),

			// кол-во целых минут
			minutes = Math.floor((t/1000/60) % 60),

			// кол-во целых часов
			hours = Math.floor((t/(1000*60*60)));

		// создаем новый объект, в который экспортируем переменные
		return {
			'total' : t, 
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}

	// подставляем значения в верстку:
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		// запускаем функцию каждую сек.
		// каждую сек. будем получать обновленное кол-во часов, минут, сек.
		function updateClock() {
			let t = getTimeRemaining(endtime);
			
			// доавляем "0" перед одинарным числом			
			function addZero(num) {
				if (num <= 9) {
					return '0' + num;
				} else return num;
			};

			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			// останавливаем таймер
			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}

	setClock('timer', deadLine);
});





