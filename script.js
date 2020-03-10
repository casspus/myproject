'use strict';

// Создать класс options
class Option {
	// Он должен содержать свойства: height, width, bg, fontSize, textAlign
	constructor(height, width, color, bg, fontSize, textAlign){
		this.height = height,
		this.width = width,
		this.color = color,
		this.bg = bg,
		this.fontSize = fontSize,
		this.textAlign = textAlign;
	}
	// Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров
	createDiv() {
		let elem = document.createElement('div');	
		let text = document.createTextNode('Какой-то текст');	
		document.body.appendChild(elem);
		elem.appendChild(text);
		let param = `height: ${this.height}px; width: ${this.width}px; color: ${this.color}; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
		elem.style.cssText = param;
	}
}

// Создать новый объект через класс
const item = new Option(100, 300, '#333', 'yellow', 18, 'left');

// Вызвать его метод и получить элемент на странице
item.createDiv();
