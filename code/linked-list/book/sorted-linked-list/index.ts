import { Compare, defaultCompare, defaultEquals } from '../../../utils';
import LinkedList from '../linked-list';

/**
 * 有序链表
 */
export class SortedLinkedList<T> extends LinkedList<T> {
  compareFn: (a: any, b: any) => number;
  constructor(eqFn = defaultEquals, compareFn = defaultCompare) {
    super(eqFn);
    this.compareFn = compareFn;
  }

  push(element: T) {
    if (this.isEmpty()) {
      super.push(element);
    } else {
      const index = this.getIndexNextSortedElement(element);
      super.insert(element, index);
    }
  }

  insert(element: T, position: number = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    } else {
      position = this.getIndexNextSortedElement(element);
      return super.insert(element, position);
    }
  }
  private getIndexNextSortedElement<T>(element: T) {
    let c = this.head;
    let i = 0;
    for (; i < this.count && c; i++) {
      const r = this.compareFn(element, c.val);
      if (r === Compare.LESS_THAN) {
        return i;
      }
      c = c.next;
    }

    return i;
  }
}
