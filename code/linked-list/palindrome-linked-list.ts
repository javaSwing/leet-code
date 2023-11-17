/**
 * 234. 回文链表
 * @param head
 * @returns
 *
 * @link https://leetcode.cn/problems/palindrome-linked-list/description/
 *
 * 思路：使用快、慢指针
 * 1. 快指针一次移动两个
 * 2. 慢指针一次移动一个
 * 在快指针到链表尾部的时候，慢指针正好在中间，如果链表奇数，则需要slow再移动一次
 *
 * 循环中使用虚拟节点反转前半部分链表
 * 之后循环反转的链表与slow剩下的节点是否相等，即可判断是否一致
 */

const isPalindromeLinked = function (head) {
  let fast = head,
    slow = head;
  let dumy, q;
  while (fast && fast.next) {
    q = slow;
    slow = slow.next;
    fast = fast.next.next;
    q.next = dumy; // 反转slow指针的链表
    dumy = q;
  }

  if (fast) {
    // 奇数，fast.next不存在
    slow = slow.next;
  }

  while (dumy && slow) {
    if (dumy.val !== slow.val) {
      return false;
    }
    dumy = dumy.next;
    slow = slow.next;
  }

  return true;
};
