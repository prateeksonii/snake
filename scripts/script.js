import {
  SNAKE_SPEED,
  snakeBody,
  render as snakeRender,
  update as snakeUpdate,
  expandSnake,
  resetSnake,
} from "./snake.js";

import { render as foodRender, update as foodUpdate } from "./food.js";
import { resetDirection } from "./input.js";

let previousTime = 0;

const main = (currentTime) => {
  window.requestAnimationFrame(main);
  const diff = (currentTime - previousTime) / 1000;
  if (diff < 1 / SNAKE_SPEED) return;
  previousTime = currentTime;

  update();
  render();
};

window.requestAnimationFrame(main);

const grid = document.querySelector(".game-grid");

const update = () => {
  snakeUpdate();
  foodUpdate(expandSnake);

  const atCorner = snakeBody.some(
    (segment) =>
      segment.x > 30 || segment.y > 30 || segment.x < 0 || segment.y < 0
  );

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

  if (atCorner) {
    gameOver();
  }
};

const gameOver = () => {
  alert(`You lost.. Your score is: ${snakeBody.length}`);
  resetSnake();
  resetDirection();
};

const render = () => {
  grid.innerHTML = "";
  snakeRender(grid);
  foodRender(grid);
};
