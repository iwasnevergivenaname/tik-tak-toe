// attaching js variables to the front end
console.log(1);
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


// two win you must hit these co-ords
function checkWinner(arr /*is guraunteed to be 3 x 3*/) {
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
  // if (arr[0][0] == arr[1][1] && arr[1] == arr[2][2]) {return true;}
  return false;
}

// default choices are empty arrays
let count = 0;
// empty board for user and computer moves to occupy
const theBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
const names = ['zero', 'one','two']

// i is x
// j is y
function redraw(board) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      document.getElementById(`${names[i]}-${names[j]}`).textContent = board[i][j];
    }
  }
}

// function that plots player and computer move if it falls along the x and y axis
function playMove(x, y, mark) {
  if (theBoard[x][y].length !== 0) {
    return false;
  }
  theBoard[x][y] = mark;
  return true;
}

// recursive function playValue returns eventlistener callback function
function playValue(x, y) {
  return function doSomething(e) {
    // checking to make sure our input are within the confines of the board (3 * 3)
    if (x < 0 || y < 0 || x > 2 || y > 2) {
      throw new Error("you're thinking too outside of the box");
    }
    // if result is true then the user played a valid move.
    const result = playMove(x, y, '○');
    if (result) {
      redraw(theBoard);
      const didYouWin = checkWinner(theBoard); // either returns a winner or false
      if (didYouWin) {
        // declare winner
      } else {
        // do nothing.
        setTimeout(() => {
          computerMoves(theBoard);
        }, 1000)
      }
    } else {
      // make player repeat move
      alert("occupado");
    }
  };
}

// function for computer to make choice
// default x and y set randomly from params
function computerMoves(theBoard, x = Math.floor(Math.random() * 3), y = Math.floor(Math.random() * 3)) {
  if (!playMove(x, y, 'X')) {
    computerMoves(theBoard);
  }
  redraw(theBoard);
  return true;
}

// function to compare player moves with winning arrays
function compareArray(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      let result = compareArray(array1[i], array2[i]);
      if (!result) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}


//
//
// // players
// const playerSigToName = {
//   x: 'computer',
//   o: 'salim'
// }
//
// playerSigToName.o = 'salim';
//
// // print array and declare winner
// print(array1);
// const winner = check(array1);
// if (!winner) {
//   document.getElementById("results").textContent = "no winner yet";
// } else {
//   document.getElementById("results").textContent = `${playerSigToName[winner]}`;
// }