window.addEventListener('DOMContentLoaded', function() {
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

let age = document.getElementById('age');
 age.addEventListener('change', function (surname, name) { 
 surname = 'Ivan';
 name = 'Ivaaan';
 trueAge = age.value;
	console.log("Пользователь " + surname + " " + name + ", его возраст " + trueAge); });


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
 

});
