export let inputDirection = { x: 0, y: 0 };

document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 37:
      inputDirection.x = -1;
      inputDirection.y = 0;
      break;
    case 38:
      inputDirection.x = 0;
      inputDirection.y = -1;
      break;
    case 39:
      inputDirection.x = 1;
      inputDirection.y = 0;
      break;
    case 40:
      inputDirection.x = 0;
      inputDirection.y = 1;
      break;
    default:
      return;
  }
});

export const resetDirection = () => {
  inputDirection = { x: 0, y: 0 };
};
