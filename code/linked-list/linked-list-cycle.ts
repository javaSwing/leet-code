import { ListNode } from "./LinkedList";

/**
 * 141. 环形链表
 * @see https://leetcode.cn/problems/linked-list-cycle/
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode = head;
  let fast: ListNode = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
