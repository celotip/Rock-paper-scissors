const choices = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    const playerIndex = choices.indexOf(playerSelection);
    const computerIndex = choices.indexOf(computerSelection);
    const lose = `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`
    const win = `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`
    if (playerIndex === computerIndex) {
        return "It's a tie";
    } else if (playerIndex === computerIndex + 1 || playerIndex === 0 && computerIndex === 2) {
        return win;
    }
    return lose;
  }
  
function playGame() {
  let playerSelection = "rock";
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = "scissors";
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = "scissors";
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
}

playGame();
  