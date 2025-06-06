// Brute Force
function bruteForce(n: number): number {
  if (n <= 1) {
    return n;
  }
  return bruteForce(n - 1) + bruteForce(n - 2);
}

// Memoization
function memoization(n: number, cache: number[]): number {
  if (n <= 1) {
    return n;
  }
  if (cache[n] !== 0) {
    return cache[n];
  }
  cache[n] = memoization(n - 1, cache) + memoization(n - 2, cache);
  return cache[n];
}

// Dynamic Programming
function dp(n: number): number {
  if (n < 2) {
    return n;
  }
  let dpArray: number[] = [0, 1];
  let i: number = 2;
  while (i <= n) {
    let tmp: number = dpArray[1];
    dpArray[1] = dpArray[0] + dpArray[1];
    dpArray[0] = tmp;
    i++;
  }
  return dpArray[1];
}
