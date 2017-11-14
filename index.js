var prompt = require('prompt');

var board = [
  [00, 01, 02],
  [10, 11, 12],
  [20, 21, 22]
];

prompt.start();

/*
  * Minimal UI that redraws the board and makes clear whose turn it is, each turn.
  * Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
  * Win detection - detect and display who won
*/

function drawBoard() {
  // Draws board
  console.log('00|01|02');
  console.log('10|11|12');
  console.log('20|21|22');
  
  // Invoke X Player
  playerX();
}

// X Player
function playerX() {
  // Ask what position they want 
  prompt.get({
    properties: {
      name: {
        description: ("X, type a number to place")
      }
    }
  }, function (err, result) {
    // Invoke check board function (results)
      // Invoke error function (x)
    // Else
      // Insert into board array
      // Display new board
      // Invoke winner function (x)
  });
}

// O Player
  // Ask what position they want 
    // Invoke check board function (results)
      // Invoke error function (o)
    // Else
      // Insert into board array
      // Display new board
      // Invoke winner function (o)

// Check board function
  // Split arguments
  // Use split string as index
  // If the value is either X or O
    // return true
  // Else
    // return false

// Error function
  // Error message that it is not a valid move
  // Invoke whichever player's turn it is

// Winner function
  // Go through board array
  // If there is three in a row
    // Output winner of the game
    // End game
  // Else
    // Invoke the other player

drawBoard();