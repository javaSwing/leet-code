import { type DefaultCompare, defaultCompare, Compare } from '../../utils';
import TreeNode from './tree-node';

const defaultCallback = (k: any) => console.log(k);

export default class BinarySearchTree2<T = number> {
  compareFn: DefaultCompare;
  root: null | TreeNode<T>;
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
   */
  inOrderTraverse(callback = defaultCallback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node: TreeNode<T> | null | undefined, callback: (k: any) => void) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
}
