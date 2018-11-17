let title 			= document.getElementById("title");
let menuItem = document.getElementsByClassName('menu-item');
let body 				= document.getElementsByTagName('body');		
let column 		= document.getElementsByClassName('column');		
let ads 					= document.getElementsByClassName('adv');
let survey   = prompt("Ваше отношение к технике apple?");
let answer		 = document.getElementById("prompt");


menuItem[1].innerHTML = ('Второй пункт');
menuItem[2].innerHTML = ('Третий пункт');

body[0].style.background = 'url(../arcive/img/apple_true.jpg) center no-repeat';

title.innerHTML = ('Мы продаем только подлинную технику Apple');

column[1].removeChild(ads[0]);

answer.innerHTML = (survey);




