function playGame() {
    alert("Let's play Rock Paper Scissors!");
    // event listeners by id
    document.getElementById("rock").onclick = function() { userChoice("rock"); };
    document.getElementById("paper").onclick = function() { userChoice("paper"); };
    document.getElementById("scissors").onclick = function() { userChoice("scissors"); };
}

// function that amalgamates the user choice, computer choice, and result
function userChoice(userSelection) {
    const computerSelection = getComputerChoice();
    const result = determineWinner(userSelection, computerSelection);
    document.getElementById("result").innerText = `You chose ${userSelection}. The computer chose ${computerSelection}. ${result}`;
}

// function that randomly selects the computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// function that determines the winner with if statements
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    else if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
        return "You won!";
    }
    else if ((userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice == "scissors" && computerChoice === "rock")) {
        return "The computer won!";
    }
}
