/**
 * 100. 相同的树
 * https://leetcode.cn/problems/same-tree/solution/xiang-tong-de-shu-by-leetcode-solution/
 *
 * 看到题解里说用：广度优化，深度优化。暂时还没有看到这一块。尴尬
 * 目前这一题是通过题解扫一眼，别人递归答案。自己分析出来的。
 */

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

/**
 * 递归写法
 * @param p
 * @param q
 * @returns
 * 一般树的解题方法中都有递归的方法，根据从书上学习到的内容来看
 * 递归的核心就是找到递归的终结点条件。本题中的条件为：1. 对于相同空且为null的处理  2. 其它不相等的情况
 * 正常有值的情况，继续进行递归放入栈中，出栈的条件是达不到不等或者执行到最后两都为空的时候
 * 然后依次进行出栈
 * 时间复杂：O(min(m,n))  m和n分别为两个树的长度
 * 空间复杂：O(min(m,n))
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
