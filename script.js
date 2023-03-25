/* generate a random number between 0 and 3 (max) */
/* Assigned a label to each number */

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice < 1) {
        return "rock"
    } else if (choice  > 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

/*function getPlayerChoice () {
    let playerSelection = prompt('Do you choose Rock, Paper or Scissors?').toLowerCase()
          if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
              console.log("You chose " + playerSelection);
              return playerSelection
          } else {
              console.log('Error! Pick Rock, Paper or Scissors')
              return getPlayerChoice()
          }
  }*/

function playRound(playerSelection,computerChoice) {
    console.log("Player = " + playerSelection)
    console.log("Computer = " + computerChoice)
    if (playerSelection === computerChoice) {
        return "it's a draw" 
    } else if (playerSelection == "scissors" && computerChoice == "rock" ) {
        return "You lose"
    } else if (playerSelection == "scissors" && computerChoice == "paper") {
        return "You Win"
    } else if (playerSelection == "rock" && computerChoice == "scissors") {
        return "You Win"
    } else if (playerSelection == "rock" && computerChoice == "paper") {
        return "You lose"
    } else if (playerSelection == "paper" && computerChoice == "scissors" ) {
        return "You lose"
    } else if (playerSelection == "paper" && computerChoice == "rock") {
        return "You Win"
    } else {
        return "Thats not an option"
    }
}

/*function game() {
    for (let i = 1; i < 6; i++) {
        console.log("Round " + i)
        let playerSelection = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log("computer chose " + computerChoice)
        console.log(playRound(playerSelection,computerChoice))
        if (playRound(playerSelection,computerChoice) == "You Win") {
            userCounter++
            console.log("User score : " + userCounter + " Computer score : "  + computerCounter)
        } else if (playRound(playerSelection,computerChoice) == "You lose") {
            computerCounter++
            console.log("User score : " + userCounter + " Computer score : " + computerCounter)
        } else if (playRound(playerSelection,computerChoice) == "it's a draw") {
            console.log("User score : " + userCounter + " Computer score : " + computerCounter)
        }
    }
}*/

/*function gameResult () {
    if (userCounter > computerCounter) {
        console.log("You win the game")
    } else if (userCounter == computerCounter) { 
        console.log("it's a draw")
    } else {
        console.log("You lose the game")
    }
}*/


// UI //

document.getElementById("rockButton")
document.getElementById("paperButton")
document.getElementById("scissorsButton")


rockButton.addEventListener("click", () => console.log(playRound("rock",computerChoice)))
paperButton.addEventListener("click", () => console.log(playRound("paper",computerChoice)))
scissorsButton.addEventListener("click", () => console.log(playRound("scissors",computerChoice)))

let computerChoice = getComputerChoice ();
let userCounter = 0
let computerCounter = 0
let i = 1


/*console.log(gameResult())*/