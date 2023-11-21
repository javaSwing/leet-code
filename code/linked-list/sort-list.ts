import { LinkedNode } from './book/linked-node';

/**
 * 148. 排序链表
 * @param {ListNode} head
 * @return {ListNode}
 *
 * @link https://leetcode.cn/problems/sort-list/description/
 *
 * 使用归并排序
 */
export const sortList = function (head: LinkedNode<number> | undefined) {
  return mergeList(head);
};

// 递归分割
function mergeList(head: LinkedNode<number> | undefined): LinkedNode<number> | undefined {
  // 边界
  if (!head || !head.next) {
    return head;
  }

  // 快慢指针分割链表
  let fast: undefined | LinkedNode<number> = head,
    slow = head,
    prevSlow = head;
  while (fast && fast.next && slow.next) {
    prevSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prevSlow.next = undefined;
  const l = head;
  const r = slow;

  return merge(mergeList(l), mergeList(r));
}
// 归并
function merge(l: LinkedNode<number> | undefined, r: LinkedNode<number> | undefined) {
  const dumy = new LinkedNode(-1);
  let c = dumy;
  while (l && r) {
    if (l.val <= r.val) {
      c.next = l;
      l = l.next;
    } else {
      c.next = r;
      r = r.next;
    }
    c = c.next;
  }

  if (l) {
    c.next = l;
  }

  if (r) {
    c.next = r;
  }

  return dumy.next;
}
