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

// callback function for onclick function
function doSomething() {
  console.log("i'll figure out what goes here later");
}

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



// possible combinations to win
// 1,2,3 - 4,5,6 - 7,8,9 - 1,4,7 - 2,5,8 - 3,6,9 - 1,5,9 - 7,5,3

// function to check if user has won
function userMoves() {
  let playerMove = [];

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