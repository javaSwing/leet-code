import LinkedList from '../../../linked-list/book/linked-list';
import { defaultToString } from '../../../utils';
import ValuePair from '../../../utils/value-pair';

/**
 * 由于 hash table，在实现时并不能规避HasCode重复的问题。所以有就会相同的HasCode但是值并不一样的情况
 *
 * 该类代码用于演示使用分离链接法来处理HashCode重复的情况处理
 *
 * 原理即为：使用链表来存储HashTable的值
 */
export default class HashTableSeParateChaining<K, V> {
  protected table: Record<string, LinkedList<ValuePair<K, V>>>;

  private toStrFn: (v: any) => string;

  constructor(toStr = defaultToString) {
    this.toStrFn = toStr;
    this.table = {};
  }

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

  public hasCode(k: K) {
    return this.loseloseHashCode(k);
  }

  public put(k: K, v: V) {
    if (k != null && v != null) {
      const ks = this.hasCode(k);
      if (!this.table[ks]) {
        this.table[ks] = new LinkedList<ValuePair<K, V>>();
      }
      this.table[ks].push(new ValuePair(k, v));
      return true;
    }
    return false;
  }

  public get(k: K) {
    const ks = this.hasCode(k);
    const linkedList = this.table[ks];
    if (linkedList !== null && !linkedList.isEmpty()) {
      let c = linkedList.getHead();
      while (c != null) {
        if (c.val.key === k) {
          return c.val.value;
        }
        c = c.next;
      }
    }
    return undefined;
  }

  public remove(k: K) {
    const ks = this.hasCode(k);
    const linkedList = this.table[ks];

    if (linkedList !== null && !linkedList.isEmpty()) {
      let c = linkedList.getHead();
      while (c !== undefined && c.next !== null) {
        if (c?.val.key === k) {
          linkedList.remove(c.val);
          if (linkedList.isEmpty()) {
            delete this.table[ks];
          }
        }
        c = c?.next;
      }
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
