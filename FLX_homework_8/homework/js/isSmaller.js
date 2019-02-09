function isBigger(number1, number2) {
	return number1 > number2;
}

function isSmaller(number1, number2) {
	return !isBigger(number1, number2) && number1 !== number2;
}

isSmaller(5, -1);