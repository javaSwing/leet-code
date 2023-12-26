import { type QueueType } from './type';

/**
 * 队列的实现，
 * 使用js中的对象，来存储队列中的数据
 */
export default class Queue<T> implements QueueType<T> {
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

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  enqueue(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const front = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return front;
  }
  peek() {
    if (this.isEmpty()) return;
    const front = this.items[this.lowestCount];
    return front;
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
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
