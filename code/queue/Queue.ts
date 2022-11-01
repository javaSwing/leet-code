/**
 * 队列数据结构
 * FIFO
 */
export default class Queue<T> {
  items: Record<number, T>;
  count: number;
  lowestCount: number;

  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  enqueue(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    let target = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return target;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  toString(callBack?: (v: T) => string) {
    const formateArr = [];
    for (let index = 0; index < this.count; index++) {
      const element = this.items[index];
      formateArr.push(callBack ? callBack(element) : element);
    }
    return formateArr.join(",");
  }
}
