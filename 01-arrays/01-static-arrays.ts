class StaticArray {
  // Insert n into arr at the next open position.
  // Length is the number of 'real' values in arr, and capacity
  // is the size (aka memory allocated for the fixed size array).
  insertEnd(arr: number[], n: number, length: number, capacity: number): void {
    if (length < capacity) {
      arr[length] = n;
    }
  }

  // Remove from the last position in the array if the array
  // is not empty (i.e. length is non-zero).
  removeEnd(arr: number[], length: number): void {
    if (length > 0) {
      // Overwrite last element with some default value.
      // We would also the length to decreased by 1.
      arr[length - 1] = 0;
      length--;
    }
  }

  // Insert n into index i after shifting elements to the right.
  // Assuming i is a valid index and arr is not full.
  insertMiddle(arr: number[], i: number, n: number, length: number): void {
    // Shift starting from the end to i.
    for (let index: number = length - 1; index > i - 1; index--) {
      arr[index + 1] = arr[index];
    }
    //Insert at i
    arr[i] = n;
  }

  // Remove value at index i before shifting elements to the left.
  // Assuming i is a valid index.
  removeMiddle(arr: number[], i: number, length: number): void {
    // Shift starting from i + 1 to end.
    for (let index: number = i + 1; index < length; index++) {
      arr[index - 1] = arr[index];
    }
    // No need to 'remove' arr[i], since we already shifted
  }

  printArr(arr: number[], length: number): void {
    let s: string = "";
    for (let i: number = 0; i < length; i++) {
      s += arr[i] + " ";
    }
    console.log(s);
  }
}
