export const directions = {
  37: { x: -1, y: 0 },
  38: { x: 0, y: -1 },
  39: { x: 1, y: 0 },
  40: { x: 0, y: 1 },
};

export function randomEmptyCell(grid) {
  let empty = [];
  for (let i = 0; i < grid.cells.length; i++) {
    if (!grid.cells[i]) empty.push(i);
  }
  const rand = empty[Math.floor(Math.random() * empty.length)];
  return [rand % grid.width, Math.floor(rand / grid.width)];
}
