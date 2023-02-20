/**
 * 101. 对称二叉树
 */

/**
 * 递归解法
 * 按照题意理解：可以拆解成两个部分
 * 1. 当为root时，只用判断左右两个节点是否相同即可
 * 2. 左右两个节点包含有子树时，即可变为判断两个节点是否相同的问题（即100题的处理方法）
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function isSymmetric(root: TreeNode | null): boolean {
  if (root == null) return true;
  return check(root.left, root.right);
}

function check(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;
  if (node1.val !== node2.val) return false;
  return check(node1.left, node2.right) && check(node1.right, node2.left);
}
