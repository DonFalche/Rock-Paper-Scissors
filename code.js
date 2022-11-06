//determine computer choice
function getComputerChoice(){
    //create an array with the tree options
    const pick = ['rock', 'paper', 'scissors'];
    //use math.random to pick an option from the array
    return pick[Math.floor(Math.random() * pick.length)];
}

//the game
function game(){
    //first define player score, computer score and round number
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 0;

    //this is a 5 round game, each round the computer choses a hand and ask the player for his hand and then compare to determine the winer
    while (roundNumber < 5) {
        function playRound(){
            let computerSelection = getComputerChoice();
            let playerSelection = prompt('rock... paper... scissors...').toLowerCase();
            console.log('computer selection is ' + computerSelection);
            console.log('player selection is ' + playerSelection);
            //depending on the player and computer selections, the game adds a round, adds a point to one or the other and delivers a message.
            //tie 
            if ((playerSelection == 'rock' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'scissors')){
                roundNumber ++; return ('its a tie! you both picked ' + playerSelection + ' scoreboard is: COMPUTER: ' + computerScore + ', PLAYER: ' + playerScore)
            //player wins    
            } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')){
                roundNumber ++, playerScore++; return ('congratulations!!! ' + playerSelection + ' beats ' + computerSelection + ', you win!!!' + ' scoreboard is: COMPUTER: ' + computerScore + ', PLAYER: ' + playerScore)
            //computer wins    
            } else if ((playerSelection == 'scissors' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors')){
                roundNumber ++, computerScore++; return ('too bad, ' + computerSelection + ' beats ' + playerSelection + ', you loose' + ' scoreboard is: COMPUTER: ' + computerScore + ', PLAYER: ' + playerScore)
            //player summons an invalid answer    
            } else {
                roundNumber ++; return ('error ' + playerSelection + ' its not a valid answer')
            }
            
        }
        //console log the result of each round
        console.log(playRound());
    }
    //when the round number reaches 5 (the final round) the game compares scores and anounces the winner or if it is a tie
    if (roundNumber == 5){
        //player wins
        if (playerScore > computerScore){
            console.log('CONGRATULATIONS!!!! the final score is PLAYER: ' + playerScore + ' COMPUTER: ' + computerScore + ' YOU WIN!!!!')
        //computer wins
        } else if(computerScore > playerScore){
            console.log('too bad, the final score is PLAYER: ' + playerScore + ' COMPUTER: ' + computerScore + ' computer wins, better luck next time')
        //tie
        } else{
            console.log('the final score is PLAYER: ' + playerScore + ' COMPUTER: ' + computerScore + ' nobody wins')
        }
    }
     
}

//call the game function in order to get executed
game();