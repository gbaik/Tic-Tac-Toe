var prompt = require('prompt');

prompt.start();

var TicTacToe = function() {
  this.board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
  ];
  this.properCoordinates = {
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
  this.turn = 0;
}

TicTacToe.prototype.init = function() {
  this.drawBoard();
  this.move('X');  
}

TicTacToe.prototype.drawBoard = function() {
  console.log(this.board[0][0],'|', this.board[0][1], '|', this.board[0][2]);
  console.log(this.board[1][0],'|', this.board[1][1], '|', this.board[1][2]);
  console.log(this.board[2][0],'|', this.board[2][1], '|', this.board[2][2]);  
}

TicTacToe.prototype.move = function(player) {
  var context = this;
  
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

    if (!result.coordinates || !context.properCoordinates[coordinates] || context.board[row][column] !== coordinates) {
        context.errorHandler(player);      
    } else {
      context.board[row][column] = ` ${player}`;
      context.drawBoard();
      context.turn++;
      context.checkEnd(player, row, column);
    }
  });
}

TicTacToe.prototype.setPlayer = function(player) {
  player = player === 'X' ? 'O' : 'X';
  this.move(player);  
}

TicTacToe.prototype.errorHandler = function(player) {
  console.log('Move not valid, please go again');
  this.setPlayer(player);  
}

TicTacToe.prototype.checkRow = function(row) {
  return this.checkEqual(this.board[row][0], this.board[row][1], this.board[row][2]);
}

TicTacToe.prototype.checkColumn = function(column) {
  return this.checkEqual(this.board[0][column], this.board[1][column], this.board[2][column]);
}

TicTacToe.prototype.checkMinorDiagonal = function() {
  return this.checkEqual(this.board[0][0], this.board[1][1], this.board[2][2]);
}

TicTacToe.prototype.checkMajorDiagonal = function() {
  return this.checkEqual(this.board[0][2], this.board[1][1], this.board[2][0]);
}

TicTacToe.prototype.checkEqual = function(cord1, cord2, cord3) {
  return cord1 === cord2 && cord2 === cord3;
}

TicTacToe.prototype.checkWinner = function(row, column) {
  return this.checkRow(row) || this.checkColumn(column) || this.checkMinorDiagonal() || this.checkMajorDiagonal();
}

TicTacToe.prototype.checkDraw = function() {
  return this.turn === 9;
}

TicTacToe.prototype.checkEnd = function(player, row, column) {  
  if (this.checkWinner(row, column)) {
    console.log('Congratulations', player, 'YOU ARE THE WINNER!!!');
    prompt.stop();
  } else if (this.checkDraw()) {
    console.log('Tie game try again!');
    prompt.stop();
  } else { 
    this.setPlayer(player);
  }
}
  
var game = new TicTacToe();
game.init();