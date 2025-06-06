// Matrix (2D Grid)
const grid: number[][] = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

// Shortest path from top left to bottom right
function bfs(grid: number[][]): number {
  const ROWS: number = grid.length;
  const COLS: number = grid[0].length;
  const visit: number[][] = new Array(4).fill(0).map(() => Array(4).fill(0)); // 4x4 2d array
  const queue: number[][] = [];

  queue.push([0, 0]); // Add {0, 0}
  visit[0][0] = 1;

  let length: number = 0;
  while (queue.length > 0) {
    const queueLength: number = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const pair: number[] = queue.shift()!;
      const r: number = pair[0];
      const c: number = pair[1];

      if (r === ROWS - 1 && c === COLS - 1) {
        return length;
      }
      // We can directly build the four neighbors
      const neighbors: number[][] = [
        [r, c + 1],
        [r, c - 1],
        [r + 1, c],
        [r - 1, c],
      ];
      for (let j = 0; j < 4; j++) {
        const newR: number = neighbors[j][0];
        const newC: number = neighbors[j][1];
        if (
          Math.min(newR, newC) < 0 ||
          newR === ROWS ||
          newC === COLS ||
          visit[newR][newC] === 1 ||
          grid[newR][newC] === 1
        ) {
          continue;
        }
        queue.push(neighbors[j]);
        visit[newR][newC] = 1;
      }
    }
    length++;
  }
  return length; // This should never be called
}
