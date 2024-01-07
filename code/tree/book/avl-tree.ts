import BinarySearchTree from './binary-search-tree';
import TreeNode from './tree-node';
import { COMPARE_ENUM, defaultCompare } from './util';

/**
 * avl 树
 * https://sothx.com/2021/04/06/Adelson-Velskii-Landi-Tree/
 */
export default class AVLTree<T> extends BinarySearchTree<T> {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  BalanceFactor = {
    UNBALANCED_RIGHT: 1, // 右子树不平衡
    SLIGHTLY_UNBALANCED_RIGHT: 2, // 右子树不平衡
    BALANCED: 3, // 平衡
    SLIGHTLY_UNBALANCED_LEFT: 4, // 左子树不平衡
    UNBALANCED_LEFT: 5, // 左子树不平衡
  };

  // 获取节点的高度
  getNodeHeight(node: TreeNode<T>) {
    if (node === null) return -1;
    // 取节点的左侧高度、右侧高度的最大值 + 1 （1为自身节点高度）
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  /**
   * 如何判断一个树是否过到平衡状态
   * 通过左边子树的高度与右边子树高度之差进行在 -1 1 0 之间即为平衡
   */
  isBalance(node: TreeNode<T>) {
    const difference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

    switch (difference) {
      case -2:
        return this.BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return this.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return this.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return this.BalanceFactor.UNBALANCED_LEFT;
      default:
        return this.BalanceFactor.BALANCED;
    }
  }

  /**
   * 右旋转单旋转
   * @param node
   * 服务于：左侧单个节点大于右侧节点的情况
   * Left left case: rotate right
   *       b                           a
   *      / \                         / \
   *     a   e -> rotationLL(b) ->   c   b
   *    / \                             / \
   *   c   d                           d   e
   *
   */
  rotationLL(node: TreeNode<T>) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  /**
   * 向左左旋
   * Right right: rotate left
   * @param node
   * 适用于：右侧节点大于左侧节点的情况
   *     a                              b
   *    / \                            / \
   *   c   b   -> rotationRR(a) ->    a   e
   *      / \                        / \
   *     d   e                      c   d
   */
  rotateRR(node: TreeNode<T>) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  /**
   * L R 向右的双旋转
   * @param node
   * 这种情况出现于左侧子节点的高度大于右侧子节点的高度，并且左侧子节点右侧较重
   */
  rotationLR(node: TreeNode<T>) {
    node.left = this.rotateRR(node.left);
    return this.rotationLL(node);
  }

  /**
   * R L 向左的双旋转
   * @param node
   * 这种情况与上面的情况相反，是右的节点的高度大于左侧且，右侧左节点比左侧重
   */
  rotationRL(node: TreeNode<T>) {
    node.right = this.rotationLL(node.right);
    return this.rotateRR(node);
  }

  insert(key: T) {
    this.insertNode(this.root, key);
  }

  insertNode(node: TreeNode<T>, key: T) {
    if (node === null) {
      return new TreeNode<T>(key);
    } else if (this.compareFn(node.left, key) === COMPARE_ENUM.LESS_THAN) {
      this.insertNode(node.left, key);
    } else if (this.compareFn(node.right, key) === COMPARE_ENUM.BIGGER_THAN) {
      this.insertNode(node.right, key);
    } else {
      return node;
    }

    // 检测树的平衡处理
    const balanceFactor = this.isBalance(node);

    // 如果是向左侧插入值不平衡了
    if (balanceFactor === this.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
      if (this.compareFn(node.left, key) === COMPARE_ENUM.LESS_THAN) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }

    if (balanceFactor === this.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
      if (this.compareFn(node.left, key) === COMPARE_ENUM.BIGGER_THAN) {
        node = this.rotateRR(node);
      } else {
        return this.rotationRL(node);
      }
    }

    return node;
  }

  /**
   *  移除节点
   * @param node
   * @param key
   * @returns
   * @todo 不是很明白，需要分析
   */
  removeNode(node: TreeNode<T>, key: T) {
    node = super.removeNode(node, key);
    if (node === null) {
      return node;
    }

    const difference = this.isBalance(node);

    if (difference === this.BalanceFactor.UNBALANCED_LEFT) {
      // 从左侧移除节点不平衡
      if (
        this.isBalance(node.left) === this.BalanceFactor.BALANCED ||
        this.isBalance(node.left) === this.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationLL(node);
      }

      if (this.isBalance(node.left) === this.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node);
      }
    }

    if (difference === this.BalanceFactor.UNBALANCED_RIGHT) {
      if (
        this.isBalance(node.right) === this.BalanceFactor.BALANCED ||
        this.isBalance(node.right) === this.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotateRR(node);
      }

      if (this.isBalance(node.left) === this.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node);
      }
    }

    return node;
  }
}
