let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random()*10);

}

function compareGuesses(userGuess,compGuess,targetGuess) {
   if (userGuess>9 || userGuess<0 )
   {
       alert('You are well out of your leauge');
   }
    const userDiff = Math.abs(targetGuess-userGuess);   
    const compDiff = Math.abs(targetGuess-compGuess);

    if(userDiff<compGuess)
    {
        return true;
    }
    else if (userDiff > compGuess)
    {
        return false;
    }
    else if (userDiff===compGuess) {
        return true;
    }
}

function updateScore(winner) {
    if (winner ==='human')
    {
        humanScore++;
    }
    else if (winner==='computer')
    {
        computerScore ++;
    }

}


function advanceRound() {
    currentRoundNumber++;
}