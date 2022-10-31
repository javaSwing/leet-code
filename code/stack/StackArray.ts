/**
 * Stack 数据结构（数组实现版本）
 * 后进先出（LIFO）
 */
export default class StackArray<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  push(element: T) {
    this.items.push(element);
  }

  /**
   * return ths stack first element
   */
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  pop() {
    const v = this.items.pop();
    return v ? v : null;
  }

  toString(callBack?: (v: T) => string) {
    const formateArr = callBack ? this.items.map(callBack) : this.items;
    return formateArr.reverse().join(",");
  }

  toArray() {
    return this.items.reverse();
  }
}
