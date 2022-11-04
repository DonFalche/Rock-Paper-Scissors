let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;


//prompt to get the player choice
const playerChoide = prompt('rock... paper... scissors!')

//function to ge the computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0){
        return 'ROCK'
    } else if (randomNumber == 1){
        return 'PAPER'
    } else {
        return 'SCISSORS'
    }
}  

//function to process the player chice
function getPlayerChoice(){
    if (playerChoide.toLowerCase() == 'rock'){
        return 'ROCK'
    } else if (playerChoide.toLowerCase() == 'paper'){
        return 'PAPER'
    } else if (playerChoide.toLowerCase() == 'scissors'){
        return 'SCISSORS'
    } else {
        return 'INVALID CHOICE!!! TRY AGAIN.'
    }
}

//turn the fucntions results into constants
const playerHand = getPlayerChoice();
const computerHand = getComputerChoice();

console.log('player hand is ',playerHand)
console.log('computer hand is ',computerHand)


//function to define the winner of a round
function round(playerHand, computerHand){
    let result = '';
    if (playerHand == 'INVALID CHOICE!!! TRY AGAIN.'){
        result = ('invalid')
    } else if (playerHand == 'ROCK' && computerHand == 'SCISSORS' || playerHand == 'PAPER' && computerHand == 'ROCK' || playerHand == 'SCISSORS' && computerHand == 'PAPER'){
        playerScore ++, roundCounter++;
        result = ('you win this round!! ' + playerHand + ' beats ' + computerHand + ', ' + 'player score: ' + playerScore + ' computer score: ' + computerScore)
        
    } else if(computerHand == 'ROCK' && playerHand == 'SCISSORS' || computerHand == 'PAPER' && playerHand == 'ROCK' || computerHand == 'SCISSORS' && playerHand == 'PAPER'){
        computerScore++, roundCounter++;
        result = ('you loose this round ' + computerHand + ' beats ' + playerHand + ', ' + 'player score: ' + playerScore + ' computer score: ' + computerScore)
        
    } else if (computerHand == 'ROCK' && playerHand == 'ROCK' || computerHand == 'PAPER' && playerHand == 'PAPER' || computerHand == 'SCISSORS' && playerHand == 'SCISSORS'){
        roundCounter++;
        result = ('tie')
    }
    return result;
}


console.log(round(playerHand, computerHand));
console.log(playerScore)
console.log(computerScore)
console.log(roundCounter)


function game(playerScore, computerScore){
    while (playerScore < 5 && computerScore < 5){
        round(playerHand, computerHand)
    }
}
