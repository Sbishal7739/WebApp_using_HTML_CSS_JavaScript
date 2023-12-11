let userScore = document.querySelector('#user-score')
let comScore = document.querySelector('#com-score')
let msg = document.querySelector('#msg')

let userPoint = 0;
let comPoint = 0;

console.log(msg);

let choices = document.querySelectorAll('.choice')

function genComChoice() {
    let options = ["rock", "paper", "scissors"];
    let randIndex = Math.floor(Math.random() * 3)
    return options[randIndex]
}

function showWinner(userWin, userChoice, comChoice) {
    if (userWin) {
        userPoint = userPoint + 1;
        userScore.innerText = userPoint;
        msg.innerText = `You Win! ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        comPoint = comPoint + 1;
        comScore.innerText = comPoint;
        msg.innerText = `You Lose! ${comChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

function playGame(userChoice) {
    let comChoice = genComChoice();
    console.log(userChoice, comChoice);
    msg.style.backgroundColor = "#161A30";

    if (userChoice === comChoice) {
        msg.innerText = "Game Was Draw";
    }
    else {
        let userWin = false;

        if (userChoice === "rock") {
            // Rock vs Paper: Paper wins
            userWin = comChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // Paper vs Scissors: Scissors win
            userWin = comChoice === "scissors" ? false : true;
        }
        else {
            // Scissors vs Rock: Rock wins
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})

// console.log(choices);