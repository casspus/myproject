'use strict';

let inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd');

//обработчик события на наш первый инпут, каждый раз, когда вводим новый символ, применялась операция - конвентирование в другую валюту
inputRub.addEventListener('input', () => {
	//главный объект с раоты с ajax-запросами
	let request = new XMLHttpRequest();

	//метод open - производит настройку ajax-запроса - может принимать 5 различных аргументов
	//method - метод, которым общается наш клиент с сервером (GET или POST)
	//url - путь к нашему серверу (локальный файл, облачный и тп)
	//async - по умолчанию - true, если поставить false, то пока сервер не ответит, мы не сможем взаимодействовать со страницей
	// request.open(method, url, async, login, pass)
	request.open('GET', 'js/current.json');


	//настроим запрос на получение json-данных:
	//объект - request
	//метод - setRequestHeader (настройка http-запросов)
	//какой контент будет ('Content-type', 'application/json; charset=utf-8')
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

	//метод send - открывает соединение и отправляет запрос на сервер:
	request.send();

	//status - в каком состоянии сейчас сервер (пример - 404)
	//statusText - текстовое описание ответа от серевера (пример - ok; not found)
	//responseText / response - текст ответа сервера 
	//readyState - тукущее состояние запроса

	//Состояние запроса:
	// 0	UNSENT	Клиент создан. Метод open() еще не вызван.
	// 1	OPENED	Вызван метод open(). В этом состоянии можно добавить заголовки через метод setRequestHeader(); вызов метода send() отправит запрос.
	// 2	HEADERS_RECEIVED	Вызван метод send(), получены заголовки и код ответа (200, 404, 501 и проч).
	// 3	LOADING	Загрузка; если значение responseType равно "text" или пустой строке, то responseText содержит частичные данные.
	// 4	DONE	Операция завершена. Все данные получены.
	
	// request.status == 200  - OK ("Успешно". Запрос успешно обработан.)
	require.addEventListener('readystatechange', function() {
		//что нам отвечает сервер, в каком он состоянии
		if (request.readyState === 4 && request.status == 200) {
			//parse - превращаем json файлы в js конструкции
			let data = JSON.parse(request.response);

			//конвертация рублей в доллары - берем то, что ввел пользователь и делим на курс
			inputUsd.value = input.value / data.usd;
		} else {
			inputUsd.value = "Что-то пошло не так";
		}
	});
});







