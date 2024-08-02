let userScore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara =  document.querySelector("#user-score");
const compScorePara =  document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx =  Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userchoice ,  compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You Lost! ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userchoice === compChoice){
        //Draw game
        drawGame();
    } else{
        let userWin = true;
        if(userchoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false :  true;
        } else if(userchoice === "paper"){
            //rock ,scissors
            userWin = compChoice === "scissors" ? false :  true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false :  true;
        }
        showWinner(userWin,userchoice ,  compChoice);
    }
   
};

choices.forEach((choice)=>{
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playGame(userchoice);
    });
});