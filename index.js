var prompt = require('prompt');

var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

var properCoordinates = {
  '00' : true,
  '01' : true, 
  '02' : true, 
  '10' : true, 
  '11' : true, 
  '12' : true, 
  '20' : true, 
  '21' : true, 
  '22' : true
  };

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
      coordinates: {
        description: ("X, type a number to place")
      }
    }
  }, function (err, result) {
    // Invoke check coordinate function (result) && check board function (result)  
    if (!checkCoordinates(result.coordinates)) {
      console.log('error1');
      return;
    }
    // console.log(checkBoard(result.coordinates));
    if (checkBoard(result.coordinates)){
      // Invoke error function (x)
      console.log('error');
    }
    // Else
      // Insert into board array
      // Display new board
      // Invoke winner function (x)
  });
}

// Check coordinate function
function checkCoordinates (coordinates) {
    // Check whether or not the value exists in the checkCoordinates array
    return properCoordinates[coordinates];
}

// Check board function
function checkBoard (coordinates) {
  // Get first number
  var first = coordinates[0];
  // Get second number
  var second = coordinates[1];
  // return board[first][second];
  var boardValue = board[first][second];
  // If the value is either X or O
    // return true
  // Else
    // return false
  return boardValue === 'X' || boardValue === '0'
}

// O Player
  // Ask what position they want 
    // Invoke check board function (results)
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