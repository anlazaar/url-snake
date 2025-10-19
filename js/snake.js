import { randomEmptyCell } from "./utils.js";

export class Snake {
  constructor(grid) {
    this.grid = grid;
    this.body = [];
    this.dir = { x: 1, y: 0 };
    this.moveQueue = [];
    this.init();
  }

  init() {
    this.grid.clear();
    for (let x = 0; x < 4; x++) {
      this.body.unshift({ x, y: 2 });
      this.grid.set(x, 2, "SNAKE");
    }
    this.dropFood();
  }

  update() {
    const nextDir = this.moveQueue.pop();
    if (nextDir) this.dir = nextDir;

    const head = this.body[0];
    const next = { x: head.x + this.dir.x, y: head.y + this.dir.y };

    if (this.isDead(next)) return this.init();

    const eats = this.grid.get(next.x, next.y) === "FOOD";
    if (!eats) {
      const tail = this.body.pop();
      this.grid.set(tail.x, tail.y, null);
    }

    this.body.unshift(next);
    this.grid.set(next.x, next.y, "SNAKE");
    if (eats) this.dropFood();
  }

  isDead(next) {
    const out =
      next.x < 0 ||
      next.y < 0 ||
      next.x >= this.grid.width ||
      next.y >= this.grid.height;
    const hitsSelf = this.grid.get(next.x, next.y) === "SNAKE";
    return out || hitsSelf;
  }

  dropFood() {
    const [x, y] = randomEmptyCell(this.grid);
    this.grid.set(x, y, "FOOD");
  }
}
