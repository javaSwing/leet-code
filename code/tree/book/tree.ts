import TreeNode from "./treeNode";
import { CompareType, COMPARE_ENUM, defaultCompare } from "./util";

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
      this.root = new TreeNode(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  /**
   * 辅助插入方法
   * @param node
   * @param key
   */
  private insertNode(node: TreeNode, key: T) {
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
}
