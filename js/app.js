// attaching js variables to the front end
let unitOne = document.getElementById("unit-one");
let unitTwo = document.getElementById("unit-two");
let unitThree = document.getElementById("unit-three");
let unitFour = document.getElementById("unit-four");
let unitFive =  document.getElementById("unit-five");
let unitSix = document.getElementById("unit-six");
let unitSeven = document.getElementById("unit-seven");
let unitEight = document.getElementById("unit-eight");
let unitNine = document.getElementById("unit-nine");

// clickable function
unitOne.addEventListener("click", doSomething);
unitTwo.addEventListener("click", doSomething);
unitThree.addEventListener("click", doSomething);
unitFour.addEventListener("click", doSomething);
unitFive.addEventListener("click", doSomething);
unitSix.addEventListener("click", doSomething);
unitSeven.addEventListener("click", doSomething);
unitEight.addEventListener("click", doSomething);
unitNine.addEventListener("click", doSomething);

// array of possible moves
const moves = [unitOne, unitTwo, unitThree, unitFour, unitFive, unitSix, unitSeven, unitEight, unitNine];

// default choices are empty arrays
let player = {
  currentMove: []
};

let computer = {
  currentMove: []
};

// callback function for the players move
function doSomething(e) {
  console.log(`you just clicked ${e.target.id}`);
  if (e.target.id === "unit-one") {
    document.getElementById("unit-one").textContent = "○";
    player.currentMove = moves[0];
    allPlayerMoves.push("unit-one");
    console.log(allPlayerMoves);
  } else if (e.target.id === "unit-two") {
    document.getElementById("unit-two").textContent = "○";
    player.currentMove = moves[1];
    allPlayerMoves.push("unit-two");
    console.log(allPlayerMoves);
  } else if (e.target.id === "unit-three") {
    document.getElementById("unit-three").textContent = "○";
    player.currentMove = moves[2];
    allPlayerMoves.push("unit-three");
    console.log(allPlayerMoves);
  } else if (e.target.id === "unit-four") {
    document.getElementById("unit-four").textContent = "○";
    player.currentMove = moves[3];
    allPlayerMoves.push("unit-four");
    console.log(allPlayerMoves);
  } else if (e.target.id === "unit-five") {
    document.getElementById("unit-five").textContent = "○";
    player.currentMove = moves[4];
    allPlayerMoves.push("unit-five");
    console.log(allPlayerMoves);
  } else if (e.target.id === "unit-six") {
    document.getElementById("unit-six").textContent = "○";
    player.currentMove = moves[5];
    allPlayerMoves.push("unit-six");
    console.log(allPlayerMoves);
  } else if (e.target.id === "unit-seven") {
    document.getElementById("unit-seven").textContent = "○";
    player.currentMove = moves[6];
    allPlayerMoves.push("unit-seven");
    console.log(allPlayerMoves);
  } else if (e.target.id === "unit-eight") {
    document.getElementById("unit-eight").textContent = "○";
    player.currentMove = moves[7];
    allPlayerMoves.push("unit-eight");
    console.log(allPlayerMoves);
  } else if (e.target.id === "unit-nine") {
    document.getElementById("unit-nine").textContent = "○";
    player.currentMove = moves[8];
    allPlayerMoves.push("unit-nine");
    console.log(allPlayerMoves);
  } else {
    console.log("you didnt press the right button");
  }
  setTimeout(function() {
    computerMoves();
    whoWillWin();
  }, 2000);
}


// function for computer to make choice
function computerMoves () {
  let randomMove = Math.floor(Math.random() * moves.length);
  computer.currentMove = moves[randomMove]

  // not allowing the computer to pick a unit that has already been picked
  if (computer.currentMove === allPlayerMoves) {
   console.log("i shornt be picking this");
  // conditionals to place X
  } else if (computer.currentMove === moves[0]) {
    document.getElementById("unit-one").textContent = "X";
    allComputerMoves.push("unit-one");
    console.log("this is gonna mark unit one");
    console.log(allComputerMoves);
  } else if (computer.currentMove === moves[1]) {
    document.getElementById("unit-two").textContent = "X";
    allComputerMoves.push("unit-two");
    console.log("this is gonna mark unit two");
    console.log(allComputerMoves);
  } else if (computer.currentMove === moves[2]) {
    document.getElementById("unit-three").textContent = "X";
    allComputerMoves.push("unit-three");
    console.log("this is gonna mark unit three");
    console.log(allComputerMoves);
  } else if (computer.currentMove === moves[3]) {
    document.getElementById("unit-four").textContent = "X";
    allComputerMoves.push("unit-four");
    console.log("this is gonna mark unit four");
    console.log(allComputerMoves);
  } else if (computer.currentMove === moves[4]) {
    document.getElementById("unit-five").textContent = "X";
    allComputerMoves.push("unit-five");
    console.log("this is gonna mark unit five");
    console.log(allComputerMoves);
  } else if (computer.currentMove === moves[5]) {
    document.getElementById("unit-six").textContent ="X";
    allComputerMoves.push("unit-six");
    console.log("this is gonna mark unit six");
    console.log(allComputerMoves);
  } else if (computer.currentMove === moves[6]) {
    document.getElementById("unit-seven").textContent ="X";
    allComputerMoves.push("unit-seven");
    console.log("this is gonna mark unit seven");
    console.log(allComputerMoves);
  } else if (computer.currentMove === moves[7]) {
    document.getElementById("unit-eight").textContent = "X";
    allComputerMoves.push("unit-eight");
    console.log("this is gonna mark unit eight");
    console.log(allComputerMoves);
  } else if (computer.currentMove === moves[8]) {
    document.getElementById("unit-nine").textContent = "X";
    allComputerMoves.push("unit-nine");
    console.log("this is gonna mark unit nine");
    console.log(allComputerMoves);
  } else {
    console.log("this is not a box");
  }
}

