export default class TreeNode<P = number> {
  key: P;
  left?: TreeNode<P> | null;
  right?: TreeNode<P> | null;

  constructor(key: P) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
