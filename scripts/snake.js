import { inputDirection } from "./input.js";

// Initial speed of snake
export let snakeSpeed = 5;

// Function to increase speed
export const increaseSpeed = () => {
  snakeSpeed += 0.5;
};

// Coordinates for snake segments
export let snakeBody = [{ x: 15, y: 15 }];

let newSegments = 0;

export const update = () => {
  updateSegments();

  // Move the snake forward
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
