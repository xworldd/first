(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function ajax() {


// let age = document.getElementById('age');
//  age.addEventListener('change', function (surname, name) { 
//  surname = 'Ivan';
//  name = 'Ivaaan';
//  trueAge = age.value;
// 	console.log("╨Я╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╤М " + surname + " " + name + ", ╨╡╨│╨╛ ╨▓╨╛╨╖╤А╨░╤Б╤В " + trueAge); });


 // let form 	= document.getElementsByClassName('main-form')[0],
 // 				input = form.getElementsByTagName('input'),
 // 				statusMessage = document.createElement('div'),
 // 				statusMessage.classList.add('status');

 // 				form.addEventListener('submit',function(event){
 // 					event.perventDefault();
 // 					form.appendChild(statusMessage);

 // 					// AJAX
 // 					let request = new XMLHTttpRequest();
 // 					request.open("POST",'server.php')

 // 					request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 // 					let formData = new FormData(form);
 // 					request.send(formData);

 // 					request.onreadystatechange = function() {
 // 						if (request.readyState < 4) {
 // 							statusMessage.innerHTML = message.loading;
 // 						} else if (request.readyState === 4) {
 // 							if (request.status == 200 && request.status < 300){
 // 								statusMessage.innerHTML = message.success;
 // 							}
 // 						}
 // 					}
 // 				})

} 

module.exports = ajax;
},{}],2:[function(require,module,exports){
function calc() {
	
	let persons = document.getElementsByClassName('counter-block-input')[0],
					restDays = document.getElementsByClassName('counter-block-input')[1],
					place = document.getElementById('select'),
					totalValue = document.getElementById('total'),
					personsSum = 0,
					daysSum = 0,
					total = 0;

					totalValue.innerHTML = 0;

					persons.addEventListener('change', function() {
						personsSum = +this.value;
						total = (daysSum + personsSum)*4000;
						if (restDays.value == '') {
							totalValue.innerHTML = 0;
						} else {
							totalValue.innerHTML = total;
						}
					});
					restDays.addEventListener('change', function() {
						daysSum = +this.value;
						total = (daysSum + personsSum)*4000;
						if (persons.value == '') {
							totalValue.innerHTML = 0;
						} else {
							totalValue.innerHTML = total;
						}
					});

					place.addEventListener('click', function(){
						if (restDays.value == '' || persons.value == ''  ){
							totalValue = 0;
						} else {
							let a = total;
							totalValue.innerHTML = a * this.options[this.selectedIndex].value;;
						}

					});
}

module.exports = calc;
},{}],3:[function(require,module,exports){
function popup() {

	let more					= document.querySelector('.more'),
					descMore = document.getElementsByClassName('.description-btn'),
					parent 		= document.querySelector('.info'),
					overlay 	= document.querySelector('.overlay'),
					close 			= document.querySelector('.popup-close');

		parent.addEventListener('click', function(event) {
			if (event.target && event.target.className == 'description-btn'){
				event.target.classList.add('more-splash');
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';

			}

		});

		more.addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';

		});

		close.addEventListener('click', function() {
			this.classList.remove('more-splash');
			overlay.style.display = 'none';
			document.body.style.overflow = '';

		});
}

module.exports = popup;
},{}],4:[function(require,module,exports){
function slider() {
	let slideIndex = 1,
					slides = document.getElementsByClassName('slider-item'),
					prev = document.querySelector('.prev'),
					next = document.querySelector('.next'),
					dotsWrap = document.querySelector('.slider-dots'),
					dots = document.getElementsByClassName('dot');

		showSlides(slideIndex);

		function showSlides(n) {
			if (n > slides.length) {
				slideIndex = 1
			};

			if (n < 1) {
				slideIndex = slide.length;
			};

			for ( let i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none';
			};

			for ( let i = 0; i < dots.length; i++) {
				dots[i].classList.remove('dot-active'); 
			};

			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active');

		};

		function plusSlides(n) {
			showSlides(slideIndex += n);
		}

			function currentSlide(n) {
			showSlides(slideIndex = n);
		}

		prev.addEventListener('click', function(){
			plusSlides(-1);

		});

		next.addEventListener('click', function(){
			plusSlides(1);

		});

		dotsWrap.addEventListener('click', function(event) {
			for (let i = 0; i < dots.length + 1; i++){
				 if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				 	currentSlide(i);
				 }
			}
		});

}

module.exports = slider;
},{}],5:[function(require,module,exports){
function timer() {
let deadline = "2018-12-22";

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60),	
		minutes = Math.floor( (t/1000/60) % 60),	
		hours = Math.floor( (t/(1000*60*60))	);

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds,
		};

	} 

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
						hours = timer.querySelector('.hours'),
						minutes = timer.querySelector('.minutes'),
						seconds = timer.querySelector('.seconds');

						function updateClock() {
							let t = getTimeRemaining(endtime);
							hours.innerHTML = t.hours;
							minutes.innerHTML = t.minutes;
							seconds.innerHTML = t.seconds;

							if (t.total <= 0) {
								timer.innerHTML = "00:00:00";
								clearInterval(timeInterval);
							}

						};

						updateClock();
						let timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer',deadline);

}

module.exports = timer;
},{}],6:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

let popup  = require('../js/js bundle/popup.js');
let timer  = require('../js/js bundle/timer.js');
let slider = require('../js/js bundle/slider.js');
let calc   = require('../js/js bundle/calc.js');
let ajax   = require('../js/js bundle/ajax.js');

popup();
timer();
slider();
calc();
ajax();

});

},{"../js/js bundle/ajax.js":1,"../js/js bundle/calc.js":2,"../js/js bundle/popup.js":3,"../js/js bundle/slider.js":4,"../js/js bundle/timer.js":5}]},{},[6]);
