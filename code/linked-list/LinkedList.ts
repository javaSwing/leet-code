import { LinkedListNode } from "./LinkedListNote";

export class ListNode<T = any> {
  val: T;
  next: ListNode<T> | null;
  constructor(val: T, next: ListNode<T> = null) {
    this.val = val;
    this.next = next;
  }

  toString(callback?: (e: T) => void) {
    return callback ? callback(this.val) : `${this.val}`;
  }

  append(n: ListNode<T>) {
    this.next = n;
    return this;
  }
}

export default class LinkedList<T> {
  // 头节点
  head: LinkedListNode<T> | null;
  // 尾节点
  tail: LinkedListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * 按顺序添加值
   * @param val
   * @returns
   */
  append(val: T) {
    const newNode = new LinkedListNode(val);

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
  prepend(val: T) {
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
    const newNode = new LinkedListNode(val, this.head);
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
  insert(val: T, rawIndex: number) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    if (index === 0) {
      this.prepend(val);
    } else {
      const newNode = new LinkedListNode(val);

      let count = 1;
      let currentNode = this.head;

      while (currentNode) {
        if (count === index) break;
        currentNode = currentNode.next;
        count += 1;
      }

      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      } else {
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }

    return this;
  }

  delete(val: T) {
    if (!this.head) return null;
    let deleteNode: LinkedListNode<T> | null = null;

    let dummyNode = new LinkedListNode(null);
    dummyNode.next = this.head;

    let currentNode = dummyNode;

    while (currentNode.next) {
      if (currentNode.next.value === val) {
        deleteNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // 处理tail
    if (this.tail.value === val) {
      this.tail = currentNode;
    }

    this.head = dummyNode.next;

    return deleteNode;
  }

  deleteTail() {
    let deleteNode: LinkedListNode<T> | null = null;
    if (!this.head) return deleteNode;
    let dummyNode = new LinkedListNode(null);
    dummyNode.next = this.head;
    let currentNode = dummyNode;

    while (currentNode.next) {
      let next = currentNode.next;
      if (next && !next.next) {
        currentNode.next = currentNode.next.next;
        this.tail = currentNode;
        deleteNode = next;
      }
      currentNode = next;
    }

    this.head = dummyNode.next;
    if (!this.head) this.tail = null;

    return deleteNode;
  }

  deleteHead() {
    if (!this.head) return null;

    let deleteNode = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deleteNode;
  }

  find(target: { value?: T; callback?: (v: T) => boolean }) {
    if (!this.head) return null;
    let targetNode: LinkedListNode<T> = null;
    let currentNode = this.head;
    while (currentNode) {
      if (
        (target.value && currentNode.value === target.value) ||
        (target.callback && target.callback(currentNode.value))
      ) {
        targetNode = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }

    return targetNode;
  }

  fromArray(arr: T[]) {
    arr.forEach((a) => this.append(a));
    return this;
    // let currentNode = null;
    // for (let index = 0; index < arr.length; index++) {
    //   const element = arr[index];
    //   const newNode = new ListNode(element);
    //   if (!currentNode) {
    //     currentNode = newNode;
    //     this.head = currentNode;
    //   } else {
    //     currentNode.next = newNode;
    //     currentNode = newNode;
    //   }

    //   if (index === arr.length) {
    //     this.tail = newNode;
    //   }
    // }
    // return this;
  }

  reverse() {
    if (!this.head || !this.head.next) return this.head;
    let dummy: LinkedListNode<T> | null = null;
    let currentNode = this.head;
    while (currentNode) {
      let next = currentNode.next;
      currentNode.next = dummy;
      if (!dummy) {
        this.tail = currentNode;
      }
      dummy = currentNode;
      currentNode = next;
    }

    this.head = dummy;
    return dummy;
  }

  toArray() {
    const arr: LinkedListNode<T>[] = [];

    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode);
      currentNode = currentNode.next;
    }

    return arr;
  }

  toString(callback?: (e: T) => void) {
    return this.toArray()
      .map((e) => e.toString(callback))
      .toString();
  }
}
