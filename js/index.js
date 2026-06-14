const container = document.querySelector("#container");
const button = document.querySelector("#resize-btn");
const clearButton = document.querySelector("#clear-btn");

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
      square.classList.add("hovered");
    });

    container.appendChild(square);
  }
}

button.addEventListener("click", () => {
  let size = parseInt(
    prompt("Enter the number of squares per side (max 100):"),
  );

  if (isNaN(size)) return;

  if (size > 100) {
    size = 100;
  }

  createGrid(size);
});

clearButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.classList.remove("hovered");
  });
});

createGrid(16);
