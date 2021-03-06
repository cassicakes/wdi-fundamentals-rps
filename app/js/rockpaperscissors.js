////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === null) {
    	return getInput();
    var x;
    if (move) {
    	x = move
    } else {
    	return move;
    	x = getInput()
    }
    return x;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === null) {
    	ver temp = randomPlay();
    	console.log(temp);
    	return temp;
    var x;
    if (move) {
    	x = move
    } else {
    	console.log(move);
    	return move;
    	x = randomPlay()
    }
    return x;
}

function getWinner(playerMove,computerMove) {
    var winner = ['player', 'computer', 'tie']
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
function getWinner(playerMove, computerMove) {
	var winner;
	if (playerMove === computerMove) {
		return (winner[2]);
	} else if ((playerMove === "rock") && (computerMove === "scissors")) {
		return (winner[0]);
	} else if ((playerMove === "paper") && (computerMove === "rock")) {
		return (winner[0]);
	} else if ((playerMove === "scissors") && (computerMove === "paper")) {
		return (winner[0]);
	} else {
		return (winner[1]);
	}
		winner = 'tie'
	} else if (playerMove === 'paper') {
		if (computerMove === 'rock') {
			winner = 'player'
		} else {
			winner = 'computer'
		}
	} else if (playerMove=== 'rock') {
		if (computerMove === 'scissors') {
			winner = 'player'
		} else {
			winner = 'computer'
		}
	} else if (playerMove === 'scissors') {
		if (computerMove === 'paper') {
			winner = 'player'
		} else {
			winner = 'computer'
		}
	}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((playerWins < 5) && (computerWins < 5)) {
    	var results = getWinner(getPlayerMove(), getComputerMove());
    	if (results === 'player') {
    		playerWins = playerWins + 1;
    	} else if (results === 'computer') {
    		computerWins = computerWins + 1;
    	} else {}
    }
    console.log("Player wins" + playerWins + "games");
    console.log("computer wins" + computerWins + "games");
    return [playerWins, computerWins];
}
	while (playerWins < 5 && computerWins < 5) {
		var playerMove = getPlayerMove(getInput())
		var computerMove = getComputerMove(randomPlay())
		console.log('You chose' + playerMove = '.The computer chose' + computerMove + '.')
}

