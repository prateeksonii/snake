import { onSnake, increaseSpeed } from "./snake.js";

// Initial position of food
let position = {
  x: Math.floor(Math.random() * 30 + 1),
  y: Math.floor(Math.random() * 30 + 1),
};

// Constant to set the increase in length on eating food
const EXPANSION_RATE = 1;

export const update = (expandSnake) => {
  if (onSnake(position)) {
    expandSnake(EXPANSION_RATE);
    increaseSpeed();

    // Set food position such that it doesn't overlap the snake
    while (onSnake(position)) {
      position = {
        x: Math.floor(Math.random() * 30 + 1),
        y: Math.floor(Math.random() * 30 + 1),
      };
    }
  }
};

export const render = (grid) => {
  // Render food item
  const food = document.createElement("div");
  food.className = "food";
  food.style.gridColumnStart = position.x;
  food.style.gridRowStart = position.y;
  grid.appendChild(food);
};
