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
zeroZero.addEventListener("click", playValue(0, 0));//function (e, o, o
oneZero.addEventListener("click", doSomething);
twoZero.addEventListener("click", doSomething);
zeroOne.addEventListener("click", doSomething);
oneOne.addEventListener("click", doSomething);
twoOne.addEventListener("click", doSomething);
zeroTwo.addEventListener("click", doSomething);
oneTwo.addEventListener("click", doSomething);
twoTwo.addEventListener("click", doSomething);


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

// array of possible moves
const moves = [zeroZero, oneZero, twoZero,
               zeroOne, oneOne, twoOne,
               zeroTwo, oneTwo, twoTwo];

// default choices are empty arrays
let player = {
  currentMove: []
};

let computer = {
  currentMove: []
};

let count = 0;
// empty board for user and computer moves to occupy
const theBoard = [['', '', ''],
                  ['', '', ''],
                  ['', '', '']]

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
  return function doSomething(e, x, y) {
    // checking to make sure our input are within the confines of the board (3 * 3)
    if (x < 0 || y < 0 || x > 2 || y > 2) {
      throw new Error("you're thinking too outside of the box");
    }
    // check to make sure the spot is empty
    if (theBoard[x][y].length === 0) {
      throw new Error("occupado");
    }
    // if result is true then the user played a valid move.
    const result = playMove(x, y, '○');
    if (result) {
      const didYouWin = checkWinner(theBoard); // either returns a winner or false
      if (didYouWin) {
        // declare winner
      } else {
        // do nothing.
        computerMoves(theBoard);
      }
    } else {
      // make player repeat move
      alert("occupado");
    }
  }
}

// callback function for the players move
function doSomething(e, x, y) {
  console.log(`you just clicked ${e.target.id}`);
  const result = playMove(x, y, '○');
  if (!result) {
    // move was already made
    alert("occupado");
  } else {
    check;

  }
  // if (e.target.id === "zero-zero") {
  //     // this is [0][0]
  //   tmpArray[0][0] = "○";
  //   let winner = check(tmpArray)
  //   if (winner) {
  //
  //   }
  //   document.getElementById("zero-zero").textContent = "○";
  //   player.currentMove = moves[0];
  //   allPlayerMoves.push("zero-zero");
  //   console.log(allPlayerMoves);
  /*} else */
  if (e.target.id === "one-zero") {
    document.getElementById("one-zero").textContent = "○";
    player.currentMove = moves[1];
    allPlayerMoves.push("one-zero");
    console.log(allPlayerMoves);
  } else if (e.target.id === "two-zero") {
    document.getElementById("two-zero").textContent = "○";
    player.currentMove = moves[2];
    ;allPlayerMoves.push("two-zero");
    console.log(allPlayerMoves);
  } else if (e.target.id === "zero-one") {
    document.getElementById("zero-one").textContent = "○";
    player.currentMove = moves[3];
    allPlayerMoves.push("zero-one");
    console.log(allPlayerMoves);
  } else if (e.target.id === "one-one") {
    document.getElementById("one-one").textContent = "○";
    player.currentMove = moves[4];
    allPlayerMoves.push("one-one");
    console.log(allPlayerMoves);
  } else if (e.target.id === "two-one") {
    document.getElementById("two-one").textContent = "○";
    player.currentMove = moves[5];
    allPlayerMoves.push("two-one");
    console.log(allPlayerMoves);
  } else if (e.target.id === "zero-two") {
    document.getElementById("zero-two").textContent = "○";
    player.currentMove = moves[6];
    allPlayerMoves.push("zero-two");
    console.log(allPlayerMoves);
  } else if (e.target.id === "one-two") {
    document.getElementById("one-two").textContent = "○";
    player.currentMove = moves[7];
    allPlayerMoves.push("one-two");
    console.log(allPlayerMoves);
  } else if (e.target.id === "two-two") {
    document.getElementById("two-two").textContent = "○";
    player.currentMove = moves[8];
    allPlayerMoves.push("two-two");
    console.log(allPlayerMoves);
  } else {
    console.log("you didnt press the right button");
  }
  setTimeout(function () {
    computerMoves(allPlayerMoves);
    whoWillWin(allPlayerMoves);
  }, 2000);
}


let allComputerMoves = [];
let allPlayerMoves = [];

