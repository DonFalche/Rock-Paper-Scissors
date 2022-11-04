
const playerChoide = prompt('rock... paper... scissors!')


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

console.log('computer choice is ',getComputerChoice())  

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

console.log('player choice is ',getPlayerChoice())

const playerHand = getPlayerChoice();
const computerHand = getComputerChoice();

console.log('player hand is ',playerHand)
console.log('computer hand is ',computerHand)

function round(playerHand, computerHand){
    if (playerHand == 'INVALID CHOICE!!! TRY AGAIN.'){
        console.log('INVALID CHOICE!!! TRY AGAIN.')
    } else if (playerHand == 'ROCK' && computerHand == 'SCISSORS' || playerHand == 'PAPER' && computerHand == 'ROCK' || playerHand == 'SCISSORS' && computerHand == 'PAPER'){
        console.log('YAY!!! YOU WIN')
    } else if(computerHand == 'ROCK' && playerHand == 'SCISSORS' || computerHand == 'PAPER' && playerHand == 'ROCK' || computerHand == 'SCISSORS' && playerHand == 'PAPER'){
        console.log('TOO BAD, COMPUTER WINS')
    } else if (computerHand == 'ROCK' && playerHand == 'ROCK' || computerHand == 'PAPER' && playerHand == 'PAPER' || computerHand == 'SCISSORS' && playerHand == 'SCISSORS'){
        console.log('LETS CALL IT EVEN')
    }

}

console.log(round(playerHand, computerHand));