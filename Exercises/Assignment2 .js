function getRandomInt()
{
	let Card;
	Card = Math.ceil(Math.random() * 12);
	return Card;
}
function Add(a,b){
	return a + + b;
}
function Dec(a,b){
	return a - b;
}
console.log('////////-------- Welcome To WAR--------////////');
{
	const YourCard = getRandomInt();
	const Computer = getRandomInt();
	reandlineSync = require("readline-sync");
	const {question} = require("readline-sync");
	let player = question("May I have your name? ");
	console.log('Hello ' + player + ' You Currently Have 50$ ');
	let bet = question("Place your bet for the next round : 1 - 50:  ");
	if (bet > 50 || bet < 1) {
		console.log('I said between 1 to 50 And you type :' + bet + '!!');
		console.log('I do not play with liars!!! Bye');
	} else if (YourCard === Computer) {
		console.log("EQUAL !!!!! ");
	} else if (bet < 50 || bet > 0) {
		console.log('Your Card is :' + YourCard + ' And Computer Card is  :' + Computer);
		if (YourCard < Computer) {
			console.log('Your lost  ' + bet + ' And now you have ' + Dec(50, bet));
			if (Dec(50, bet) === 0) {
				console.log('Your Have 0$ ' + ' You are broke.....Bye Bye');
			}
		} else
			console.log('Your Won  ' + bet + ' And now you have ' + Add(50, bet));
	}
}















	/*	while (Dec(50, bet) === 0) {
			console.log('Your Have 0$ ' + ' You are broke.....Bye Bye');
}*/

























//const YourCard= getRandomInt();




