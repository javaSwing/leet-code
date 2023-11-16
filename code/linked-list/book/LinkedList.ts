import { defaultEquals } from '../../utils';
import { LinkedNode } from './LinkedNode';
import { type LinkedListInterface } from './type';

export default class LinkedList<T> implements LinkedListInterface<T> {
  count: number;
  head: undefined | LinkedNode<T>;
  eqFn: (a: T, b: T) => boolean;
  constructor(eq = defaultEquals) {
    this.count = 0;
    this.head = undefined;
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

  insert(element: T, position: number) {
    if (position >= 0 && position <= this.count) {
      const node = new LinkedNode(element);
      if (position == 0) {
        const c = this.head;
        node.next = c;
        this.head = node;
      } else {
        const pre = this.getElementAt(position - 1);
        if (pre) {
          const next = pre.next;
          pre.next = node;
          node.next = next;
        }
      }
      this.count++;
      return true;
    }
    return false;
  }
  getElementAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index && current != undefined; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  remove(element: T) {
    const i = this.indexOf(element);
    return this.removeAt(i);
  }

  indexOf(element: T) {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (current && this.eqFn(current.val, element)) {
        return i;
      }
      current = current?.next;
    }

    return -1;
  }

  removeAt(index: number) {
    if (index === 0) {
      if (typeof this.head !== 'undefined') {
        const c = this.head;
        this.head = this.head.next;
        this.count--;
        return c.val;
      }
    } else {
      const prev = this.getElementAt(index - 1);
      const current = prev?.next;
      if (prev) {
        prev.next = current?.next;
        this.count--;
        return current?.val;
      }
    }
    return undefined;
  }

  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count;
  }

  toString() {
    if (!this.head) {
      return '';
    }
    let result = `${this.head?.val}`;
    let current: LinkedNode<T> | undefined = this.head;
    for (let i = 1; i < this.count; i++) {
      current = current?.next;
      if (current) {
        result += `,${current.val}`;
      }
    }

    return result;
  }
}
