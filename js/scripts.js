var a = 4,
  b = 3,
  value = (a * a) - (2 * a * b) - (b * b);
console.log("The result of the action = " + value);
alert("The result of the action  = " + value);

if (value < 0) {
    console.log('Wynik ujemny');
} if (value > 0) {
    console.log ('Wynik dodatni');
} else if (value == 0) {
	console.log('false');
}

