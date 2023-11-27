/**
 * 链表节点
 */
export class LinkedNode<T> {
  val: T;
  next: undefined | LinkedNode<T>;
  constructor(v: T, next: undefined | LinkedNode<T> = undefined) {
    this.val = v;
    this.next = next;
  }

  toString() {
    if (!this) {
      return '';
    }
    let result = `${this?.val}`;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let current: LinkedNode<T> | undefined = this.next;
    while (current !== undefined) {
      if (current) {
        result += `,${current.val}`;
      }
      current = current.next;
    }

    return result;
  }
}
