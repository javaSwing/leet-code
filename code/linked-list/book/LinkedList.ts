import { defaultEquals } from '../../utils';
import { LinkedNode } from './LinkedNode';
import { type LinkedListInterface } from './type';

export default class LinkedList<T> implements LinkedListInterface<T> {
  count: number;
  head: null | LinkedNode<T>;
  eqFn: (a: T, b: T) => boolean;
  constructor(eq = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.eqFn = eq;
  }

  push(element: T) {
    const node = new LinkedNode<T>(element);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }

    this.count++;
  }

  // @ts-ignore
  insert(element: T, position: number) {
    // @ts-ignore
    const node = new LinkedListNode(element);

    this.count++;
    return false;
  }
  // @ts-ignore
  getElementAt(index: number) {
    return undefined;
  }

  // @ts-ignore
  remove(element: T) {
    return;
  }
  // @ts-ignore
  indexOf(element: T) {
    return -1;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let prev = this.head;
      let i = 0;
      while (prev?.next != null) {
        if (i === index) {
          break;
        }
        prev = prev.next;
        i++;
      }

      const target = prev?.next;

      if (prev && prev.next && target) {
        prev.next = target.next;
      }
      this.count--;
      return target?.val;
    }
    return;
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count;
  }
  toString() {
    const arr: T[] = [];
    let c = this.head;
    while (c?.next !== null) {
      c?.val && arr.push(c.val);
      // @ts-ignore
      c = c?.next;
    }

    return arr.join(',');
  }
}
