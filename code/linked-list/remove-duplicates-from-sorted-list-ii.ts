import { LinkedNode } from './book/linked-node';

/**
 * 82. 删除排序链表中的重复元素 II
 * @param head
 * @returns
 * @link https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * 官方方法
 */
function deleteDuplicates(head: LinkedNode<number> | undefined): LinkedNode<number> | undefined {
  if (!head) return head;
  const dummy = new LinkedNode<number>(-1000, head);
  let c = dummy;

  while (c.next && c.next.next) {
    if (c.next.val === c.next.next.val) {
      const x = c.next.val;
      while (c.next && c.next.val === x) {
        c.next = c.next.next;
      }
    } else {
      c = c.next;
    }
  }

  return dummy.next;
}
