function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
	switch (getRandomInt(1, 3)) {
		case 1:
			return 'rock';
		case 2:
			return 'paper';
		case 3:
			return 'scissors';
	}
}

function playRound(playerSelection, computerSelection) {
	let result = '';
	playerSelection = playerSelection.toLowerCase();

	if (playerSelection == 'rock') {
		if (computerSelection == 'rock') {
			result = "Tie! Rock doesn't beat Rock";
		} else if (computerSelection == 'paper') {
			result = 'You Lose! Paper beats Rock';
		} else {
			result = 'You Win! Rock beats Paper';
		}
	} else if (playerSelection == 'paper') {
		if (computerSelection == 'paper') {
			result = "Tie! Paper doesn't beat Paper";
		} else if (computerSelection == 'scissors') {
			result = 'You Lose! Scissors beats Paper';
		} else {
			result = 'You Win! Paper beats Rock';
		}
	} else {
		if (computerSelection == 'scissors') {
			result = "Tie! Scissors doesn't beat Scissors";
		} else if (computerSelection == 'rock') {
			result = 'You Lose! Rock beats Scissors';
		} else {
			result = 'You Win! Scissors beats Paper';
		}
	}

	return result;
}

function game() {
	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt('Choose your hand');
		const computerSelection = getComputerChoice();
		console.log(playRound(playerSelection, computerSelection));
	}
}

game();