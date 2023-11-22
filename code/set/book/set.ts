import { type SetType } from './type';

/**
 * 集合数据结构
 * 特性：集合中的数据结构都是无序且唯一
 *
 * 该数据结构在ES6中已经存在
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
 * 集合方法：交、并、差、子
 */
export default class Set<T> implements SetType<T> {
  items: Record<any, T>;

  constructor() {
    // 使用对象来模拟数据结构的唯一性
    this.items = {};
  }

  delete(e: T) {
    if (this.has(e)) {
      delete this.items[e];
      return true;
    }
    return false;
  }
  has(e: T) {
    return Object.prototype.hasOwnProperty.call(this.items, e as any);
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.values(this.items);
  }

  add(e: T) {
    if (!this.has(e)) {
      this.items[`${e}`] = e;
      return true;
    }

    return false;
  }

  union(o: SetType<T>) {
    const res = new Set<T>();
    this.values().forEach((d) => res.add(d));
    o.values().forEach((e) => res.add(e));
    return res;
  }

  intersection(o: SetType<T>) {
    const res = new Set<T>();

    this.values().forEach((e) => {
      if (o.has(e)) {
        res.add(e);
      }
    });

    return res;
  }

  difference(o: SetType<T>) {
    const res = new Set<T>();
    this.values().forEach((e) => {
      if (!o.has(e)) {
        res.add(e);
      }
    });

    return res;
  }

  isSubsetOf(o: SetType<T>) {
    if (this.size() > o.size()) {
      return false;
    }

    return this.values().every((e) => o.has(e));
  }

  toString() {
    return this.values().join(',');
  }
}
