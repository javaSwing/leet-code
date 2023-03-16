/**
 * 最小堆的实现
 */

import { CompareType, COMPARE_ENUM, defaultCompare } from "./util";

export class MiniHeap<T extends number> {
  compareFun: CompareType;
  heap: T[];

  constructor(compareFn = defaultCompare) {
    this.compareFun = compareFn;
    // 二叉堆用数组进行表示
    this.heap = [];
  }

  /**
   * 插入值
   * @param value
   */
  public insert(value: T): boolean {
    if (value !== null) {
      // 先插入值
      this.heap.push(value);
      //   辅助判断方法，用于把插入的新值与父节点进行比较，直到放到插入的值比父节点小为止
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  private siftUp(index: number) {
    let parentIndex = this.getParentIndex(index);

    while (
      index > 0 &&
      this.compareFun(this.heap[index], this.heap[parentIndex]) ===
        COMPARE_ENUM.LESS_THAN
    ) {
      this.swap(this.heap, parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  /**
   * 导出堆中的最小值
   */
  public extract() {
    if (this.isEmpty()) return undefined;
    if (this.size() === 1) return this.heap.shift();
    // 移除数组中的最小值
    const removeValue = this.heap[0];
    // 然后把最后一位的值放到头上
    this.heap.unshift(this.heap.pop());
    // 重新排序数组
    this.siftDown(0);

    return removeValue;
  }

  public siftDown(index: number) {
    let element = index;
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);
    const size = this.size();
    // 先比较左的是否比根节点小
    if (
      leftIndex < size &&
      this.compareFun(this.heap[element], this.heap[leftIndex]) ===
        COMPARE_ENUM.BIGGER_THAN
    ) {
      // 调整当前索引为小值的
      element = leftIndex;
    }

    // 如果上面的if执行了，就是比较左子节点和右子节点谁dd
    if (
      rightIndex < size &&
      this.compareFun(this.heap[element], this.heap[rightIndex]) ===
        COMPARE_ENUM.BIGGER_THAN
    ) {
      // 调整当前索引
      element = rightIndex;
    }

    if (index !== element) {
      this.swap(this.heap, index, element);
      this.siftDown(element);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  /**
   * 获取最小值
   * @returns
   */
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  /**
   * 使用ES6的解构，进行数组位置的互换
   * @param arr
   * @param a
   * @param b
   * 题外：在这本书中说目前的有个bug是, 解构操作比正常的操作更耗时，目前这个bug依然是open状态
   * @link https://bugzilla.mozilla.org/show_bug.cgi?id=1177319。
   * @test https://bug1177319.bmoattachments.org/attachment.cgi?id=8626475
   * 在目前版本的chrome测试下好像依然这样
   */
  private swap(arr: T[], a: number, b: number) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }

  private getLeftIndex(index: number) {
    return 2 * index + 1;
  }

  private getRightIndex(index: number) {
    return 2 * index + 2;
  }

  private getParentIndex(index: number) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }
}
