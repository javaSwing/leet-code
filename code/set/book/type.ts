export interface SetType<T> {
  /**
   * 添加一个元素到集合中
   * @param e
   * @returns
   */
  add: (e: T) => boolean;

  delete: (e: T) => boolean;

  /**
   * 是否包含该元素
   * @param e
   * @returns
   */
  has: (e: T) => boolean;

  /**
   * 清空集合
   * @returns
   */
  clear: () => void;

  /**
   * 返回集合长度
   * @returns
   */
  size: () => number;

  /**
   * 返回一个饱含集合元素的所有值的数组
   * @returns
   */
  values: () => Array<T>;

  /**
   * 求两个集合的并集
   * @returns
   */
  union: (o: SetType<T>) => SetType<T>;

  /**
   * 求两个集合的交集
   * @param o
   * @returns
   */
  intersection: (o: SetType<T>) => SetType<T>;

  /**
   * 差集
   * @param o
   * @returns
   */
  difference: (o: SetType<T>) => SetType<T>;

  /**
   * 是否为子集
   * @param o
   * @returns
   */
  isSubsetOf: (o: SetType<T>) => boolean;
}
