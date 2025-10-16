document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");
  const gameState = Array(9).fill(null);
  let player = "X"


  squares.forEach(function (square, index) {
    square.setAttribute("class", "square");

    square.addEventListener("click", function(){
        if (gameState[index] != null ) return;

        square.textContent = player;
        square.classList.add(player);

        gameState[index] = player;
        player = player == "X" ? "O" : "X";
        
    })
  });
});
