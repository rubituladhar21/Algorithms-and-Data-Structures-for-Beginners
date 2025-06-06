class DynamicArray {
  private capacity: number;
  private length: number;
  private arr: number[];

  constructor() {
    this.capacity = 2;
    this.length = 0;
    this.arr = new Array<number>(2);
  }

  // Insert n in the last position of the array
  pushback(n: number): void {
    if (this.length === this.capacity) {
      this.resize();
    }

    // insert at next empty position
    this.arr[this.length] = n;
    this.length++;
  }

  private resize(): void {
    // Create new array of double capacity
    this.capacity = 2 * this.capacity;
    const newArr: number[] = new Array<number>(this.capacity);

    // Copy elements to newArr
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }

  // Remove the last element in the array
  popback(): void {
    if (this.length > 0) {
      this.length--;
    }
  }

  // Get value at i-th index
  get(i: number): number | undefined {
    if (i < this.length) {
      return this.arr[i];
    }
    // Here we would throw an out of bounds exception
    return undefined;
  }

  // Insert n at i-th index
  insert(i: number, n: number): void {
    if (i < this.length) {
      this.arr[i] = n;
      return;
    }
    return;
    // Here we would throw an out of bounds exception
  }

  print(): void {
    let s: string = "";
    for (let i = 0; i < this.length; i++) {
      s += this.arr[i] + " ";
    }
    console.log(s);
  }
}