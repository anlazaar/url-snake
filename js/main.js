import { Game } from "./game.js";
import { setupControls } from "./controls.js";
import { initUI } from "./ui.js";

window.onload = () => {
  initUI();
  setupControls();
  const game = new Game();
  game.start();
};
