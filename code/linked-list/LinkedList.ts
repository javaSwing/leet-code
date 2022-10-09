export class ListNode {
  val: unknown;
  next: ListNode | null;
  constructor(val: unknown = 0, next: ListNode = null) {
    this.val = val;
    this.next = next;
  }

  toString(callback?: (e: unknown) => void) {
    return callback ? callback(this.val) : `${this.val}`;
  }

  append(n: ListNode) {
    this.next = n;
    return this;
  }
}

export default class LinkedList {
  // 头节点
  head: ListNode | null;
  // 尾节点
  tail: ListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * 按顺序添加值
   * @param val
   * @returns
   */
  append(val: unknown) {
    const newNode = new ListNode(val);

    if (!this.head) {
      // first append
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  /**
   * 将值添加到链表的开头
   * @param val
   * @returns
   */
  prepend(val: unknown) {
    // const newNode = new ListNode(val);
    // if (!this.head) {
    //   this.head = newNode;
    //   this.tail = newNode;
    // }

    // const oldHead = this.head;
    // this.head = newNode;
    // this.head.next = oldHead;
    // return this;

    // 官方写法
    const newNode = new ListNode(val, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * 在特定索引处添加值
   * @param val
   * @param index
   */
  insert(val: unknown, index: number) {}

  toArray() {
    const arr: ListNode[] = [];

    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode);
      currentNode = currentNode.next;
    }

    return arr;
  }

  toString(callback?: (e: unknown) => void) {
    return this.toArray()
      .map((e) => e.toString(callback))
      .toString();
  }
}
