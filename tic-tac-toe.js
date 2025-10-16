document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll("#board div");

  squares.forEach(function (square) {
    square.setAttribute("class", "square");
  });
});
