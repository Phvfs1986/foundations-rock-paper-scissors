function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (computerSelection == playerSelection)
        return "It's a Tie!";
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computer++;
            return "You lose! Paper beats Rock!";
        }
        else {
            player++;
            return "You Win! Rock beats Scissors!";
        }
    }
    else if(playerSelection == "paper") {
        if (computerSelection == "scissors") {
            computer++;
            return "You lose! Scissors beats Paper!";
        }
        else {
            player++;
            return "You Win! Paper beats Rock!";
        }
    }
    else
        if (computerSelection == "rock") {
            computer++;
            return "You lose! Rock beats Scissors!";
        }
        else {
            player++;
            return "You Win! Scissors beats Paper!";
        }

}
function game() {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        document.getElementById("demo").innerHTML += `Game ${i + 1}: ` + playRound(playerSelection, computerSelection);
        document.getElementById("demo").innerHTML += "<br>";
    }
}
let computer = 0;
let player = 0;
game();
if (player > computer) {
    document.getElementById("demo").innerText += "You Won The Game!";
}
else if (player == computer) {
    document.getElementById("demo").innerText += "It's a Tie!";
}
else {
    document.getElementById("demo").innerText += "You Lost The Game!";
}