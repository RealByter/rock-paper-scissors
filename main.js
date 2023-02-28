function handleOptionClick(e) {
	playRound(e.target.value);
}

const result = document.querySelector('.result');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const options = document.querySelectorAll('.option');
let playerScore = 0;
let computerScore = 0;

reset();

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

function playRound(playerSelection) {
	const computerSelection = getComputerChoice();

	if (playerSelection == 'rock') {
		if (computerSelection == 'rock') {
			result.textContent = "Tie! Rock doesn't beat Rock";
		} else if (computerSelection == 'paper') {
			result.textContent = 'You Lose! Paper beats Rock';
			computerScore++;
		} else {
			result.textContent = 'You Win! Rock beats Paper';
			playerScore++;
		}
	} else if (playerSelection == 'paper') {
		if (computerSelection == 'paper') {
			result.textContent = "Tie! Paper doesn't beat Paper";
		} else if (computerSelection == 'scissors') {
			result.textContent = 'You Lose! Scissors beats Paper';
			computerScore++;
		} else {
			result.textContent = 'You Win! Paper beats Rock';
			playerScore++;
		}
	} else {
		if (computerSelection == 'scissors') {
			result.textContent = "Tie! Scissors doesn't beat Scissors";
		} else if (computerSelection == 'rock') {
			result.textContent = 'You Lose! Rock beats Scissors';
			computerScore++;
		} else {
			result.textContent = 'You Win! Scissors beats Paper';
			playerScore++;
		}
	}

	computerScoreElement.textContent = computerScore;
	playerScoreElement.textContent = playerScore;

	if (playerScore >= 5) {
		endGame(true);
	} else if (computerScore >= 5) {
		endGame(false);
	}
}

function endGame(playerWon) {
	const winMessage = document.createElement('h3');

	winMessage.id = 'win-message';
	if (playerWon) {
		winMessage.textContent = 'Congratulations! You won!';
	} else {
		winMessage.textContent = 'Game Over! The computer won';
	}

	const restart = document.createElement('button');
	restart.textContent = 'Restart';
	restart.id = 'restart';
	restart.addEventListener('click', reset);

	const body = document.querySelector('body');
	body.appendChild(winMessage);
	body.appendChild(restart);

	options.forEach(option => {
		option.disabled = true;
		option.removeEventListener('click', handleOptionClick);
	});
}

function reset() {
	playerScore = 0;
	computerScore = 0;
	playerScoreElement.textContent = '0';
	computerScoreElement.textContent = '0';

	options.forEach(option => {
		option.disabled = false;
		option.addEventListener('click', handleOptionClick);
	});

	const winMessage = document.querySelector('#win-message');
	if (winMessage) {
		winMessage.remove();
	}
	const restart = document.querySelector('#restart');
	if (restart) {
		restart.remove();
	}
}
