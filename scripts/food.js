import { onSnake } from "./snake.js";

let position = {
  x: Math.floor(Math.random() * 30 + 1),
  y: Math.floor(Math.random() * 30 + 1),
};

const EXPANSION_RATE = 1;

export const update = (expandSnake) => {
  if (onSnake(position)) {
    expandSnake(EXPANSION_RATE);

    while (onSnake(position)) {
      position = {
        x: Math.floor(Math.random() * 30 + 1),
        y: Math.floor(Math.random() * 30 + 1),
      };
    }
  }
};

export const render = (grid) => {
  const food = document.createElement("div");
  food.className = "food";
  food.style.gridColumnStart = position.x;
  food.style.gridRowStart = position.y;
  grid.appendChild(food);
};
