let choices = document.querySelectorAll(".choice");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

let userS = 0;
let compS = 0;

const randomComp = () => {
    let arr = ["rock","paper","scissor"];
    let num = Math.floor(Math.random()*3);
    return arr[num];
};
const draw = () =>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "blue";
};
const showWinner = (userChoice,compGen,userWin)=>{
    if(userWin){
        userS++;
        uScore.innerText = userS;
        msg.innerText = `You Win! your ${userChoice} beats ${compGen}`;
        msg.style.backgroundColor = "green";
    }else{
        compS++;
        cScore.innerText = compS;
        msg.innerText = `You Lost! ${compGen} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playgame = (userChoice)=>{
    const compGen = randomComp();
    if(compGen === userChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compGen === "paper"?false:true;
        }else if(userChoice === "paper"){
            userWin = compGen === "scissor"?false:true;
        }else{
            userWin = compGen === "rock"?false:true;
        }
        showWinner(userChoice,compGen,userWin);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("func accessed");
        playgame(userChoice);
    });
});