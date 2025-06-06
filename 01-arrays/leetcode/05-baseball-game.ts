// stacks
// https://leetcode.com/problems/baseball-game/

function calPoints(operations: string[]): number {
  const stack: number[] = [];
  let total = 0;

  for (const op of operations) {
    switch (op) {
      case "C": {
        const removed = stack.pop();
        if (removed !== undefined) total -= removed;
        break;
      }
      case "D": {
        const top = stack[stack.length - 1] ?? 0;
        const double = 2 * top;
        stack.push(double);
        total += double;
        break;
      }
      case "+": {
        const top = stack[stack.length - 1] ?? 0;
        const secondTop = stack[stack.length - 2] ?? 0;
        const sum = top + secondTop;
        stack.push(sum);
        total += sum;
        break;
      }
      default: {
        const current = Number(op);
        stack.push(current);
        total += current;
      }
    }
  }

  return total;
}
