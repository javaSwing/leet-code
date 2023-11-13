/**
 * 链表节点
 */
export class LinkedNode<T> {
  val: T;
  next: null | LinkedNode<T>;
  constructor(v: T) {
    this.val = v;
    this.next = null;
  }
}
