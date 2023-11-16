import { LinkedNode } from "../LinkedNode";

/**
 * 双向链表 node 节点
 */
export default class DoublyNode<T> extends LinkedNode<T> {
  prev: DoublyNode<T> | undefined;
  next: DoublyNode<T> | undefined;

  constructor(element: T, next: DoublyNode<T> | undefined = undefined, prev: DoublyNode<T>| undefined = undefined) {
    super(element, next)
    this.prev = prev;
  }
}
