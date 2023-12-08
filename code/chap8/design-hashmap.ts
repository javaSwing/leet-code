/**
 * 706. 设计哈希映射
 *
 * @link https://leetcode.cn/problems/design-hashmap/description/
 */
class MyHashMap {
  table;
  constructor() {
    this.table = {};
  }

  put(key: number, value: number): void {
    this.table[key] = value;
  }

  get(key: number): number {
    const v = this.table[key] !== undefined ? this.table[key] : -1;
    return v;
  }

  remove(key: number): void {
    const v = this.table[key];
    if (v != undefined) {
      delete this.table[key];
    }
  }
}
