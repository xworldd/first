let category_value = document.getElementsByClassName("category-value"),
				goods_value = document.getElementsByClassName("goods-value")[0],
				time_value = document.getElementsByClassName("time-value")[0],
				budget_value = document.getElementsByClassName("budget-value")[0],
				employers_value = document.getElementsByClassName("employers-value");

				
let name_output = document.getElementsByClassName("name-output")[0],			 
				budget_output = document.getElementsByClassName("budget-output")[0],			 
				goods_output = document.getElementsByClassName("goods-output")[0],			 
				category_output = document.getElementsByClassName("category-items-output")[0],			 
				employers_output = document.getElementsByClassName("employers-output")[0],			 
				items_output = document.getElementsByClassName("items-output")[0],			 
				discount_output = document.getElementsByClassName("discount-output")[0],			 
				budget_calc = document.getElementsByClassName("budget-calc")[0],			 
				shop_status_output = document.getElementsByClassName("shop-status-output")[0];

let main_button = document.getElementsByClassName("main-button")[0],
				category_button = document.getElementsByClassName("category-button")[0],
				budget_button = document.getElementsByClassName("budget-button")[0],
				employers_button = document.getElementsByClassName("employers-button")[0];

			

let budget,
				money,
				discount = 0

main_button.addEventListener('click', () => {

	name_output.textContent = prompt("Type here name of your shoop","").toUpperCase();
	mainList.money = +prompt("Type here amount of your budget"," ");
	mainList.discount = confirm("Does your shop has an discount system?");

	budget_output.textContent = mainList.money;

	if (mainList.discount == true) {
		discount_output.style = "background : green;"
		discount = +prompt("Type here amount of your customer discount, %");
		discount_output.textContent = discount+"%";
	} else {
		discount_output.style = "background : red;"
	}

});			

category_button.addEventListener('click', () => {
	for (let i = 0; i < category_value.length; i++) {

		let a = category_value[i].value;

		if ((typeof(a)) === 'string'&& (typeof(a)) != null && a.length < 50 ) {
			console.log('That right');
			mainList.category[i] = a;
			category_output.textContent = mainList.category;
		} else {
			i = i - 1;
		}
	}	
});

goods_value.addEventListener('change', () =>{
	let items = goods_value.value;

	if (isNaN(items) && items != '') {
			mainList.goods = items.split(', ');
			mainList.goods.sort();
			items_output.textContent = mainList.goods;
	}
});

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time< 0 ) {
		alert("Thats incredible!");
		mainList.open = false;
	} else if (time> 8 && time < 20) {
		console.log("Its time to work, comrads!");
		mainList.open = true;
	} else if (time < 24) {
		alert("Its too late to work.Come back later!")
		mainList.open = false;
	} else {
		alert("There are only 24 hours in a single day,comrad!")
		mainList.open = false;
	}

	if (mainList.open == true) {
		shop_status_output.style = "background : green;"
	} else {
		shop_status_output.style = "background : red;"
	}

});

budget_button.addEventListener('click', () =>{
	budget_calc.value = mainList.money/30;
});

employers_button.addEventListener('click', () =>{
	for (let i = 0; i < employers_value.length; i++){
		let name = employers_value[i].value;
		mainList.employers[i] = name;
		employers_output.textContent = mainList.employers + ',';
	}

});


				
console.log(typeof(discount));

let category = [];


const mainList = {
		budget: money,
		name: name_output,
		category: [],
		goods: [],
		employers: [],
		discount: true,
		open: false
}

function calcPrice() {
	if (mainList.discount == true) {
		price = (price/100)*80;
		alert("You lucky!"+ Math.round(price));
	} else {
			alert("Сегодня акций нет, извините.");
		}
}


console.log(mainList);
console.log(category_value[0]);
console.log(mainList.discount);


