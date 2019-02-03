const a = parseInt(prompt('a:', '1'));
const b = parseInt(prompt('b:', '0'));
const c = parseInt(prompt('c:', '0'));
const D = b * b - 4 * a * c;
let message = '';

if (a !== 0 && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
	if (D < 0) {
		message = 'D < 0.' +
			'\nNo solution.';
	} else if (D === 0) {
		const x = -b / (2 * a);
		message = 'Discriminant D = ' + D + ';' +
			'\nx = ' + x + '.';
	} else {
		const x1 = (-b + Math.sqrt(D)) / (2 * a);
		const x2 = (-b - Math.sqrt(D)) / (2 * a);
		message = 'Discriminant D = ' + D + ';' +
			'\nx1 = ' + x1 + ' and x2 = ' + x2 + '.';
	}

} else {
	message = 'Invalid input data';
}

alert(message);