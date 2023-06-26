function getComputerChoice() {
  let computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "You win!";
  } else if (
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    return "You lose!";
  } else if (playerSelection == computerSelection) {
    return "It's a tie";
  }
}

let playerSelectionPrompt = prompt("Rock, Paper, or Scissors");
let playerSelection = playerSelectionPrompt.toLowerCase();
let computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
