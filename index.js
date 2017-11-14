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
  console.log('_|_|_');
  console.log('_|_|_');
  console.log(' | | ');  
}

drawBoard();