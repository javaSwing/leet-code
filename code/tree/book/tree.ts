import TreeNode from "./treeNode";
import { CompareType, COMPARE_ENUM, defaultCompare } from "./util";

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
}
