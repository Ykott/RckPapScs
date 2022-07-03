function computerPlay(){
    if(Math.random() >= .66666)
    {
        return "rock";
    }
    if(Math.random() >= .5){
        return "paper";
    }
    return "scissors";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return "tie! " + playerSelection + " ties " + computerSelection;
    }
    if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        return "win! " + playerSelection + " beats " + computerSelection;
    }
    return "lose! " + playerSelection + " loses to " + computerSelection;
}

function game(){
    for(let i = 0; i < 5; i++)
    {
        let computerSelection = computerPlay();
        let playerSelection = prompt("you choose");
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();