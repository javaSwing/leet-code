/**
 * 104. 二叉树的最大深度
 * @link https://leetcode.cn/problems/maximum-depth-of-binary-tree/
 */

/**
 * 这个题目我在书里看到过，有点印象，计算一个节点的高度
 * 其方法就是递归：
 * 1. 递归到底的条件是当一个节点为null
 * 那么如果返回当前的位数呢？这样想一下：
 * 如果到null（即为最深的节点位置）里返回为0
 * 上一级的节点为最null的父级节点为最深度 + 1,这样递归返回到最根的root时正好为null节点到root的深度
 * 注意有一点：需要比较左右节点的最大值这一个点才可以计算最深
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(height) height为节点最深的节点高度
 */
function maxDepth(root: TreeNode | null): number {
  return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
