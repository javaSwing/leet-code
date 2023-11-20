import { defaultEquals } from '../../../utils';
import LinkedList from '../linked-list';
import DoublyNode from './doubly-node';

export default class DoublyLinkedList<T> extends LinkedList<T> {
  tail: undefined | DoublyNode<T>;
  head: undefined | DoublyNode<T>;

  constructor(eqFn = defaultEquals) {
    super(eqFn);
    this.tail = undefined;
  }

  push(element: T): void {
    const node = new DoublyNode(element);
    if (this.head === undefined) {
      this.head = node;
    } else {
      let c = this.head;
      while (c.next != undefined) {
        c = c.next;
      }
      c.next = node;
      node.prev = c;
    }
    this.count++;
  }

  insert(e: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(e);
      if (index == 0) {
        const c = this.head;
        node.next = c;
        c && (c.prev = node);
        this.head = node;
      } else if (index === this.count - 1) {
        const c = this.tail;
        node.next = c;
        c && (c.prev = node);
        this.tail = node;
      } else {
        let c = this.head;
        for (let i = 0; i < this.count && c !== undefined; i++) {
          if (i === index) {
            const prev = c.prev;
            prev && (prev.next = node);
            node.prev = prev;
            node.next = c;
            c.prev = node;
            break;
          }
          c = c?.next;
        }
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let c = this.head;
      if (index == 0) {
        this.head = c?.next;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head && (this.head.prev = undefined);
        }
      } else if (index === this.count - 1) {
        c = this.tail;
        this.tail = c?.prev;
        if (this.tail) {
          this.tail.next = undefined;
        }
      } else {
        c = this.getElementAt(index) as DoublyNode<T> | undefined;
        const p = c?.prev;
        if (p) {
          p.next = c?.next?.next;
        }
        if (c && c.next) {
          c.next.prev = p;
        }
      }
      this.count--;
      return c?.val;
    }
    return undefined;
  }
}