// variables to store every move made
let allComputerMoves = [];
let allPlayerMoves = [];

whoWillWin();

// function to check if user has won
function whoWillWin() {
  let winningMoves = [["unit-one", "unit-two", "unit-three"],
    ["unit-four", "unit-five", "unit-six"],
    ["unit-seven", "unit-eight", "unit-nine"],
    ["unit-one", "unit-four", "unit-seven"],
    ["uni-two", "unit-five", "unit-eight"],
    ["unit-three", "unit-six", "unit-nine"],
    ["unit-one", "unit-five", "unit-nine"],
    ["unit-seven", "unit-five", "unit-three"]];

  // let result = winningMoves.filter(allPlayerMoves.length);
  // console.log(result + "here");
  // return result;

}


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
  //checking if human won
  // if (human.includes("unit-one" && "unit-two" && "unit-three")) {
  //   document.getElementById("results").textContent = "you won with 123!"
  //   console.log("you have won!");
  // } else if (human.includes( "unit-four" && "unit-five" && "unit-six")) {
  //   document.getElementById("results").textContent = "you won with 456!"
  //   console.log("you have won!");
  // } else if (human.includes("unit-seven" && "unit-eight" && "unit-nine")) {
  //   document.getElementById("results").textContent = "you won with 789!"
  //   console.log("you have won!");
  // } else if (human.includes("unit-one" && "unit-four" && "unit-seven")) {
  //   document.getElementById("results").textContent = "you won with 147!"
  //   console.log("you have won!");
  // } else if (human.includes("uni-two" && "unit-five" && "unit-eight")) {
  //   document.getElementById("results").textContent = "you won with 258!"
  //   console.log("you have won!");
  // } else if (human.includes("unit-three" && "unit-six" && "unit-nine")) {
  //   document.getElementById("results").textContent = "you won! with 369"
  //   console.log("you have won!");
  // } else if (human.includes("unit-one" && "unit-five" && "unit-nine")) {
  //   document.getElementById("results").textContent = "you won with 159!"
  //   console.log("you have won!");
  // } else if (human.includes("unit-seven" && "unit-five" && "unit-three")) {
  //   document.getElementById("results").textContent = "you won with 753!"
  //   console.log("you have won!");
  //
  //   // checking if computer won
  // } else if (computer.includes("unit-one" && "unit-two" && "unit-three")) {
  //   document.getElementById("results").textContent = "computer won with 123!"
  //   console.log("computer has won!");
  // } else if (computer.includes("unit-four" && "unit-five" && "unit-six")) {
  //   document.getElementById("results").textContent = "computer won with 456!"
  //   console.log("computer has won!");
  // } else if (computer.includes("unit-seven" && "unit-eight" && "unit-nine")) {
  //   document.getElementById("results").textContent = "computer won with 789!"
  //   console.log("computer has won!");
  // } else if (computer.includes("unit-one" && "unit-four" && "unit-seven")) {
  //   document.getElementById("results").textContent = "computer won with 147!"
  //   console.log("computer has won!");
  // } else if (computer.includes("uni-two" && "unit-five" && "unit-eight")) {
  //   document.getElementById("results").textContent = "computer won 258!"
  //   console.log("computer has won!");
  // } else if (computer.includes("unit-three" && "unit-six" && "unit-nine")) {
  //   document.getElementById("results").textContent = "computer won with 369!"
  //   console.log("computer has won!");
  // } else if (computer.includes("unit-one" && "unit-five" && "unit-nine")) {
  //   document.getElementById("results").textContent = "computer won with 159!"
  //   console.log("computer has won!");
  // } else if (computer.includes("unit-seven" && "unit-five" && "unit-three")) {
  //   document.getElementById("results").textContent = "computer won with 753!"
  //   console.log("computer has won!");
  // } else {
  //   console.log("no one has won yet");
  // }

