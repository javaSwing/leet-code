export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.val) : `${this.val}`;
  }

  append(n: ListNode) {
    this.next = n;
    return this;
  }
}
