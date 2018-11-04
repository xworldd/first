var budget = +prompt("Type here amount of your budget","");
var shopName = prompt("Type here name of your shoop","");

employers = {
		manager: "Arthas",
		cleaning: "VIKAred",
		guard: "Bogdan",
}
mainList = {
		budget: budget,
		name: shopName,
		shoopGoods: [] ,
		empObj: employers
}

mainList.shoopGoods[0] = prompt("Type here name of good #1","");
mainList.shoopGoods[1] = prompt("Type here name of good #2","");
mainList.shoopGoods[2] = prompt("Type here name of good #3","");


confirm('Your daily budget is:' +  budget/30 + '$'); 

console.log(mainList);

