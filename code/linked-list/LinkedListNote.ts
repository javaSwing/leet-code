export class LinkedListNode {
  value: unknown;
  next: LinkedListNode | null;

  constructor(val: unknown, next = null) {
    this.value = val;
    this.next = next;
  }
}
