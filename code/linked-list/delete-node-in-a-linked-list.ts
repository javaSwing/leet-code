import { type LinkedNode } from './book/linked-node';

/**
 * 237. 删除链表中的节点
 * @see https://leetcode.cn/problems/delete-node-in-a-linked-list/
 * 此题可以标记为阅读理解题，真是TM变态
 *
 * 总结下来就是：
 * 1. 我变成我儿子
 * 2. 我儿子变成我孙子
 * 3. 然后我就没有了
 */

function deleteNode(root: LinkedNode<number> | null): void {
  if (root && root.next) {
    root.val = root.next.val;
    root.next = root.next.next;
  }
}
