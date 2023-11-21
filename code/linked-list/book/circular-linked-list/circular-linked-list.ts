import { defaultEquals } from '../../../utils';
import LinkedList from '../linked-list';
import { LinkedNode } from '../linked-node';

/**
 * 循环链表
 * 即链表的最后一个的tail.next并不是undefined而是指向head
 * 双向循环链表表示在单向的基础上，head的pre指向链表的最尾节点
 */
export default class CircularLinkedList<T> extends LinkedList<T> {
  constructor(equalFn = defaultEquals) {
    super(equalFn);
  }

  push(element: T) {
    const node = new LinkedNode(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.getElementAt(this.size() - 1);
      current.next = node;
    }

    // set node.next to head - to have circular list
    node.next = this.head;

    this.count++;
  }

  /**
   * 插入元素方法
   * @param element
   * @param position
   *
   * 在中间插入元素，正常处理即可
   * 主要是在链表的头或者尾进行特别处理
   */
  insert(element: T, position: number): boolean {
    if (position >= 0 && position <= this.count) {
      const node = new LinkedNode(element);
      const c = this.head;
      if (position === 0) {
        if (this.head === undefined) {
          this.head = node;
          this.head.next = node;
        } else {
          node.next = c;
          const lastNode = this.getElementAt(this.size() - 1);
          if (lastNode !== undefined) {
            this.head = node;
            lastNode.next = node;
          }
        }
      } else {
        const prev = this.getElementAt(position - 1);
        if (prev) {
          node.next = prev.next;
          prev.next = node;
        }
      }
      this.count++;
      return true;
    }

    return false;
  }

  /**
   *
   * @param index
   * @returns
   *
   * 只需要特别处理index=0时的节点处理即可
   */
  removeAt(index: number): T | undefined {
    if (index >= 0 && index < this.count) {
      let c = this.head;
      if (index === 0) {
        if (this.count === 1) {
          this.head = undefined;
        } else {
          const lastNode = this.getElementAt(this.count - 1);
          c = lastNode?.next;
          if (lastNode) {
            lastNode.next = c?.next;
          }
        }
      } else {
        const prev = this.getElementAt(index - 1);
        if (prev && prev.next) {
          c = prev.next;
          prev.next = c.next;
        }
      }
      this.count--;
      return c?.val;
    }
    return undefined;
  }
}
