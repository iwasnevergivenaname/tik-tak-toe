const {EventEmitter} = require('events');
const emitter = new EventEmitter();

/**
 * I is X
 * j is Y
 * @type {string[][]}
 */

// empty array that will update with user and computer input
let array1 = [
  ['x', 'x', 'x'],
  ['', 'o', 'o'],
  ['', '', '']
];

// console.log(array1[0][0]);
// console.log(array1[1][1]);
// console.log(array1[2][2]);

function check(arr /*is guraunteed to be 3 x 3*/) {
  if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
    return arr[0][0];
  }
  if (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
    return arr[0][2];
  }

  if (arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2]) {
    return arr[0][0]
  }
  if (arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2]) {
    return arr[1][0]
  }
  if (arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2]) {
    return arr[2][0]
  }

  if (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0]) {
    return arr[0][0]
  }
  if (arr[0][1] == arr[1][1] && arr[1][1] == arr[1][2]) {
    return arr[0][1]
  }
  if (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2]) {
    return arr[0][2]
  }
  // if (arr[0][0] == arr[1][1] && arr[1] == arr[2][2]) {return true;}
  return false;
}


function print(array) {
  array.forEach(a => console.log(a))
}


// players
const playerSigToName = {
  o: 'computer',
  // x: 'salim'
}

playerSigToName.x = 'salim';


// check if winner
print(array1);
const winner = check(array1);
if (!winner) {
  console.log('There was no winner');
} else {
  console.log(`Winner is: ${playerSigToName[winner]}`)
}




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


// clicking
let turns = 0;
emitter.on('click', (i, j) => {
  if (i < 0 || j < 0 || i > 2 || j > 2) {
    throw new Error('Invalid coordinates');
  }
  if (turns % 2 === 0) {
    array1[i][j] = 'x';
  } else {
    array1[i][j] = 'o'
  }

  turns++;
})




process.nextTick(() => {
  emitter.emit('click', 1, 2)
  print(array1);
});

console.log(compareArray(array1, array2));