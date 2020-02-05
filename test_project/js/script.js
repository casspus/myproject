window.addEventListener('DOMContentLoaded', function() { // событие срабатывает, когда полностью загрузилась DOM структура (все теги)
	'use strict';

	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) { 
		//цикл
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
});