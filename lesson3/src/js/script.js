let budget,
				shopName,
				price = 332

				

function start() {
	budget = prompt("Type here amount of your budget","");
	while(isNaN(budget) || budget == "" || budget == null) {

		budget = prompt("Type here amount of your budget","");
	}

	shopName = prompt("Type here name of your shoop","").toUpperCase();

}



console.log(typeof(discount));

start();


mainList = {
		budget: budget,
		name: shopName,
		shoopGoods: [] ,
		employers: [] ,
		discount: true
}

function calcPrice() {
	if (mainList.discount == true) {
		price = (price/100)*80;
		alert("You lucky!"+ Math.round(price));
	} else {
			alert("Сегодня акций нет, извините.");
		}
}

function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt("Type here name of good #" +i,"");
			if ((typeof(a)) === 'string'&& (typeof(a)) != null &&  a != '' && a.length < 50 ) {
				console.log('That right');
				mainList.shoopGoods[i] = a;
			} else {
				i = i - 1;
			}

		}

}

function recEmployers() {
	for (let i = 0; i < 3; i++) {
		let num = prompt("Type here number of employer #" +i,""); 
		let name = prompt("Type here name of employer #" +i,""); 

		mainList.employers[i] = "Number of employer"+"#"+i+":"+ num +" Name of employer"+"#"+i+":"+ name;
	}
}

// chooseGoods();

function dailyBudget(){
	confirm('Your daily budget is:' +  budget/30 + '$'); 
}

recEmployers();

dailyBudget();

calcPrice();


console.log(mainList);


