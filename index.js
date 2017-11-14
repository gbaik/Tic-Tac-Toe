var prompt = require('prompt');

var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

prompt.start();

/*
  * Minimal UI that redraws the board and makes clear whose turn it is, each turn.
  * Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
  * Win detection - detect and display who won
*/

function drawBoard() {
  // Draws board
  console.log('1|2|3');
  console.log('4|5|6');
  console.log('7|8|9');
  
  // Invoke X Player 
}

// X Player
  // Ask what position they want 
    // If position is not on board or it's filled
      // Invoke error function (x)
    // Else
      // Insert into board array
      // Display new board
      // Invoke winner function (x)

// O Player
  // Ask what position they want 
    // If position is not on board or it's filled
      // Invoke error function (o)
    // Else
      // Insert into board array
      // Display new board
      // Invoke winner function (o)

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