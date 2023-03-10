let playerChoice = document.getElementById('game');

let youPoints = 0;
let computerPoints = 0;

playerChoice.addEventListener('click', e => {
    let pChoice = e.target.id;
    playRound(pChoice)
})


function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(pChoice) {
    let cChoice = getComputerChoice();
    let x = document.getElementById('x');
    console.log(pChoice)
    if (pChoice == 'Rock' && cChoice == 'Scissors') {
        youPoints++;
        x.innerText = pChoice + ' - ' + cChoice;
        checkScore();
    }
    else if (pChoice == 'Paper' && cChoice == 'Rock') {
        youPoints++;
        x.innerText = pChoice + ' - ' + cChoice;
        checkScore();
    }
    else if (pChoice == 'Scissors' && cChoice == 'Paper') {
        youPoints++;
        x.innerText = pChoice + ' - ' + cChoice;
        checkScore();
    }
    else if(pChoice == cChoice) {
        x.innerText = pChoice + ' - ' + cChoice;
        checkScore();
    }
    else {
        computerPoints++;
        x.innerText = pChoice + ' - ' + cChoice;
        checkScore();
    }
}
function checkScore() {
    let youResults = document.getElementById('your-points');
    let computerResults = document.getElementById('computer-points');
    let totalResults = document.getElementById('results');
    totalResults.innerText = '';
    youResults.style.color = 'blue';
    youResults.textContent = youPoints;
    computerResults.style.color = 'red';
    computerResults.textContent = computerPoints;
    if(youPoints == 5) {
        totalResults.style.color = 'blue';
        totalResults.innerText = 'You Win!'
        youPoints = 0;
        computerPoints = 0;
        youResults.textContent = youPoints;
        computerResults.textContent = computerPoints;
    }
    else if(computerPoints == 5) {
        totalResults.style.color = 'red';
        totalResults.innerText = 'You Lose!'
        youPoints = 0;
        computerPoints = 0;
        youResults.textContent = youPoints;
        computerResults.textContent = computerPoints;
    }
}