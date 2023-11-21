import DoublyLinkedList from '../doubly-linked-list/doubly-linked-list';

/**
 * 使用链表模拟栈
 */
export class StackLinkedList<T> {
  private items: DoublyLinkedList<T>;

  constructor() {
    this.items = new DoublyLinkedList<T>();
  }

  push(e: T) {
    this.items.push(e);
  }

  pop() {
    const last = this.items.removeAt(this.items.size() - 1);
    return last;
  }

  peek() {
    return this.items.getElementAt(this.items.size() - 1)?.val;
  }

  size() {
    return this.items.size();
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  toString() {
    return this.items.toString();
  }
}
