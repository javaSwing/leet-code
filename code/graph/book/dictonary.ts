// 2023-04-19 暂时代码copy 自
// @link https://github.com/XPoet/js-data-structures-and-algorithms/blob/master/src/Map/map.js

export default class Map<T extends any> {
  items: Record<string, T>;

  constructor() {
    this.items = {};
  }

  // has(key) 判断字典中是否存在某个 key
  has(key: string) {
    return this.items.hasOwnProperty(key);
  }

  // set(key, value) 在字典中添加键值对
  set(key: string, value: T) {
    this.items[key] = value;
  }

  // remove(key) 在字典中删除指定的 key
  remove(key:string) {
    // 如果集合不存在该 key，返回 false
    if (!this.has(key)) return false;
    delete this.items[key];
  }

  // get(key) 获取指定 key 的 value，如果没有，返回 undefined
  get(key:string) {
    return this.has(key) ? this.items[key] : undefined;
  }

  // 获取所有的 key
  keys() {
    return Object.keys(this.items);
  }

  // 获取所有的 value
  values() {
    return Object.values(this.items);
  }

  // size() 获取字典中的键值对个数
  size() {
    return this.keys().length;
  }

  // clear() 清空字典中所有的键值对
  clear() {
    this.items = {};
  }
}