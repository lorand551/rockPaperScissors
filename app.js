// get buttons
let resetBtn = document.getElementById("reset-btn");
let buttons = document.querySelectorAll(".btn-choice");
// store human choice
let humanChoice = "";
// get scores
let playerScore = document.getElementById("player");
let aiScore = document.getElementById("ai");
// get results stats
let results = document.getElementById("results");

function handleChoice(event) {
	humanChoice = event.target.dataset.choice;
	let computerChoice = getComputerChoice();
	playRound(humanChoice, computerChoice);
	if (humanScore === 5) {
		alert("YOU REACHED 5 POINTS, CONGRATULATIONS, YOU WON !");
		results.textContent = "Press the RESET button to play again.";
		disableButtons();
	} else if (computerScore === 5) {
		alert("THE AI HAS REACHED 5 POINTS, YOU LOST!");
		results.textContent = "Press the RESET button to play again.";
		disableButtons();
	}
}

// disable all buttons
function disableButtons() {
	buttons.forEach(function (button) {
		button.disabled = true;
	});
}

// enable buttons
function enableButtons() {
	buttons.forEach(function (button) {
		button.disabled = false;
	});
}

function resetGame() {
	humanScore = 0;
	computerScore = 0;
	playerScore.textContent = `Player: ${humanScore}`;
	aiScore.textContent = `AI: ${computerScore}`;
	results.textContent = "GAME RESET. ENJOY PLAYING!";
	enableButtons();
}

// variables for score
let humanScore = 0;
let computerScore = 0;

// random computer selection
function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	let randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

// winning conditions defined
const winConditions = {
	rock: "scissors",
	paper: "rock",
	scissors: "paper",
};

// one round play
function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		results.textContent = "Is a draw";
	} else if (winConditions[humanChoice] === computerChoice) {
		humanScore++;
		playerScore.textContent = `Player: ${humanScore}`;
		results.textContent = "You won this round";
	} else {
		computerScore++;
		aiScore.textContent = `AI: ${computerScore}`;
		results.textContent = "You lost this round!";
	}
}

// add event listeneres to buttons
buttons.forEach(function (button) {
	button.addEventListener("click", handleChoice);
});

resetBtn.addEventListener("click", resetGame);
