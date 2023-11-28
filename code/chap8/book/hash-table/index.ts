import { defaultToString } from '../../../utils';
import ValuePair from '../../../utils/value-pair';

/**
 * Hash Table 散列表
 *
 * 是根据值的关键码(key value)进行直接访问的数据结构。
 * 哈希表通过键(key)和映射函数Hash（key）计算出对应的值 Value。通过特定的关键码记录值的位置，从而加快访问速度
 */
export default class HashTable<K, V> {
  protected table: Record<string, ValuePair<K, V>>;

  private toStrFn: (v: any) => string;
  constructor(toStr = defaultToString) {
    this.toStrFn = toStr;
    this.table = {};
  }

  /**
   * Generates the hash code for the given key using the lose-lose hash function.
   * 除留余数法
   * @param {any} key - The key for which to generate the hash code.
   * @return {number} The generated hash code.
   *
   */
  private loseloseHashCode(key: K) {
    if (typeof key === 'number') {
      return key;
    }

    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let index = 0; index < tableKey.length; index++) {
      hash += tableKey.charCodeAt(index);
    }

    // %37 用于减小整体 hash 值的大小
    return hash % 37;
  }

  public put(k: K, v: V) {
    if (k != null && v != null) {
      const p = this.loseloseHashCode(k);
      this.table[p] = new ValuePair(k, v);

      return true;
    }
    return false;
  }

  public hasCode(k: K) {
    return this.loseloseHashCode(k);
  }

  public get(k: K) {
    if (k != null) {
      const ks = this.loseloseHashCode(k);
      const vp = this.table[ks];
      return vp !== undefined ? vp.value : vp;
    }
    return undefined;
  }

  public remove(k: K) {
    const ks = this.loseloseHashCode(k);
    const vp = this.table[ks];
    if (vp !== null) {
      delete this.table[ks];
      return true;
    }

    return false;
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    const keys = Object.keys(this.table);
    let objString = `${keys[0]} => ${this.table[keys[0]].toString()}`;

    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},${keys[i]} => ${this.table[keys[i]].toString()}`;
    }

    return objString;
  }
}
