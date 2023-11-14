import { LinkedNode } from "./LinkedNode";

export interface LinkedListInterface<T> {
  /**
   * 添加一个节点
   * @param element
   * @returns
   */
  push: (element: T) => void;

  /**
   * 向特定位置插入一个元素
   * @param element
   * @param position
   * @returns
   */
  insert: (element: T, position: number) => boolean;

  /**
   * 获取指定位置的元素，无返回undefined
   * @param index
   * @returns
   */
  getElementAt: (index: number) => LinkedNode<T> | undefined;

  /**
   * 从链表中移除一个元素
   * @param element
   * @returns
   */
  remove: (element: T) => void;

  /**
   * 返回元素在链表中的索引
   * @param element
   * @returns
   */
  indexOf: (element: T) => number;

  /**
   * 从链表指定索引中移除一个元素
   * @param index
   * @returns
   */
  removeAt: (index: number) => T | undefined;

  isEmpty: () => boolean;

  size: () => number;

  toString: () => string;
}
