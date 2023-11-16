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
}
