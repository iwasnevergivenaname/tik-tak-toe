# tic-tac-toe
## why did i build this game?
this game was built as an excerise in JavaScript, HTML, and CSS. 
## logic notes
this game is based on a 3*3 grid and uses coordinates to plot player and computer moves 
```function theGame(e) {
       showPlayer("user");
       let userName = document.getElementById("userName").value;
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
         // isGameWon = checkWinner(theBoard); // either returns a winner or false
         if (!runCheckWinner("user", theBoard)) {
           // do nothing, it's the computers move
           setTimeout(() => {
             computerMoves(theBoard);
             showPlayer("computer");
           }, 1000)
         }
       } else {
         // make player replay move
         alert("ocupado");
       }
     };

```

this code stores a users move into an array which then is compared to an array of winning moves. 
when a match between user/computer and winningCheck is found, the program will stop running and return a winner to the front end.