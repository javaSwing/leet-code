export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }

  append(n: ListNode) {
    this.next = n;
    return this;
  }
}
