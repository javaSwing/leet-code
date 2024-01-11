import { type DefaultCompare, defaultCompare, Compare } from '../../utils';
import TreeNode from './tree-node';

const defaultCallback = (k: any) => console.log(k);

export default class BinarySearchTree<T = number> {
  compareFn: DefaultCompare;
  public root: null | TreeNode<T>;
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

  insertNode<T>(root: TreeNode<T>, key: T) {
    if (this.compareFn(key, root.key) === Compare.LESS_THAN) {
      if (root.left) {
        this.insertNode(root.left, key);
      } else {
        root.left = new TreeNode<T>(key);
      }
    } else {
      if (root.right) {
        this.insertNode(root.right, key);
      } else {
        root.right = new TreeNode<T>(key);
      }
    }
  }

  /**
   * 中序遍历
   * @param callback
   * 也就是从小到大的顺序遍历整个树
   */
  inOrderTraverse(callback = defaultCallback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  private inOrderTraverseNode(node: TreeNode<T> | null, callback: (k: any) => void) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * 先序遍历
   * @param callback
   *
   * 按照访问二叉树的顺序遍历
   */
  preOrderTraverse(callback = defaultCallback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  private preOrderTraverseNode(root: TreeNode<T> | null, callback: (k: any) => void) {
    if (root != null) {
      callback(root.key);
      this.preOrderTraverseNode(root.left, callback);
      this.preOrderTraverseNode(root.right, callback);
    }
  }

  /**
   * 后序遍历
   * @param callback
   */
  postOrderTraverse(callback = defaultCallback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  private postOrderTraverseNode(root: TreeNode<T> | null, callback: (k: any) => void) {
    if (root != null) {
      this.postOrderTraverseNode(root.left, callback);
      this.postOrderTraverseNode(root.right, callback);
      callback(root.key);
    }
  }

  min() {
    return this.minNode(this.root);
  }

  private minNode(node: TreeNode<T> | null): TreeNode<T> | null {
    if (node != null && node.left != null) {
      return this.minNode(node.left);
    } else {
      return node;
    }
  }

  max() {
    return this.maxNode(this.root);
  }

  private maxNode(node: TreeNode<T> | null): TreeNode<T> | null {
    if (node != null && node.right != null) {
      return this.maxNode(node.right);
    } else {
      return node;
    }
  }

  search(key: T) {
    return this.searchNode(this.root, key);
  }

  private searchNode<T>(node: TreeNode<T> | null, key: T): boolean {
    if (node == null) return false;
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  remove(key: T) {
    this.root = this.removeNode(this.root, key);
  }

  private removeNode(node: TreeNode<T> | null, key: T): TreeNode<T> | null {
    if (node === null) return null;

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // 相等的情况
      if (node.left == null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }

      const aux = this.minNode(node.right);
      if (aux != null) {
        node.key = aux.key;
        node.right = this.removeNode(node.right, aux.key);
      }
      return node;
    }
  }
}
