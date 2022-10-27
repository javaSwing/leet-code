export class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(val: T, next = null) {
    this.value = val;
    this.next = next;
  }

  toString(callback?: (e: T) => void) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
