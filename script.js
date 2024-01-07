let scoremy = 0;
let scorecomp = 0;

const choices = document.querySelectorAll(".opt");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#scoremy");
const compScorePara = document.querySelector("#scorecomp");

let countUSER = 0;
let countCOMP = 0;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showwinners = (userWin, userChoice, compchoice) => {
    if (userWin) {
        console.log("You win!");
        countUSER++;
        userScorePara.innerText = countUSER;
        msg.innerText = `You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "#86fc7c";
        msg.style.borderColor = "#2d6129";
        msg.style.color = "#408c3b";
    }
    else {
        console.log("You lose!");
        countCOMP++;
        compScorePara.innerHTML = countCOMP;
        msg.innerText = `You lose! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "#ff998a";
        msg.style.borderColor = "#ff5252";
        msg.style.color = "#994242";
    }
}

const playGame = (userChoice) => {
    console.log("Your Choice :", userChoice);
    const compchoice = genCompChoice();
    console.log(" Comp Choice : ", compchoice);

    if (userChoice == compchoice) {
        console.log("its a draw");
        msg.innerText = "Its a DRAW!";
        msg.style.backgroundColor = "#9c9c9c";
        msg.style.borderColor = "#4f4f4f";
        msg.style.color = "#636363";
    }
    else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = compchoice == "paper" ? false : true;
        }
        else if (userChoice == "paper") {
            userWin = compchoice == "scissor" ? false : true;
        }
        else {
            userWin = compchoice == "rock" ? false : true;
        }
        showwinners(userWin, userChoice, compchoice);
    };
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});