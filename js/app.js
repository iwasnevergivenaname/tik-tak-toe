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

// default choices are null
let player = {
  currentMove: []
};

let computer = {
  currentMove: []
};

// callback function for the players move
function doSomething(e) {
  console.log("i'll figure out what goes here later");
  if (e.target.id === "unit-one") {
    document.getElementById("unit-one").textContent = "○";
    player.currentMove = moves[0];
  } else if (e.target.id === "unit-two") {
    document.getElementById("unit-two").textContent = "○";
    player.currentMove = moves[1];
  } else if (e.target.id === "unit-three") {
    document.getElementById("unit-three").textContent = "○";
    player.currentMove = moves[2];
  } else if (e.target.id === "unit-four") {
    document.getElementById("unit-four").textContent = "○";
    player.currentMove = moves[3];
  } else if (e.target.id === "unit-five") {
    document.getElementById("unit-five").textContent = "○";
    player.currentMove = moves[4];
  } else if (e.target.id === "unit-six") {
    document.getElementById("unit-six").textContent = "○";
    player.currentMove = moves[5];
  } else if (e.target.id === "unit-seven") {
    document.getElementById("unit-seven").textContent = "○";
    player.currentMove = moves[6];
  } else if (e.target.id === "unit-eight") {
    document.getElementById("unit-eight").textContent = "○";
    player.currentMove = moves[7];
  } else if (e.target.id === "unit-nine") {
    document.getElementById("unit-nine").textContent = "○";
    player.currentMove = moves[8];
  } else {
    console.log("you didnt press the right button");
  }
}




// function for computer to make choice
function computerMoves () {
  let randomMove = Math.floor(Math.random() * moves.length);
  computer.currentMove = moves[randomMove]
  let allMoves = [];
  allMoves.push(computer.currentMove);
  console.log("all moves");
  if (computer.currentMove === moves[0]) {
    document.getElementById("unit-one").textContent = "X";
    console.log("this is gonna mark unit one");
  } else if (computer.currentMove === moves[1]) {
    document.getElementById("unit-two").textContent = "X";
    console.log("this is gonna mark unit two");
  } else if (computer.currentMove === moves[2]) {
    document.getElementById("unit-three").textContent = "X";
    console.log("this is gonna mark unit three");
  } else if (computer.currentMove === moves[3]) {
    document.getElementById("unit-four").textContent = "X";
    console.log("this is gonna mark unit four");
  } else if (computer.currentMove === moves[4]) {
    document.getElementById("unit-five").textContent = "X";
    console.log("this is gonna mark unit five");
  } else if (computer.currentMove === moves[5]) {
    document.getElementById("unit-six").textContent ="X";
    console.log("this is gonna mark unit six");
  } else if (computer.currentMove === moves[6]) {
    document.getElementById("unit-seven").textContent ="X";
    console.log("this is gonna mark unit seven");
  } else if (computer.currentMove === moves[7]) {
    document.getElementById("unit-eight").textContent = "X";
    console.log("this is gonna mark unit eight");
  } else if (computer.currentMove === moves[8]) {
    document.getElementById("unit-nine").textContent = "X";
    console.log("this is gonna mark unit nine");
  } else {
    console.log("this is not a box");
  }
  // creating the visual move
}

computerMoves();


// function to check if user has won
function userMoves(playerMove) {

// possible combinations to win
// 1,2,3 - 4,5,6 - 7,8,9 - 1,4,7 - 2,5,8 - 3,6,9 - 1,5,9 - 7,5,3
  if (playerMove === unitOne && unitTwo && unitThree) {
    console.log("you have won!");
  } else if (playerMove === unitFour && unitFive && unitSix) {
    console.log("you have won!");
  } else if (playerMove === unitSeven && unitEight && unitNine) {
    console.log("you have won!");
  } else if (playerMove === unitOne && unitFour && unitSeven) {
    console.log("you have won!");
  } else if (playerMove === unitTwo && unitFive && unitEight) {
    console.log("you have won!");
  } else if (playerMove === unitThree && unitSix && unitNine) {
    console.log("you have won!");
  } else if (playerMove ===  unitOne && unitFive && unitNine) {
    console.log("you have won!");
  } else if (playerMove === unitSeven && unitFive && unitThree) {
    console.log("you have won!");
  } else {
    console.log("you have lost :(");
  }



}

// userMoves(player.currentMove); ???
userMoves(unitThree, unitOne, unitEight, unitNine);

// use % to count clicks and alternate between X and 0
// add a submit form for user names
// add a results div at bottom of page