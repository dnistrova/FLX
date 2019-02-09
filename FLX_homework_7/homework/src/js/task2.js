let maxNumber = 5;
let prize = 0;
let maxCurrentAttempt = 10;
const numberOfGuesses = 3;
const start = confirm('Do you want to play a game?');

if (start) {
	play();
} else {
	alert('You did not become a millionaire, but can.');
}

function generateRandomNumber(max) {
	let randomNumber = Math.random();

	randomNumber = randomNumber * (max + 1);
	randomNumber = Math.floor(randomNumber);

	return randomNumber;
}

function winAndContinue(wonPrize) {
	prize += wonPrize;

	alert('Congratulation! Your prize is: ' + prize + '$.');

	let cont = confirm('Do you want to continue?');

	if (cont) {
		maxNumber *= 2;
		maxCurrentAttempt *= 3;
		return true;
	} else {
		stop();
	}
}

function playGame(maxNumber, maxPrize, numberOfGuesses) {
	let randomNumber = generateRandomNumber(maxNumber);

	let currentPrize = maxPrize;
	let guessNumber = numberOfGuesses;
	while (guessNumber > 0) {
		let guess = '';
		let message = 'Enter a number from 0 to ' + maxNumber +
			'\nAttempts left: ' + guessNumber +
			'\nTotal prize: ' + prize +
			'\nPossible prize on current attempt: ' + currentPrize;
		guess = prompt(message, guess);

		if (!guess) {
			alert('Thank you for a game. Your prize is: ' + prize + '$');
		} else if (Number(guess) !== Number(randomNumber)) {
			console.log('Try again');
		} else {
			return winAndContinue(currentPrize);
		}
		guessNumber--;
		currentPrize = Math.floor(currentPrize / 2);
	}

	alert('Thank you for a game. Your prize is: ' + prize + '$');
}

function play() {
	while (playGame(maxNumber, maxCurrentAttempt, numberOfGuesses)) {
		console.log('Play game');
	}

	const again = confirm('Do you want to play again?');
	if (again) {
		maxNumber = 5;
		prize = 0;
		maxCurrentAttempt = 10;
		play();
	} else {
		stop();
	}
}

function stop() {
	alert('Thank you for a game. Your prize is: ' + prize + '$');
	alert('You did not become a millionaire, but can.');
	!start;
}