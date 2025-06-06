// Count paths (backtracking)
function dfs(
  grid: number[][],
  r: number,
  c: number,
  visit: number[][]
): number {
  const ROWS: number = grid.length;
  const COLS: number = grid[0].length;

  if (
    Math.min(r, c) < 0 ||
    r === ROWS ||
    c === COLS ||
    visit[r][c] === 1 ||
    grid[r][c] === 1
  ) {
    return 0;
  }
  if (r === ROWS - 1 && c === COLS - 1) {
    return 1;
  }
  visit[r][c] = 1;

  let count: number = 0;
  count += dfs(grid, r + 1, c, visit);
  count += dfs(grid, r - 1, c, visit);
  count += dfs(grid, r, c + 1, visit);
  count += dfs(grid, r, c - 1, visit);

  visit[r][c] = 0;
  return count;
}
