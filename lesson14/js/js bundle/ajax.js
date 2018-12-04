function ajax() {


// let age = document.getElementById('age');
//  age.addEventListener('change', function (surname, name) { 
//  surname = 'Ivan';
//  name = 'Ivaaan';
//  trueAge = age.value;
// 	console.log("Пользователь " + surname + " " + name + ", его возраст " + trueAge); });


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