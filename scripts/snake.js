import { inputDirection } from "./input.js";

export const SNAKE_SPEED = 5;

export let snakeBody = [{ x: 15, y: 15 }];

let newSegments = 0;

export const update = () => {
  updateSegments();

  console.log(snakeBody);
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
};

export const render = (grid) => {
  snakeBody.forEach(({ x, y }) => {
    const snake = document.createElement("div");
    snake.className = "snake";
    snake.style.gridColumnStart = x;
    snake.style.gridRowStart = y;
    grid.appendChild(snake);
  });
};

export const expandSnake = (rate) => {
  newSegments = rate;
};

const updateSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0;
};

export const onSnake = (pos) =>
  snakeBody.some((segment) => segment.x === pos.x && segment.y === pos.y);

export const resetSnake = () => {
  snakeBody = [{ x: 15, y: 15 }];
};
