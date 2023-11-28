/**
 * 705. 设计哈希集合
 *
 * @link https://leetcode.cn/problems/design-hashset/description/
 */
class MyHashSet {
  table;
  constructor() {
    this.table = {};
  }

  add(key: number): void {
    this.table[key] = key;
  }

  remove(key: number): void {
    if (this.contains(key)) {
      delete this.table[key];
    }
  }

  contains(key: number): boolean {
    return this.table[key] !== undefined;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
