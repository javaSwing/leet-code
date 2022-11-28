/**
 * 225. 用队列实现栈
 */
class MyStack {
  private arr: number[];
  constructor() {
    this.arr = [];
  }

  push(x: number): void {
    this.arr.push(x);
  }

  pop(): number {
    return this.arr.pop();
  }

  top(): number {
    if (this.empty()) return;
    return this.arr[this.arr.length - 1];
  }

  empty(): boolean {
    return this.arr.length === 0;
  }
}
