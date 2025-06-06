// leftChild = heap[2 * i]
// rightChild = heap[(2 * i) + 1]
// parent = heap[i // 2]

class Heap {
  private heap: number[];

  constructor() {
    this.heap = new Array<number>();
    this.heap.push(0);
  }

  heapify(arr: number[]): void {
    // 0-th position is moved to the end
    arr.push(arr[0]);

    this.heap = arr;
    let cur: number = Math.floor((this.heap.length - 1) / 2);

    while (cur > 0) {
      // Percolate Down
      let i: number = cur;

      while (2 * i < this.heap.length) {
        if (
          2 * i + 1 < this.heap.length &&
          this.heap[2 * i + 1] < this.heap[2 * i] &&
          this.heap[i] > this.heap[2 * i + 1]
        ) {
          // Swap right child
          let tmp: number = this.heap[i];
          this.heap[i] = this.heap[2 * i + 1];
          this.heap[2 * i + 1] = tmp;
          i = 2 * i + 1;
        } else if (this.heap[i] > this.heap[2 * i]) {
          // Swap left child
          let tmp: number = this.heap[i];
          this.heap[i] = this.heap[2 * i];
          this.heap[2 * i] = tmp;
          i = 2 * i;
        } else {
          break;
        }
      }
      cur--;
    }
  }
}
