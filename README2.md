# tic-tac-toe
|tic|tac|toe|
|---|---|---|
| x | o | x |
| o | x | o |
| x | o | x |


## why did i build this game?
this game was built as an excerise in JavaScript, HTML, and CSS for the first week of General Assembly.  
## logic notes
this game is based on a 3*3 grid and uses coordinates to plot player and computer moves 
```function theGame(e) {
       showPlayer("user");
       let userName = document.getElementById("userName").value;
       if (isGameWon) {
         return;
       }
       if (x < 0 || y < 0 || x > 2 || y > 2) {
         throw new Error("you're thinking too outside of the box");
       }
       const result = playMove(x, y, "○");
       if (result) {
         redraw(theBoard);
         if (!runCheckWinner("user", theBoard)) {
           setTimeout(() => {
             computerMoves(theBoard);
             showPlayer("computer");
           }, 1000)
         }
       } else {
         alert("ocupado");
       }
     };
```

this code stores the users move into an array which is then compared to an array of winning moves. 
when a match between user/computer and winningCheck is found, the program will stop running and return a winner to the front end.