const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', choice));
win = 0;
lose = 0;

function choice(e){
    game(this.classList.value);
}

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

function game(playerSelection){
        let computerSelection = computerPlay();
        const ant = document.querySelector('.display');
        ant.textContent=(playRound(playerSelection, computerSelection));
        if(ant.textContent.substring(0,1) == "w"){
            win ++;
        }
        if(ant.textContent.substring(0,1) == "l"){
            lose++;
        }
        const vs = document.querySelector('.scoreBoard');
        vs.textContent=(win + " - " + lose);


}