export class UrlManager {
  constructor(grid) {
    this.grid = grid;
  }

  update() {
    const hash = "#|" + this.brailleString() + "|";
    history.replaceState(null, null, hash);
  }

  brailleString() {
    let str = "";
    for (let x = 0; x < this.grid.width; x += 2) {
      let n = 0;
      for (let y = 0; y < this.grid.height; y++) {
        n |= (this.grid.get(x, y) ? 1 : 0) << y;
        n |= (this.grid.get(x + 1, y) ? 1 : 0) << (y + 4);
      }
      str += String.fromCharCode(0x2800 + n);
    }
    return str;
  }
}
