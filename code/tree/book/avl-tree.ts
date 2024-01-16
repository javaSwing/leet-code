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

  /**
   * LL(左-左)：向右的单旋转
   * @param node
   * @description 左左即：一个二叉树，从根节点来看：左侧的左节点的左节点导致的整个树失去平衡
   *       b                           a
   *      / \                         / \
   *     a   e -> rotationLL(b) ->   c   b
   *    / \                             / \
   *   c   d                           d   e
   *
   *  说明：结合上面来说明，对于二叉树的旋转主要是围绕失去平衡的根节点（b节点）来进行旋转的。具体操作如下：
   *  抓住根节点的左节点（a）,让其成为新的根节点。然后把a的右节点（d）向右进行旋转，让其在b的左侧节点上。
   *  从而形成一棵新的树
   */
  rotationLL(node: TreeNode<T>) {
    if (node.left == null) return;
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  /**
   * RR(右右)：向左旋转
   * @param node
   * @description 右右：向左旋转
   *     k                         n
   *    / \                       / \
   *   m   n  rotationRR(k) ->   k   z
   *      / \                   / \
   *     q   z                 m   q
   *
   * 说明：这里的旋转相对于LL刚好是完全相反的两个存在，所有操作与LL相反即可
   */
  rotationRR(node: TreeNode<T>) {
    if (node.right == null) return;
    const tmp = node.right;
    node.left = tmp.left;
    tmp.left = node;
    return tmp;
  }
}
