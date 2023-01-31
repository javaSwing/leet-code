export default class TreeNode<P> {
  key: P;
  left: TreeNode<P>;
  right: TreeNode<P>;

  constructor(key: P) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
