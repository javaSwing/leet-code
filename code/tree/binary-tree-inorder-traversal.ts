// 94 题
// @see https://leetcode.cn/problems/binary-tree-inorder-traversal/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 后面应该还有stack的方法

/**
 * 递归方法
 * 时间复杂度为 O(n)
 * 空间复杂度为 O(n)
 */
function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    const inorderNode = (node: TreeNode) => {
        if(!node) return;
        inorderNode(node.left);
        res.push(node)
        inorderNode(node.right);
    }
    inorderNode(root)
    return res;
};