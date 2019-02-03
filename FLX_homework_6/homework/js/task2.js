const price = prompt('Your price:', '0');
const discount = prompt('Your discount:', '0');
const discountPrice = price - price * discount / 100;
const saved = price - discountPrice;
let message = '';

if (price > 0 && price < 10000000 && discount >= 0 && discount < 100) {
	message = 'Price without discount: ' + Math.round(price * 100) / 100 +
		'\nDiscount: ' + Math.round(discount * 100) / 100 + '%' +
		'\nPrice with discount: ' + Math.round(discountPrice * 100) / 100 +
		'\nSaved: ' + Math.round(saved * 100) / 100;
} else {
	message = 'Invalid input data';
}

alert(message);