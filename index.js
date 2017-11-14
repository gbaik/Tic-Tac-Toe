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

function playerX() {
  prompt.get({
    properties: {
      coordinates: {
        description: ("Player X, type a number to place")
      }
    }
  }, function (err, result) {
    if (!result.coordinates || !checkCoordinates(result.coordinates || checkBoard(result.coordinates))) {
      errorHandler('X');      
    } else { 
      var first = result.coordinates[0];
      var second = result.coordinates[1];
      board[first][second] = ' X';
      drawBoard();
      // Invoke winner function (x)
      checkWinner('X');
    }
  });
}

function playerO() {
  prompt.get({
    properties: {
      coordinates: {
        description: ("Player O, type a number to place")
      }
    }
  }, function (err, result) {
    if (!result.coordinates || !checkCoordinates(result.coordinates || checkBoard(result.coordinates))) {
      errorHandler('O');      
    } else { 
      var first = result.coordinates[0];
      var second = result.coordinates[1];
      board[first][second] = ' O';
      drawBoard();
      // Invoke winner function (o)
      checkWinner('O');
    }
  });
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
function checkWinner(player) {  
  // Go through board array
  // If there is three in a row
  if (false) {
    // Output winner of the game
    console.log('Congratulations', player, 'YOU ARE THE WINNER!!!');
    // End game
    prompt.stop();
  } else { // Else
    // Invoke the other player
    player0();
  }
}
  
init();