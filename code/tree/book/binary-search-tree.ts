import TreeNode from './treeNode';
import { type CompareType, COMPARE_ENUM, defaultCompare } from './util';

type CallBackType = (key?: unknown) => void;

export default class BinarySearchTree<T> {
  compareFn: CompareType;
  root: TreeNode<T>;

  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key: T) {
    if (this.root == null) {
      this.root = new TreeNode<T>(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  /**
   * 辅助插入方法
   * @param node
   * @param key
   */
  insertNode(node: TreeNode<T>, key: T) {
    if (this.compareFn(node.key, key) === COMPARE_ENUM.LESS_THAN) {
      // 当前值小于传入的节点，则按左侧插入处理
      if (node.left === null) {
        node.left = new TreeNode(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      // 右侧节点处理
      if (node.right === null) {
        node.right = new TreeNode(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  /**
   * 中序遍历
   * @param callback
   * 中序遍历是从小到大的方式进行遍历
   */
  inOrderTraverse(callback?: CallBackType) {
    this.inOrderTraverseNode(this.root, callback);
  }

  private inOrderTraverseNode(node: TreeNode<T>, callback: CallBackType) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * 先序遍历： 优先于后代节点的顺序访问每个节点
   * @param callback
   * 1. 先访问节点本身
   * 2. 再访问节点的左节点
   * 3. 之后访问节点的右节点
   */
  prevOrderTraverse(callback: CallBackType) {
    this.prevOrderTraverseNode(this.root, callback);
  }

  private prevOrderTraverseNode(node: TreeNode<T>, callback: CallBackType) {
    if (node !== null) {
      callback(node.key);
      this.prevOrderTraverseNode(node.left, callback);
      this.prevOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * 后序遍历
   * @param callback
   * 后序遍历是先访问子代节点的，再访问节点本身
   */
  postOrderTraverse(callback: CallBackType) {
    this.postOrderTraverseNode(this.root, callback);
  }

  private postOrderTraverseNode(node: TreeNode<T>, callback: CallBackType) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  // 搜索部分

  /**
   * 搜索最小值
   * @param key
   * @returns
   *
   * 按照树结构的数据结构形式，左小，右大。找最小值也就是在树的最左侧查找
   */
  min() {
    return this.miniNode(this.root);
  }

  private miniNode(node: TreeNode<T>) {
    let current = node;
    // 如果这里只写 current !== null ,那么返回的node必须为null
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }

  max() {
    return this.maxNode(this.root);
  }
  private maxNode(node: TreeNode<T>) {
    let current = node;

    while (current !== null && current.right !== null) {
      current = current.right;
    }

    return current;
  }

  /**
   * 搜索一个特定的值
   * @param key
   * 搜索的功能拆解：
   * 1. 先比较当前节点的值与搜索特定的值的大小，进而决定向左或者向右进行搜索
   */
  search(key: T) {
    return this.searchNode(this.root, key);
  }

  private searchNode<T>(root: TreeNode<T>, key: T) {
    if (root == null) {
      return false;
    } else {
      if (this.compareFn(root.key, key) === COMPARE_ENUM.LESS_THAN) {
        return this.searchNode(root.left, key);
      } else if (this.compareFn(root.key, key) === COMPARE_ENUM.BIGGER_THAN) {
        return this.searchNode(root.right, key);
      } else {
        return true;
      }
    }
  }

  /**
   * 移除一个特定的节点
   * @param key
   */
  remove(key: T) {
    this.root = this.removeNode(this.root, key);
  }

  /**
   * 辅助方法最终返回的还是修改后的节点本身
   * @param node
   * @param key
   * @returns
   */
  removeNode(node: TreeNode<T>, key: T) {
    if (node === null) {
      return null;
    }
    if (this.compareFn(node.key, key) === COMPARE_ENUM.LESS_THAN) {
      // 比当前节点小
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(node.key, key) === COMPARE_ENUM.BIGGER_THAN) {
      // 比当前节点大
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // 查找到与当前值相等的节点
      if (node.left === null && node.right === null) {
        // 如果节点为最深层节点，即没有左节点也没有右节点
        node = null;
        return node;
      }

      if (node.left === null) {
        // 只有左节点为空
        node = node.right;
        return node;
      }

      if (node.right === null) {
        // 只有右节点为空
        node = node.left;
        return node;
      }

      // 一个正常的节点在，即有左节点也有右节点
      // 1. 先查找右侧最小的节点
      const aux = this.miniNode(node.right);
      // 把右侧最小的节点的值赋值给当前节点，即移除了当前的节点
      node.key = aux.key;
      // 从右侧中把最小的节点给移除了
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
}
