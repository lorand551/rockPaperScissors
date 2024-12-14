// user input

// variables for score
let humanScore = 0;
let computerScore = 0;

// random computer selection
function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	let randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

// get the user input
function getHumanChoice() {
	let userInput = prompt("lets play rock paper scissors");
	let validChoices = ["rock", "paper", "scissors"];
	let input = userInput.toLowerCase();
	while (!validChoices.includes(input)) {
		input = prompt(
			"Invalid choice! Please enter rock, paper or scissors"
		).toLowerCase();
	}
	return input;
}

// winning conditions defined
const winConditions = {
	rock: "scissors",
	paper: "rock",
	scissors: "paper",
};

// one rounde using helper
function playRound(humanChoice, computerChoice) {
	// making the inputs case insensitive
	let humanChoiceLower = humanChoice.toLowerCase();
	let computerChoiceLower = computerChoice.toLowerCase();
	// if it is a draw
	if (humanChoiceLower === computerChoiceLower) {
		console.log("Its a draw");
		// if human choice beat computer choice
	} else if (winConditions[humanChoiceLower] === computerChoiceLower) {
		humanScore++;
		console.log("You won this round!");
		// if computer choice beat human choice
	} else {
		computerScore++;
		console.log("You lost this round!");
	}
}

// 5 rounds
for (let i = 0; i < 5; i++) {
	console.log(`Round ${i + 1}`);
	let humanSelection = getHumanChoice();
	let computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection);
	console.log(`Score - You: ${humanScore}, AI: ${computerScore}`);
}

// final result
if (humanScore > computerScore) {
	console.log("Congratulations, you won!");
} else if (humanScore < computerScore) {
	console.log("Sorry, you lost!");
} else {
	console.log("The game is a draw");
}
