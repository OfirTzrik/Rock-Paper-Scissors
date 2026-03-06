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
function getPlayerChoice() {
    let playerMove = prompt("Rock, paper or scissors?");
    return playerMove;
}

// Play 5 rounds of Rock, Paper, Scissors
function playGame() {
    let playerScore = 0;
    let compScore = 0;

    function roundLogic(compMove, playerMove) {
        let roundWinner;

        if (compMove == "rock") {
            if (playerMove == "rock") {
                roundWinner = "draw";
            } else if (playerMove == "paper") {
                roundWinner = "player";
            } else {
                roundWinner = "comp";
            }
        } else if (compMove == "paper") {
            if (playerMove == "rock") {
                roundWinner = "comp";
            } else if (playerMove == "paper") {
                roundWinner = "draw";
            } else {
                roundWinner = "player";
            }
        } else {
            if (playerMove == "rock") {
                roundWinner = "player";
            } else if (playerMove == "paper") {
                roundWinner = "comp";
            } else {
                roundWinner = "draw";
            }
        }

        return roundWinner;
    }

    function updateScore(roundWinner) {
        if (roundWinner == "player") {
            playerScore++;
            console.log("Player won the round!");
        } else if (roundWinner == "comp") {
            compScore++;
            console.log("Computer won the round!");
        } else {
            console.log("The round is a draw!");
        }
    }

    // Play a single round of Rock, Paper, Scissors
    function playRound() {
        let compMove = getComputerChoice();
        let playerMove = getPlayerChoice().toLowerCase();

        let roundWinner = roundLogic(compMove, playerMove);
        updateScore(roundWinner);

        console.log(`Player Score: ${playerScore}\nComputer Score: ${compScore}`);
    }

    // Decide the winner after 5 rounds
    function decideWinner(compScore, playerScore) {
        if (playerScore > compScore) {
            console.log("Player won!");
        } else if (playerScore < compScore) {
            console.log("Computer won!");
        } else {
            console.log("It's a draw!");
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    decideWinner();
}

playGame();