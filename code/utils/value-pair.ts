export default class ValuePair<K, V> {
  value: V;
  key: K;
  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[${this.key}: ${this.value}]`;
  }
}
