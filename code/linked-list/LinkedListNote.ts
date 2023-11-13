export class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | undefined;

  constructor(val: T, next = undefined) {
    this.value = val;
    this.next = next;
  }

  toString(callback?: (e: T) => void) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
