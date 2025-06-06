// Implementing a stack is trivial using a dynamic array
// (which we implemented earlier).
class Stack<T> {
  private stack: T[];

  constructor() {
    this.stack = new Array<T>();
  }

  push(item: T): void {
    this.stack.push(item);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  size(): number {
    return this.stack.length;
  }
}