// function for computer to make choice
function computerMoves(tmpArray, x = Math.floor(Math.random() * 3), y = Math.floor(Math.random() * 3)) {
  if (!playMove(x, y, 'X')) {
    computerMoves(tmpArray);
  }
  return true;
}
//
//   // for (let i = 0; i < allPlayerMoves.length; i++) {
//   //   for (let j = 0; j < j++) {
//   //     if (allComputerMoves[j] === allPlayerMoves[i]) {
//   //       console.log("i shornt be doing all that");
//   //       computerMoves();
//   //
//   //     }
//   //   }
//
//   // not allowing the computer to pick a unit that has already been picked
//   // if (computer.currentMove === player.currentMove) {
//   //  console.log("i shornt be picking this");
//   //  computerMoves();
//   // conditionals to place X
//   // } else
//   if (computer.currentMove === moves[0]) {
//     if (playArr.includes(moves[0])) {
//       console.log("i shornt be doing all that");
//       computerMoves();
//     } else {
//       document.getElementById("zero-zero").textContent = "X";
//       allComputerMoves.push("zero-zero");
//       console.log("this is gonna mark 0-0");
//       console.log(allComputerMoves);
//     }
//   } else if (computer.currentMove === moves[1]) {
//     if (playArr.includes(moves[1])) {
//       console.log("i shornt be doing all that");
//       computerMoves();
//     } else {
//       document.getElementById("one-zero").textContent = "X";
//       allComputerMoves.push("one-zero");
//       console.log("this is gonna mark 1-0");
//       console.log(allComputerMoves);
//     }
//   } else if (computer.currentMove === moves[2]) {
//     if (playArr.includes(moves[2])) {
//       console.log("i shornt be doing all that");
//       computerMoves();
//     } else {
//       document.getElementById("two-zero").textContent = "X";
//       allComputerMoves.push("two-zero");
//       console.log("this is gonna mark 2-0");
//       console.log(allComputerMoves);
//     }
//   } else if (computer.currentMove === moves[3]) {
//     if (playArr.includes(moves[3])) {
//       console.log("i shornt be doing all that");
//       computerMoves();
//     } else {
//       document.getElementById("zero-one").textContent = "X";
//       allComputerMoves.push("zero-one");
//       console.log("this is gonna mark 0-1");
//       console.log(allComputerMoves);
//     }
//   } else if (computer.currentMove === moves[4]) {
//     if (playArr.includes(moves[4])) {
//       console.log("i shornt be doing all that");
//       computerMoves();
//     } else {
//       document.getElementById("one-one").textContent = "X";
//       allComputerMoves.push("one-one");
//       console.log("this is gonna mark 1-1");
//       console.log(allComputerMoves);
//     }
//   } else if (computer.currentMove === moves[5]) {
//     if (playArr.includes(moves[5])) {
//       console.log("i shornt be doing all that");
//       computerMoves();
//     } else {
//       document.getElementById("two-one").textContent = "X";
//       allComputerMoves.push("two-one");
//       console.log("this is gonna mark 2-1");
//       console.log(allComputerMoves);
//     }
//   } else if (computer.currentMove === moves[6]) {
//     if (playArr.includes(moves[6])) {
//       console.log("i shornt be doing all that");
//       computerMoves();
//     } else {
//       document.getElementById("zero-two").textContent = "X";
//       allComputerMoves.push("zero-two");
//       console.log("this is gonna mark 0-2");
//       console.log(allComputerMoves);
//     }
//   } else if (computer.currentMove === moves[7]) {
//     if (playArr.includes(moves[7])) {
//       console.log("i shornt be doing all that");
//       computerMoves();
//     } else {
//       document.getElementById("one-two").textContent = "X";
//       allComputerMoves.push("one-two");
//       console.log("this is gonna mark 1-2");
//       console.log(allComputerMoves);
//     }
//   } else if (computer.currentMove === moves[8]) {
//     if (playArr.includes(moves[8])) {
//       console.log("i shornt be doing all that");
//       computerMoves();
//     } else {
//       document.getElementById("two-two").textContent = "X";
//       allComputerMoves.push("two-one");
//       console.log("this is gonna mark 2-2");
//       console.log(allComputerMoves);
//     }
//   } else {
//     console.log("this is not a box");
//   }
// }
//

