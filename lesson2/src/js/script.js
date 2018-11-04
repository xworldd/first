var budget = +prompt("Type here amount of your budget","");
var shopName = prompt("Type here name of your shoop","");

arr = {

}

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

for (let i = 0; i < 5; i++) {
	let a = prompt("Type here name of good #" +i,"");
	if ((typeof(a)) === 'string' &&  a != '' && a.length < 50 ) {
		console.log('That right');
		mainList.shoopGoods[i] = a;
	}

}


confirm('Your daily budget is:' +  budget/30 + '$'); 

console.log(mainList);

console.log(arr[0]);
