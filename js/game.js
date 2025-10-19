import { Grid } from "./grid.js";
import { Snake } from "./snake.js";
import { UrlManager } from "./urlManager.js";

export class Game {
  constructor() {
    this.grid = new Grid();
    this.snake = new Snake(this.grid);
    this.url = new UrlManager(this.grid);
    this.paused = false;
  }

  start() {
    const loop = () => {
      if (!this.paused) {
        this.snake.update();
        this.url.update();
      }
      requestAnimationFrame(loop);
    };
    loop();
  }
}
