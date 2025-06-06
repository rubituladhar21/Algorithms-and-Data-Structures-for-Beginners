class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  private left: ListNode | null;
  private right: ListNode | null;

  // Implementing this with dummy nodes would be easier!
  constructor() {
    this.left = null;
    this.right = null;
  }

  enqueue(val: number): void {
    const newNode = new ListNode(val);
    if (this.right != null) {
      // Queue is not empty
      this.right.next = newNode;
      this.right = this.right.next;
    } else {
      // Queue is empty
      this.left = newNode;
      this.right = newNode;
    }
  }

  dequeue(): number | undefined {
    if (this.left == null) {
      // Queue is empty
      return;
    }
    // Remove left node and return value
    const val = this.left.val;
    this.left = this.left.next;
    return val;
  }

  print(): void {
    let cur = this.left;
    let s = "";
    while (cur != null) {
      s += cur.val + "->";
      cur = cur.next;
    }
    console.log(s);
  }
}
