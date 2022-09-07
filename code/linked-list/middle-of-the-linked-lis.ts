import { ListNode } from "./LinkedList";

/**
 * 876. 链表的中间结点
 * @see https://leetcode.cn/problems/middle-of-the-linked-list/
 */

function middleNode(head: ListNode | null) {
  if (!head) return head;
  let slow = head;
  let fast = head;
  // 不能使用 fast.next和fast.next.next
  // 原因是因为：如果有两个中间结点，则返回第二个中间结点。
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
