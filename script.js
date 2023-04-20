// Define a hands array with the values 'rock', 'paper', and 'scissors'

let hands = ["rock", "paper", "scissors"];

// Define a function to get a hand//Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3 from the hands array

function getHand() {
  return hands[parseInt(Math.random()*10)%3];
}

// //Define two objects for two players. Each player has name and getHand() properties.

let player1 = {
  name: "Sarah",
  getHand: getHand, 
 score: 0,
};

let player2 = {
  name: "Reese",
  getHand: getHand,
  score: 0,
};
let player3 = {
    name: 'Michael',
    getHand: getHand,
    score: 0,
  };
  
  let player4 = {
    name: 'Angela',
    getHand: getHand,
    score: 0,
  };
  
  

/*Define a function called playRound() that Takes two player objects as arguments
 Gets hands from each
 Determines the winner
Logs the hands played and name of the winner.
If its a tie, log the hands played and "it's a tie".
Returns the winner object (null if no winner) */

function playRound(player1, player2) {
  let player1Hand = player1.getHand();
  let player2Hand = player2.getHand();
  let winner = null;

const player1HandElement = document.getElementById("player1-hand");
player1HandElement.textContent = player1Hand;
const player2HandElement = document.getElementById("player2-hand");
player2HandElement.textContent = player2Hand;

  console.log(player1.name, "plays", player1Hand);
  console.log(player2.name, "plays", player2Hand);

  if (player1Hand === player2Hand) {
    console.log("It's a tie!");
    return winner;
  } else if (
    (player1Hand === "rock" && player2Hand === "scissors") ||
    (player1Hand === "paper" && player2Hand === "rock") ||
    (player1Hand === "scissors" && player2Hand === "paper")
  ) {
    console.log(player1.name, "wins!");
    player1.score++;
    return player1;
  } else {
    console.log(player2.name, "wins!");
    player2.score++;
    return player2;
  }
}


/* Define a function called playGame() that takes arguments player1, player2, and playUntil.
Play rounds until one of the players wins playUntil hands
When one player has won enough games, return the winning player object*/

function playGame(player1, player2, playUntil=3) {


  while (player1.score < playUntil && player2.score < playUntil) {
    winner = playRound(player1, player2);
    
    const scoreElement = document.createElement("div");
scoreElement.id = "score";
const player1Score = document.getElementById("player1-score");
player1Score.textContent = player1.score;
const player2Score = document.getElementById("player2-score");
player2Score.textContent = player2.score;
  }
  return winner;
}

//Define a function called playTournament()

function playTournament(player1, player2, player3, player4, playUntil) {
  let round1Winner = playGame(player1, player2, playUntil);
  let round2Winner = playGame(player3, player4, playUntil);
  let tournamentWinner = playGame(round1Winner, round2Winner, playUntil);

  let tournamentWinnerElement = document.createElement("div");
tournamentWinnerElement.id = "tournament-winner";
tournamentWinner = (player1.score > player2.score) ? player1 : player2;
tournamentWinnerElement.textContent = tournamentWinner.name;

  console.log(tournamentWinner.name, "is the world champion!");

};

playTournament(player1, player2, player3, player4,playUntil=3);

// game
function startGame() {

    //  player's hands
    let player1Hand = document.querySelector('#player1-hand').value;
    let player2Hand = document.querySelector('#player2-hand').value;
  
    //  winner
    if (winner) (player1Hand === 'rock' && player2Hand === 'scissors') ||
                   (player1Hand === 'paper' && player2Hand === 'rock') ||
                   (player1Hand === 'scissors' && player2Hand === 'paper');

  
    // update score
    let player1Score = document.querySelector('#player1-score');
    let player2Score = document.querySelector('#player2-score');
    let tournamentWinnerElement = document.getElementById('tournament-winner');
    tournamentWinnerElement.textContent = winner ? 'Sarah' : 'Reese';
  
    if (winner) {
      player1Score.textContent++;
    } else {
      player2Score.textContent++;
    }
  }

  // start button
  document.getElementById('start').addEventListener('click', startGame);
