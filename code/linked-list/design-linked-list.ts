/**
 * 707. 设计链表
 * 尝试了好多测试用例才通过
 * @link https://leetcode.cn/problems/design-linked-list/description/
 */

import { LinkedNode } from './book/linked-node';

export class MyLinkedList {
  header: LinkedNode<number> | undefined;
  count: number;

  constructor() {
    this.header = undefined;
    this.count = 0;
  }

  getElementAt(index: number) {
    if (index >= this.count || index < 0) {
      return;
    }
    let c = this.header;
    for (let i = 0; i < this.count; i++) {
      if (i === index) {
        break;
      }
      c = c?.next;
    }
    return c;
  }

  get(index: number): number {
    const e = this.getElementAt(index);
    return e ? e.val : -1;
  }

  addAtHead(val: number): void {
    const node = new LinkedNode(val);
    if (this.count === 0) {
      this.header = node;
    } else {
      const c = this.header;
      node.next = c;
      this.header = node;
    }
    this.count++;
  }

  addAtTail(val: number): void {
    const node = new LinkedNode(val);
    if (this.count === 0) {
      this.header = node;
      this.count++;
    } else {
      let c = this.header;
      for (let i = 1; i < this.count; i++) {
        c = c?.next;
      }
      if (c?.next) {
        c.next = node;
      }
      this.count++;
    }
  }

  addAtIndex(index: number, val: number): void {
    if (index >= 0 && index <= this.count) {
      if (index === 0) {
        this.addAtHead(val);
      } else if (index === this.count) {
        this.addAtTail(val);
      } else {
        const pre = this.getElementAt(index - 1);
        if (pre) {
          const node = new LinkedNode(val);
          const t = pre.next;
          pre.next = node;
          node.next = t;
          this.count++;
        }
      }
    }
  }

  deleteAtIndex(index: number): void {
    let target = this.getElementAt(index);
    if (target) {
      if (target.next) {
        target.val = target.next?.val;
        target.next = target.next?.next;
      } else {
        target = undefined;
      }
      this.count--;
    }
    // this.toString()
  }
}
