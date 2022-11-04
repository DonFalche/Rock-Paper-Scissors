//determine computer choice
function getComputerChoice(){
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

//turn computer choice into variable
let computerSelection = getComputerChoice();
//console.log('computer choice is ',computerSelection);

//determine player selection
let playerSelection = prompt('rock... paper... scissors...').toLowerCase();
//console.log('player choice is ',playerSelection);

//1 round of the game
function playRound(){
    if (playerSelection == 'rock' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'scissors'){
        return ('its a tie! you both picked ' + playerSelection)
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper'){
        return ('congratulations!!! ' + playerSelection + ' beats ' + computerSelection + ', you win!!!')
    } else if (playerSelection == 'scissors' && computerSelection == 'rock' || playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors'){
        return ('too bad, ' + computerSelection + ' beats ' + playerSelection + ', you loose')
    } else {
        return ('error ' + playerSelection + ' its not a valid answer')
    }
    
}

console.log(playRound())