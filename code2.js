let input=["rock","paper","scissor"];
let playerScore1=0;
let computerScore1=0;
let round=0;

function computerPlay(){
    return Math.floor(Math.random()*3);
}

let playerSelection;
let computerSelection=input[computerPlay()];

function playRound(playerSelection,computerSelection){
    console.log(playerSelection)
    if(playerSelection===computerSelection){
        console.log("Tie");
        playerScore1=playerScore1;
        computerScore1=computerScore1;
    }

    else if(playerSelection==="rock" && computerSelection === "scissor"){
        console.log("player"); 
        playerScore1++;
    }
    
    else if(playerSelection==="scissor" && computerSelection === "rock"){ 
        console.log("computer");
        computerScore1++;
    }

    else if(playerSelection==="paper" && computerSelection === "scissor"){
        console.log("computer"); 
        computerScore1++;
    }

    else if(playerSelection==="scissor" && computerSelection === "paper"){        
        console.log("player"); 
        playerScore1++;
    }

    else if(playerSelection==="rock" && computerSelection === "paper"){
        console.log("computer");
        computerScore1++;
    }

    else{        
        console.log("player"); 
        playerScore1++;
    }

}


// function eventHandler(e){
//     console.log(e.target.value);
// }
// window.onload =function(){
// const btn=document.querySelector(".game");
// btn.addEventListener('click',eventHandler);
// }

function getPlayerSelection(e){
    playerSelection=e.target.value.toLowerCase();
    round++;
    return playerSelection;
}

window.onload =function(){
const btn=document.querySelectorAll(".game");
for(let i = 0;i<btn.length;i++)
    btn[i].addEventListener('click',game);
}

function printRslt(e){
    window.onload=  function(){
        const div = document.querySelector("#rslt").textContent=e;
        // div.p.textContent=e;
    }
}


function game(e){
    
    playRound(getPlayerSelection(e),computerSelection);       
    
    console.log(playerScore1);
    console.log(computerScore1);
    console.log(round);

    if(round===5){
        const btn=document.querySelectorAll(".game");
        for(let i = 0;i<btn.length;i++){
            btn[i].disabled=true;
        }
    if(playerScore1===computerScore1) {
        printRslt("Tie");
    }
    else if(playerScore1>computerScore1){ 
        printRslt("You Won");
    }
    else{     
        printRslt("You Lose!");
    }
}
}

        

