const result = document.querySelector('.result');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

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
			computerScore.textContent = +computerScore.textContent + 1;
		} else {
			result.textContent = 'You Win! Rock beats Paper';
			playerScore.textContent = +playerScore.textContent + 1;
		}
	} else if (playerSelection == 'paper') {
		if (computerSelection == 'paper') {
			result.textContent = "Tie! Paper doesn't beat Paper";
		} else if (computerSelection == 'scissors') {
			result.textContent = 'You Lose! Scissors beats Paper';
			computerScore.textContent = +computerScore.textContent + 1;
		} else {
			result.textContent = 'You Win! Paper beats Rock';
			playerScore.textContent = +playerScore.textContent + 1;
		}
	} else {
		if (computerSelection == 'scissors') {
			result.textContent = "Tie! Scissors doesn't beat Scissors";
		} else if (computerSelection == 'rock') {
			result.textContent = 'You Lose! Rock beats Scissors';
			computerScore.textContent = +computerScore.textContent + 1;
		} else {
			result.textContent = 'You Win! Scissors beats Paper';
			playerScore.textContent = +playerScore.textContent + 1;
		}
	}
}

const options = document.querySelectorAll('.option');
console.log(options);
options.forEach(option => {
	option.addEventListener('click', e => {
		playRound(e.target.value);
	});
});
