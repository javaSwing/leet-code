import { defaultCompare } from '../../heap/book/util';
import BinarySearchTree from './binary-search-tree';
import type TreeNode from './tree-node';

const BalanceFactor = {
  UNBALANCED_RIGHT: 1, // 右子树不平衡
  SLIGHTLY_UNBALANCED_RIGHT: 2, // 右子树不平衡
  BALANCED: 3, // 平衡
  SLIGHTLY_UNBALANCED_LEFT: 4, // 左子树不平衡
  UNBALANCED_LEFT: 5, // 左子树不平衡
};

/**
 * 自平衡二叉树
 * 概念：任意一个节点（不论深度）的左子树和右子树高度最多相差1
 */
export class AVLTree<T = number> extends BinarySearchTree<T> {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  /**
   * get node height
   * @param node
   * @returns
   */
  private getNodeHeight(node: TreeNode<T> | null) {
    if (node === null) {
      return -1;
    } else {
      return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }
  }

  /**
   * 获取节点的平衡状态
   * @param node
   * @returns
   */
  private getBalanceFactor(node: TreeNode<T>) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }
}
