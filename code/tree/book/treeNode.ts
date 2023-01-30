export default class TreeNode<T = unknown> {
  key: T;
  left: TreeNode<T>;
  right: TreeNode<T>;

  constructor(key: T) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
