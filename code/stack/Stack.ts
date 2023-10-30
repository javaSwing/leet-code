
// 使用ES6中的Symbol来进行模拟Stack的私有属性，保证属性K的唯一性
// 可以使用 WeakMap 来完全模拟 Stack 后进先出的特性
const _items = Symbol("stackItem");
export default class Stack<T> {
  items: Record<number, T>;
  count: number;

  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.count - 1];
  }

  pop() {
    if (this.isEmpty()) return null;
    this.count--;
    const target = this.items[this.count];
    delete this.items[this.count];
    return target;
  }

  isEmpty() {
    return this.count === 0;
  }

  toString(callBack?: (v: T) => T) {
    const formateArr:T[] = [];
    for (let index = 0; index < this.count; index++) {
      const element = this.items[index];
      const t = callBack ? callBack(element) : element;
      formateArr.push(t);
    }
    return formateArr.reverse().join(',');
  }

  toArray() {
    if (this.isEmpty()) return null;

    const formateArr: T[] = [];
    for (let index = this.count - 1; index >= 0; index--) {
      const element = this.items[index];
      formateArr.push(element);
    }

    return formateArr;
  }
}
