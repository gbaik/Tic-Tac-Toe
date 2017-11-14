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

var turn = 0;

prompt.start();

function init() {
  drawBoard();

  move('X');  
}

function drawBoard() {
  console.log(board[0][0],'|', board[0][1], '|', board[0][2]);
  console.log(board[1][0],'|', board[1][1], '|', board[1][2]);
  console.log(board[2][0],'|', board[2][1], '|', board[2][2]);  
}

function move(player) {
  prompt.get({
    properties: {
      coordinates: {
        description: ("Type a number to make a move")
      }
    }
  }, function (err, result) {
    coordinates = result.coordinates;
    var row = coordinates[0];
    var column = coordinates[1];

  if (!result.coordinates || !properCoordinates[coordinates] || board[row][column] !== coordinates) {
      errorHandler(player);      
  } else {
    board[row][column] = ` ${player}`;
    drawBoard();
    turn++;
    checkEnd(player, row, column);
  }
  });
}

function setPlayer(player) {
  player = player === 'X' ? 'O' : 'X';
  move(player);  
}

function errorHandler(player) {
  console.log('Move not valid, please go again');
  setPlayer(player);  
}

function checkRow (row) {
  return checkEqual(board[row][0], board[row][1], board[row][2]);
}

function checkColumn (column) {
  return checkEqual(board[0][column], board[1][column], board[2][column]);
}

function checkMinorDiagonal () {
  return checkEqual(board[0][0], board[1][1], board[2][2]);
}

function checkMajorDiagonal () {
  return checkEqual(board[0][2], board[1][1], board[2][0]);
}

function checkEqual (cord1, cord2, cord3) {
  return cord1 === cord2 && cord2 === cord3;
}

function checkWinner (row, column) {
  return checkRow(row) || checkColumn(column) || checkMinorDiagonal() || checkMajorDiagonal();
}

function checkDraw () {
  return turn === 9;
}

function checkEnd(player, row, column) {  
  if (checkWinner(row, column)) {
    console.log('Congratulations', player, 'YOU ARE THE WINNER!!!');
    prompt.stop();
  } else if (checkDraw()) {
    console.log('Tie game try again!');
    prompt.stop();
  } else { 
    setPlayer(player);
  }
}
  
init();