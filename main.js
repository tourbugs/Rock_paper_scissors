let userScore = 0;
let compScore = 0;
console.log("Hello World")

const choices = document.querySelectorAll(".choice")
const msgPara = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]

}

const drawGame = () => {
    console.log("game was draw.");
    msgPara.innerHTML = "Match was Draw. Play again!";
    msgPara.style.backgroundColor = "#081b31";
}

const showWiner = (userWin, userChoice, compChoice) =>  {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;
        console.log("You Win!")
        msgPara.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorePara.innerHTML = compScore;
        console.log("You Lose!")
        msgPara.innerHTML = `You Lose! Computer ${compChoice} beats ${userChoice}`;
        msgPara.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice is ",  userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice is", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice ==="rock") {
            //paper, scissors
           userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWiner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        playGame(userChoice)
    });
});