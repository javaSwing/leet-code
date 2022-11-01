/**
 * 双端队列
 * 是一种允许我们同时从前端和后端添加和移除元素的特殊队列。可以理解为stack和queue和结合体
 */
export default class Deque<T> {
  lowestCount: number;
  count: number;
  items: Record<number, T>;

  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  addBack(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.items[this.lowestCount] = element;
      this.lowestCount--;
    } else {
      for (let index = this.count; index > 0; index--) {
        this.items[index] = this.items[index - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  removeFront() {
    if (this.isEmpty()) return null;
    let d = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return d;
  }

  removeBack() {
    if (this.isEmpty()) return null;
    let d = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return d;
  }

  peekFront() {
    if (this.isEmpty()) return null;
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) return null;
    return this.items[this.count];
  }

  toString(callBack?: (v: T) => string) {
    const formateArr = [];
    for (let index = this.lowestCount; index < this.count; index++) {
      const element = this.items[index];
      formateArr.push(callBack ? callBack(element) : element);
    }
    return formateArr.join(",");
  }
}
