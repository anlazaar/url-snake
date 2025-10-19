export class Grid {
  constructor(width = 40, height = 4) {
    this.width = width;
    this.height = height;
    this.cells = new Array(width * height).fill(null);
  }

  index(x, y) {
    return (x % this.width) + y * this.width;
  }

  get(x, y) {
    return this.cells[this.index(x, y)];
  }

  set(x, y, value) {
    this.cells[this.index(x, y)] = value;
  }

  clear() {
    this.cells.fill(null);
  }
}
