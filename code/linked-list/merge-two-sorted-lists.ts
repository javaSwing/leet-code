import { ListNode } from "./LinkedList";

const l1 = [1, 2, 4];
const l2 = [1, 3, 4];

/**
 * 21.合并两个有序链表
 * @see https://leetcode.cn/problems/merge-two-sorted-lists/
 * @param l1
 * @param l2
 * @description 递归写法, 时间和空间评估
 * - 时间复杂度为: O(m+n)
 * - 空间复杂度为: O(m+n)
 */
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null) {
  if (!l2) return l1;
  if (!l1) return l2;
  if (!l1 && !l2) return null;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
