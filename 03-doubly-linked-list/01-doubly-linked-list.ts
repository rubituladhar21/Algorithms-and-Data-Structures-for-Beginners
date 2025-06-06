class DoublyListNode {
  val: number;
  next: DoublyListNode | null;
  prev: DoublyListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// Implementation for Doubly Linked List
class DoublyLinkedList {
  head: DoublyListNode;
  tail: DoublyListNode;

  constructor() {
    // Init the list with 'dummy' head and tail nodes which makes
    // edge cases for insert & remove easier.
    this.head = new DoublyListNode(-1);
    this.tail = new DoublyListNode(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertFront(val: number): void {
    const newNode = new DoublyListNode(val);
    newNode.prev = this.head;
    newNode.next = this.head.next;

    this.head.next!.prev = newNode;
    this.head.next = newNode;
  }

  insertEnd(val: number): void {
    const newNode = new DoublyListNode(val);
    newNode.next = this.tail;
    newNode.prev = this.tail.prev;

    this.tail.prev!.next = newNode;
    this.tail.prev = newNode;
  }

  // Remove first node after dummy head (assume it exists)
  removeFront(): void {
    this.head.next!.next!.prev = this.head;
    this.head.next = this.head.next!.next;
  }

  // Remove last node before dummy tail (assume it exists)
  removeEnd(): void {
    this.tail.prev!.prev!.next = this.tail;
    this.tail.prev = this.tail.prev!.prev;
  }

  print(): void {
    let curr = this.head.next;
    let s = "";
    while (curr != this.tail) {
      s += curr!.val + "->";
      curr = curr!.next;
    }
    console.log(s);
  }
}