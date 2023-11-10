import { DequeType } from './type';

/**
 * 双端队列
 * 是一种允许我们同时从前端和后端添加和移除元素的特殊队列。可以理解为stack和queue和结合体
 */
export default class Deque<T> implements DequeType<T> {
  items: Record<number, T>;
  /** 控制队列的大小 */
  count: number;
  /** 队列第一个元素的位置 */
  lowestCount: number;

  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  addFront(element: T) {
    if (this.isEmpty()) {
      this.items[this.lowestCount] = element;
      this.count++;
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let index = this.count; index > 0; index--) {
        this.items[index] = this.items[index - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[this.lowestCount] = element;
    }
  }

  addBack(e: T) {
    this.items[this.count] = e;
    this.count++;
  }
  removeFront() {
    if(this.isEmpty()) return;
    delete this.items[this.lowestCount];
    this.lowestCount++;
  }
  removeBack() {
    if(this.isEmpty()) return;
    delete this.items[this.count];
    this.count--;
  }
  peekFront() {
    if(this.isEmpty()) return;
    return this.items[this.lowestCount];

  }
  peekBack() {
    if(this.isEmpty()) return;
    return this.items[this.count];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString(callback?: (e: T) => string) {
    let result = '';
    if (!this.isEmpty()) {
      for (let i = this.lowestCount; i < this.count; i++) {
        const e = this.items[i];
        if (typeof e !== undefined) {
          result = `${result ? result + ',' : ''}${callback ? callback(e) : e}`;
        }
      }
    }

    return result;
  }
}
