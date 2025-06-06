// dynamic arrays
// https://leetcode.com/problems/concatenation-of-array/

function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array<number>(2 * n);

  for (let i = 0; i < n; i++) {
    result[i] = nums[i];
    result[i + n] = nums[i];
  }

  return result;
}
