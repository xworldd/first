var budget = +prompt("Type here amount of your budget","");
var shopName = prompt("Type here name of your shoop","");
var firstItem= prompt("Type here name of good #1","");
var secondItem= prompt("Type here name of good #2","");
var thirdItem= prompt("Type here name of good #3","");
var shoopGoods = [firstItem,secondItem ,thirdItem ];

employers = {
		manager: "Arthas",
		cleaning: "VIKAred",
		guard: "Bogdan",
}
mainList = {
		budget: budget,
		name: shopName,
		array: shoopGoods,
		empObj: employers

}
confirm('Your daily budget is:' +  budget/30 + '$'); 

console.log(mainList);