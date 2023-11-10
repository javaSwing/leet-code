export interface QueueType<T> {
  /**
   * 向队列添加一个或者多个新的项
   * @param element
   */
  enqueue: (element: T) => void;

  /**
   * 移除队列的第一项，并返回被移除的元素
   */
  dequeue: () => T | undefined;

  /**
   * 返回队列中的第一个元素
   * 并不会改变队列的数据
   */
  peek: () => T | undefined;

  /**
   * 检测队列是否为空
   */
  isEmpty: () => boolean;

  /**
   * 返回当前队列的长度
   */
  size: () => number;

  /**
   * 清空队列
   * @returns
   */
  clear: () => void;
}

export interface DequeType<T> {
  /**
   * 在双端队列的前面添加新元素
   * @param element
   * @returns
   */
  addFront: (element: T) => void;

  /**
   * 在双端队列的队尾添加新元素
   * @param e
   * @returns
   */
  addBack: (e: T) => void;

  /**
   * 在双端队列的前端移除第一个元素
   * @returns
   */
  removeFront: () => void;

  /**
   * 在双端队列的后端添加第一个元素
   * @returns
   */
  removeBack: () => void;

  /**
   * 返回队列前端中的第一个元素
   * @returns
   */
  peekFront: () => T | undefined;

  /**
   * 返回队列队尾的第一个元素
   * @returns
   */
  peekBack: () => T | undefined;

  /**
   * 检测队列是否为空
   */
  isEmpty: () => boolean;

  /**
   * 返回当前队列的长度
   */
  size: () => number;

  /**
   * 清空队列
   * @returns
   */
  clear: () => void;

  /**
   * 打印方法
   * @param callBack
   * @returns
   */
  toString: (callBack?: (T) => string) => void;
}
