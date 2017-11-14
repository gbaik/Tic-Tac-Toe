var prompt = require('prompt');

var board = [
  ['00', '01', '02'],
  ['10', '11', '12'],
  ['20', '21', '22']
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
function init() {
  drawBoard();

  playerX();  
}

function drawBoard() {
  console.log(board[0][0],'|', board[0][1], '|', board[0][2]);
  console.log(board[1][0],'|', board[1][1], '|', board[1][2]);
  console.log(board[2][0],'|', board[2][1], '|', board[2][2]);  
}

// X Player
function playerX() {
  prompt.get({
    properties: {
      coordinates: {
        description: ("X, type a number to place")
      }
    }
  }, function (err, result) {
    if (!result.coordinates || !checkCoordinates(result.coordinates || checkBoard(result.coordinates))) {
      errorHandler('X');      
    } else { // Else
      var first = result.coordinates[0];
      var second = result.coordinates[1];
      // Insert into board array
      board[first][second] = ' X';
      init();
      // Invoke winner function (x)
    }
  });
}

// O Player
function playerO() {
  // Ask what position they want 
    // Invoke check board function (results)
      // Invoke error function (o)
    // Else
      // Insert into board array
      // Display new board
      // Invoke winner function (o)
}

function checkCoordinates (coordinates) {
  return properCoordinates[coordinates];
}

function checkBoard (coordinates) {
var first = coordinates[0];
var second = coordinates[1];
var boardValue = board[first][second];
return boardValue === 'X' || boardValue === '0'
}

function errorHandler(player) {
  console.log('Move not valid, please go again');
  player === 'X' ? playerX() : playerO();
}

// Winner function
  // Go through board array
  // If there is three in a row
    // Output winner of the game
    // End game
  // Else
    // Invoke the other player

init();