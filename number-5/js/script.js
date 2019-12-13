'use strict';

let body = document.getElementsByTagName("body"),
	menu = document.getElementsByClassName("menu")[0],
	menuItem = document.getElementsByClassName("menu-item"),
	menuItemLi = document.createElement("li"),
	title = document.getElementById("title"),
	adv = document.getElementsByClassName("adv")[0],
	ans = prompt("Как вы относитесь к тезнике Apple"),
	promptText = document.getElementById("prompt");

menu.insertBefore(menuItem[2], menuItem[1]);

menu.appendChild(menuItemLi).classList.add("menu-item");

menuItemLi.textContent = ("Пятый пункт");
title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

promptText.textContent = ans;
