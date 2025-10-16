document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  const gameState = Array(9).fill(null);
  const status = document.getElementById("status");
  let player = "X"

  const newGame = document.querySelector(".btn");


  function checkWinner() {
            const s = gameState;

            // Game board layout
            //
            //  [0] | [1] | [2]
            //  -----------------
            //  [3] | [4] | [5]
            //  -----------------
            //  [6] | [7] | [8]
            
            if (s[0] && s[0] === s[1] && s[0] === s[2]) return s[0]; 
            if (s[3] && s[3] === s[4] && s[3] === s[5]) return s[3]; 
            if (s[6] && s[6] === s[7] && s[6] === s[8]) return s[6]; 

            if (s[0] && s[0] === s[3] && s[0] === s[6]) return s[0]; 
            if (s[1] && s[1] === s[4] && s[1] === s[7]) return s[1]; 
            if (s[2] && s[2] === s[5] && s[2] === s[8]) return s[2]; 

            if (s[0] && s[0] === s[4] && s[0] === s[8]) return s[0]; 
            if (s[2] && s[2] === s[4] && s[2] === s[6]) return s[2]; 

            return null;
            }

  squares.forEach(function (square, index) {
    square.setAttribute("class", "square");

    square.addEventListener("click", function(){
        if (gameState[index] || status.classList.contains("you-won")) return;

        square.textContent = player;
        square.classList.add(player);

        gameState[index] = player;
        
        const winner = checkWinner();
        if (winner){
            status.textContent = `Congratulations! ${winner} is the Winner!`;
            status.classList.add("you-won");
        }else{
            player = player == "X" ? "O" : "X";
        }

    })

    newGame.addEventListener("click", function(){
        squares.forEach(function (square, index){
            square.textContent = null;
            square.classList.remove("X", "O");
            gameState[index] = null;
        });
        status.classList.remove("you-won");
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
    })
  });
});
