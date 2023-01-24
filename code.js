//determine computer choice
function getComputerChoice(){
    //create an array with the tree options
    const pick = ['rock', 'paper', 'scissors'];
    //use math.random to pick an option from the array
    return pick[Math.floor(Math.random() * pick.length)];
}

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let roundWinner = '';
let cSelection = '';
let pSelection = '';
let finalScore = '';
let playerSelection = '';

//porque cuando logueo los buttons dice nodelist length 0 ? FIREFOX Y LA RE CONCHA DE TU MADRE... nah mentira te quiero
document.addEventListener('DOMContentLoaded', function(){

const buttons = document.querySelectorAll('.hand');

buttons.forEach((button) => {
    button.addEventListener('click', function clickListener(event) {
        let computerSelection = getComputerChoice();
        let playerSelection = event.target.id
        playRound(playerSelection, computerSelection);
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(roundWinner)
    })
})
//console.log(buttons)
});

function playRound(playerSelection, computerSelection){
    //let computerSelection = getComputerChoice();
    //let playerSelection = prompt('rock... paper... scissors...').toLowerCase();
    cSelection = (`computer selection is ${computerSelection}`);
    pSelection = (`player selection is ${playerSelection}`);
    //if tie 
    if ((playerSelection == 'rock' && computerSelection == 'rock') || 
        (playerSelection == 'paper' && computerSelection == 'paper') || 
        (playerSelection == 'scissors' && computerSelection == 'scissors')){
        roundWinner = (`its a tie! you both picked ${playerSelection}. scoreboard is: COMPUTER: ${computerScore}, PLAYER: ${playerScore}`)
    //if player wins    
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
               (playerSelection == 'paper' && computerSelection == 'rock') || 
               (playerSelection == 'scissors' && computerSelection == 'paper')){
        playerScore++; roundWinner = (`congratulations!!! ${playerSelection} beats ${computerSelection}, you win!!! scoreboard is: COMPUTER: ${computerScore}, PLAYER: ${playerScore}`)
    //if computer wins    
    } else if ((playerSelection == 'scissors' && computerSelection == 'rock') || 
               (playerSelection == 'rock' && computerSelection == 'paper') || 
               (playerSelection == 'paper' && computerSelection == 'scissors')){
        computerScore++; roundWinner = (`too bad, ${computerSelection} beats ${playerSelection}, you loose. scoreboard is: COMPUTER: ${computerScore}, PLAYER: ${playerScore}`)
    //if player summons an invalid answer    
    } else {
        roundWinner = (`error ${playerSelection} its not a valid answer`)
    }
}
//the game
/*function game(){
    do {
        playRound();
        roundNumber ++;
        //console log roundwinner
        console.log(cSelection);
        console.log(pSelection);
        console.log(roundWinner);
    } while (roundNumber < 5)
    //when the round number reaches 5 (the final round) the game compares scores and anounces the winner or if it is a tie
    if (roundNumber == 5){
        //if player wins
        if (playerScore > computerScore){
            finalScore = (`CONGRATULATIONS!!!! the final score is PLAYER: ${playerScore} COMPUTER: ${computerScore}. YOU WIN!!!!`)
        //computer wins
        } else if(computerScore > playerScore){
            finalScore = (`too bad, the final score is PLAYER: ${playerScore} COMPUTER: ${computerScore} computer wins. Better luck next time`)
        //tie
        } else{
            finalScore = (`the final score is PLAYER: ${playerScore} COMPUTER: ${computerScore}. Nobody wins`)
        }
        
        console.log(finalScore);
        return(finalScore);
    }
}

game(); */

