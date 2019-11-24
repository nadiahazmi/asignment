var players = [
  {name: "P1",position: 0},
  {name: "P2",position: 0}
];

var snakes = [{start:15, end:5}, {start:23, end:16}];
var ladders = [{start: 8, end:15}, {start:19, end:24}];
var hasWon = false;

let currentPlayerTurn = 0;

function rollDice(){
  if (hasWon) {
    return;
  }

  let currentPlayer = players[currentPlayerTurn];
  roll = Math.floor(Math.random() * 5 + 1);
  console.log(currentPlayer.name +", You rolled", roll);
  currentPlayer.position += roll;

  ladders.forEach(ladder => {
    if (ladder.start === currentPlayer.position) {
      console.log("You're now going up a ladder");
      currentPlayer.position = ladder.end;
    }
  });

  snakes.forEach(snake => {
    if(snake.start === currentPlayer.position){
      console.log("oh no :(");
      currentPlayer.position = snake.end;
    }
  });

  if (currentPlayer.position > 25) {
   console.log(currentPlayer.name + " has won!");
   hasWon = true;
 }

 currentPlayerTurn++;
 if (currentPlayerTurn >= players.length) {
  currentPlayerTurn = 0;
 }
}

var rollButton = document.getElementById("roll-dice");
rollButton.addEventListener("click", rollDice);
