/**
 * 225. 用队列实现栈
 *
 * @link https://leetcode.cn/problems/implement-stack-using-queues/description/
 */
class MyStack {
  private arr: number[];
  constructor() {
    this.arr = [];
  }

  push(x: number): void {
    this.arr.push(x);
  }

  pop(): number | undefined {
    return this.arr.pop();
  }

  top(): number | undefined {
    if (this.empty()) return;
    return this.arr[this.arr.length - 1];
  }

  empty(): boolean {
    return this.arr.length === 0;
  }
}
