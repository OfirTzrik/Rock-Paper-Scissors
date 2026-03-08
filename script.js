const btns_rps = document.querySelectorAll("button");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");

let playerScore = 0;
let compScore = 0;

// Randomize a computer choice
function getComputerChoice() {
    let compMove = Math.random();
    if (compMove < 0.33) {
        return "rock";
    } else if (compMove >= 0.33 && compMove < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Get the player choice
function getPlayerChoice(btn) {
    if (btn == "btn-rock") {
        return "rock";
    } else if (btn == "btn-paper") {
        return "paper"
    } else {
        return "scissors";
    }
}

function roundLogic(compMove, playerMove) {
    let roundWinner;

    if (compMove == "rock") {
        if (playerMove == "rock") {
            roundWinner = "draw";
        } else if (playerMove == "paper") {
            roundWinner = "player";
        } else {
            roundWinner = "computer";
        }
    } else if (compMove == "paper") {
        if (playerMove == "rock") {
            roundWinner = "computer";
        } else if (playerMove == "paper") {
            roundWinner = "draw";
        } else {
            roundWinner = "player";
        }
    } else {
        if (playerMove == "rock") {
            roundWinner = "player";
        } else if (playerMove == "paper") {
            roundWinner = "computer";
        } else {
            roundWinner = "draw";
        }
    }

    return roundWinner;
}

function updateScore(roundWinner, compMove, playerMove) {
    if (roundWinner == "player") {
        playerScore++;
    } else if (roundWinner == "computer") {
        compScore++;
    }

    if (roundWinner != "draw") {
        result.textContent = `Round winner is ${roundWinner.toUpperCase()}, computer played ${compMove.toUpperCase()} and player played ${playerMove.toUpperCase()}`;
    } else {
        result.textContent = `Round ended in a DRAW, both picked ${playerMove.toUpperCase()}`;
    }
    
}

function playRound(btn) {
    let compMove = getComputerChoice();
    let playerMove = getPlayerChoice(btn).toLowerCase();

    let roundWinner = roundLogic(compMove, playerMove);
    updateScore(roundWinner, compMove, playerMove);

    score.textContent = `PLAYER Score: ${playerScore}, COMPUTER Score: ${compScore}`;

    if (playerScore == 5) {
        winner.textContent = "You won!";
    } else if (compScore == 5) {
        winner.textContent = "You lost!";
    }
}

for (const btn of btns_rps) {
    btn.addEventListener("click", (event) => {
        playRound(event.target.classList[0]);
    });
}