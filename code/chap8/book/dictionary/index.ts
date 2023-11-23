import { defaultToString } from '../../../utils';
import ValuePair from './value-pair';

/**
 * 字典数据结构
 *
 * @description
 *
 * 字典数据结构的存储方式为[键，值]的形式，其中的键可以是任意数据类型。字典也称为：映射、符号表、关联数组
 * 集合采用的是[值，值]的存储方式
 *
 * 注：该数据结构在ES6版本的Map是一样的
 */
export default class Dictionary<K, V> {
  private table: { [key: string]: ValuePair<K, V> };
  private toStrFn: (v: any) => any;

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hasKey(k: K) {
    return this.table[this.toStrFn(k)] != null;
  }

  set(k: K, v: V) {
    if (k !== null && v !== null) {
      const strK = this.toStrFn(k);
      this.table[strK] = new ValuePair(k, v);
      return true;
    }
    return false;
  }

  remove(k: K) {
    if (this.hasKey(k)) {
      delete this.table[this.toStrFn(k)];
      return true;
    }
    return false;
  }

  get(k: K) {
    if (this.hasKey(k)) {
      const v = this.table[this.toStrFn(k)];
      return v.value;
    }
    return undefined;
  }

  keyValues() {
    return Object.values(this.table);
  }

  keys() {
    return this.keyValues().map((e) => e.key);
  }

  values() {
    return this.keyValues().map((e) => e.value);
  }

  forEach(cb: (k: K, v: V) => any) {
    const vp = this.keyValues;

    for (let i = 0; i < vp.length; i++) {
      const r = cb(vp[i].key, vp[i].value);
      if (r === false) break;
    }
  }

  size() {
    return Object.keys(this.table).length;
  }

  clear() {
    this.table = {};
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}
