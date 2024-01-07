import { type DefaultCompare, defaultCompare } from '../../utils';
import TreeNode from './tree-node';

export default class BinarySearchTree2<T = number> {
  compareFn: DefaultCompare;
  root: null | TreeNode<T>;
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key: T) {
    const node = new TreeNode<T>(key);
    if (this.root == null) {
      this.root = node;
    } else {
    }
  }
}