// function to check if user has won
function whoWillWin(human) {
  let winningMoves = [["zero-zero", "one-zero", "two-zero"],
    ["zero-one", "one-one", "two-one"],
    ["zero-two", "one-two", "two-two"],
    ["zero-zero", "zero-one", "zero-two"],
    ["one-zero", "one-one", "one-two"],
    ["two-zero", "two-one", "two-two"],
    ["zero-zero", "one-one", "two-two"],
    ["two-zero", "one-one", "zero-two"]];

  // let result = winningMoves.filter(allPlayerMoves.length);
  // console.log(result + "here");
  // return result;


  // for (let i = 0; i < winningMoves.length; i++) {
  //   console.log("winning moves ran");
  //   for (let j = 0; j < allPlayerMoves.length; j++) {
  //     if (winningMoves[i] === allPlayerMoves[j]) {
  //       console.log("you won!")
  //     }
  //   }
  // }
  //
  //


// possible combinations to win
// 1,2,3 - 4,5,6 - 7,8,9 - 1,4,7 - 2,5,8 - 3,6,9 - 1,5,9 - 7,5,3
  //checking if human conatains winning combnations
  if (JSON.stringify(human) === JSON.stringify(winningMoves[0])) {
    document.getElementById("results").textContent = "you won!"
    console.log("you have won!");
  } else if (JSON.stringify(human) === JSON.stringify(winningMoves[1])) {
    document.getElementById("results").textContent = "you won!"
    console.log("you have won!");
  } else if (JSON.stringify(human) === JSON.stringify(winningMoves[2])) {
    document.getElementById("results").textContent = "you won!"
    console.log("you have won!");
  } else if (JSON.stringify(human) === JSON.stringify(winningMoves[3])) {
    document.getElementById("results").textContent = "you won!"
    console.log("you have won!");
  } else if (JSON.stringify(human) === JSON.stringify(winningMoves[4])) {
    document.getElementById("results").textContent = "you won!"
    console.log("you have won!");
  } else if (JSON.stringify(human) === JSON.stringify(winningMoves[5])) {
    document.getElementById("results").textContent = "you won!"
    console.log("you have won!");
  } else if (JSON.stringify(human) === JSON.stringify(winningMoves[6])) {
    document.getElementById("results").textContent = "you won!"
    console.log("you have won!");
  } else if (JSON.stringify(human) === JSON.stringify(winningMoves[7])) {
    document.getElementById("results").textContent = "you won!"
    console.log("you have won!");
  } else {
    console.log("something up with winning conditional");
  }
  //   //checking if the computer won
  // if (JSON.stringify(computer) === JSON.stringify(winningMoves[0])) {
  //   document.getElementById("results").textContent = "computer won :("
  //   console.log("computer has won!");
  // } else if (JSON.stringify(computer) === JSON.stringify(winningMoves[1]))  {
  //   document.getElementById("results").textContent = "computer won :("
  //   console.log("computer has won!");
  // } else if (JSON.stringify(computer) === JSON.stringify(winningMoves[2])) {
  //   document.getElementById("results").textContent = "computer won :("
  //   console.log("computer has won!");
  // } else if (JSON.stringify(computer) === JSON.stringify(winningMoves[3])) {
  //   document.getElementById("results").textContent = "computer won :("
  //   console.log("computer has won!");
  // } else if (JSON.stringify(computer) === JSON.stringify(winningMoves[4])) {
  //   document.getElementById("results").textContent = "computer won :("
  //   console.log("computer has won!");
  // } else if (JSON.stringify(computer) === JSON.stringify(winningMoves[5])) {
  //   document.getElementById("results").textContent = "computer won :("
  //   console.log("computer has won!");
  // } else if (JSON.stringify(computer) === JSON.stringify(winningMoves[6])) {
  //   document.getElementById("results").textContent = "computer won :("
  //   console.log("computer has won!");
  // } else if (JSON.stringify(computer) === JSON.stringify(winningMoves[7])) {
  //   document.getElementById("results").textContent = "computer won :("
  //   console.log("computer has won!");
  // } else if (JSON.stringify(computer) === JSON.stringify(winningMoves[8])) {
  //   document.getElementById("results").textContent = "computer won :("
  //   console.log("computer has won!");
  // } else {
  //   console.log("no one has won yet");
  // }
}
