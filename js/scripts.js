var a = 4,
	b = 3,
	value = (a * a) - (2 * a * b) - (b * b);
console.log("The result of the action = " + value);
alert("The result of the action  = " + value);

if (value < 0) {
    console.log('true');
} else if (value > 0) {
    console.log('false');
} else {
   console.log('Wynik ujemny');
}
/*
if (-17 == 0){
	console.log('false')
}
else (-17 == 0){
	console.log('false')
}
*/