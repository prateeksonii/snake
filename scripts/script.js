import {
  snakeSpeed,
  snakeBody,
  render as snakeRender,
  update as snakeUpdate,
  expandSnake,
  resetSnake,
} from "./snake.js";

import { render as foodRender, update as foodUpdate } from "./food.js";
import { resetDirection } from "./input.js";

let previousTime = 0;

// Function to run the game at specific frame per second. DEFAULT=5
const main = (currentTime) => {
  window.requestAnimationFrame(main);
  const diff = (currentTime - previousTime) / 1000;
  if (diff < 1 / snakeSpeed) return;
  previousTime = currentTime;

  update();
  render();
};

window.requestAnimationFrame(main);

const grid = document.querySelector(".game-grid");

// Function to handle the logical updates at every frame
const update = () => {
  snakeUpdate();
  foodUpdate(expandSnake);

  // Check if snake touched a corner
  const atCorner = snakeBody.some(
    (segment) =>
      segment.x > 30 || segment.y > 30 || segment.x < 0 || segment.y < 0
  );

  if (atCorner) {
    gameOver();
  }

  // Check if snake overlapped
  for (let i = 0; i < snakeBody.length - 2; i++) {
    for (let j = i + 1; j < snakeBody.length - 1; j++) {
      if (
        snakeBody[i].x === snakeBody[j].x &&
        snakeBody[i].y === snakeBody[j].y
      ) {
        gameOver();
      }
    }
  }
};

// Reset on Game over
const gameOver = () => {
  alert(`You lost.. Your score is: ${snakeBody.length}`);
  resetSnake();
  resetDirection();
};

// Function to handle rendering at every frame
const render = () => {
  // Clear previous render
  grid.innerHTML = "";

  // Render new snake and food
  snakeRender(grid);
  foodRender(grid);
};
