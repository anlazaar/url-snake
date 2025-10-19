import { directions } from "./utils.js";

export function setupControls() {
  document.onkeydown = (e) => {
    const dir = directions[e.keyCode];
    if (dir) window.game?.snake.moveQueue.unshift(dir);
  };
}
