window.addEventListener('DOMContentLoaded', function() { // событие срабатывает, когда полностью загрузилась DOM структура (все теги)
	'use strict';
});



// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
// 	console.log('Hello World!');
// }

// let timerId = setTimeout(function log() {
// 	console.log('Hello');
// 	setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
	elem = document.querySelector('.box');

function myAnimation() {
	let pos = 0; // изначальная позиция равна 0

	let id = setInterval(frame, 10); // каждые 10 милисекунд запускаем функцию frame

	function frame (){ // кадр
		if (pos == 300){ // если позиция равна 300 и top и left, по
			clearInterval(id); // останавливаем таймер
		} else {
			pos++; // увеличиваем каждый раз на 1, если позиция еще не достигла 300
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}	

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
	btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
	if(event.target && event.target.tagName == 'BUTTON') { //действительно ли есть то, куда мы кликаем и то куда мы кликаем имеет тег button
		console.log("Hello");
	}
});

btnBlock.addEventListener('click', function(event) {
	if(event.target && event.target.matches('button.first')) { //действительно ли есть то, куда мы кликаем и то куда мы кликаем имеет тег button с классом first
		console.log("Hello");
	}
});
