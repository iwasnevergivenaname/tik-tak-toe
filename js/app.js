// isGameWon ends the game and ability to click the page when isGameWon results in true
let isGameWon = false;

// attaching js variables to the front end
let zeroZero = document.getElementById("zero-zero");
let oneZero = document.getElementById("one-zero");
let twoZero = document.getElementById("two-zero");
let zeroOne = document.getElementById("zero-one");
let oneOne = document.getElementById("one-one");
let twoOne = document.getElementById("two-one");
let zeroTwo = document.getElementById("zero-two");
let oneTwo = document.getElementById("one-two");
let twoTwo = document.getElementById("two-two");

// clickable function
zeroZero.addEventListener("click", playValue(0, 0));
oneZero.addEventListener("click", playValue(1, 0));
twoZero.addEventListener("click", playValue(2, 0));
zeroOne.addEventListener("click", playValue(0, 1));
oneOne.addEventListener("click", playValue(1, 1));
twoOne.addEventListener("click", playValue(2, 1));
zeroTwo.addEventListener("click", playValue(0, 2));
oneTwo.addEventListener("click", playValue(1, 2));
twoTwo.addEventListener("click", playValue(2, 2));

// grab user name from input
function namingFunc() {
  let userName = document.getElementById("userName").value;
  document.getElementById("results").textContent = `${userName} is playing`
}

// to win you must hit one of these combinations
function checkWinner(arr /*has to be 3 x 3*/) {
  //diagonal win
  if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
    return arr[0][0];
  }
  if (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
    return arr[0][2];
  }

  // first column win
  if (arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2]) {
    return arr[0][0]
  }
  // second column win
  if (arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2]) {
    return arr[1][0]
  }
  // third column win
  if (arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2]) {
    return arr[2][0]
  }

  // first row win
  if (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0]) {
    return arr[0][0]
  }
  //second row win
  if (arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1]) {
    return arr[0][1]
  }
  // third row win
  if (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2]) {
    return arr[0][2]
  }
  return false;
}

// empty board for user and computer moves to occupy
const theBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];
// use to interpolate moves without storing each individual unit
const names = ["zero", "one", "two"]

// i is x
// j is y
function redraw(board) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // placing moves on board
      document.getElementById(`${names[i]}-${names[j]}`).textContent = board[i][j];
    }
  }
}


function playMove(x, y, mark) {
  // this checks if the move has been played already. any value other than 0 will result in a false and alert from theGame function
  if (theBoard[x][y].length !== 0) {
    return false;
  }
  theBoard[x][y] = mark;
  return true;
}

// recursive function playValue returns eventListener callback function
function playValue(x, y) {
  return function theGame(e) {
    // if this condition is true, game ends
    if (isGameWon) {
      return;
    }
    // checking to make sure our input are within the confines of the board (3 * 3)
    if (x < 0 || y < 0 || x > 2 || y > 2) {
      throw new Error("you're thinking too outside of the box");
    }
    // if result is true then the user played a valid move.
    const result = playMove(x, y, "○");
    if (result) {
      // update board with move
      redraw(theBoard);
      // check if that move won the game
      isGameWon = checkWinner(theBoard); // either returns a winner or false
      if (isGameWon) {
        // prints name to results container
        let userName = document.getElementById("userName").value;
        document.getElementById("results").textContent = `wowie ${userName}, you won :)`

      } else {
        // do nothing, it's the computers move
        setTimeout(() => {
          computerMoves(theBoard);
        }, 1000)
      }
    } else {
      // make player replay move
      alert("ocupado");
    }
  };
}

// function for computer to make choice
// default x and y set randomly from params
function computerMoves(theBoard, x = Math.floor(Math.random() * 3), y = Math.floor(Math.random() * 3)) {
  // the computer is prompted to try again after a false
  if (!playMove(x, y, "x")) {
    computerMoves(theBoard);
  }
  // update board with computer move
  redraw(theBoard);
  return true;
}
