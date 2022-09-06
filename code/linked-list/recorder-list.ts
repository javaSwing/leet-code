/**
 * 143. 重排链表
 * @see https://leetcode.cn/problems/reorder-list/
 * 此题的返回值为void,一定是修改原链表值
 */

import { ListNode } from "./LinkedList";

const linked1 = new ListNode(1).append(
  new ListNode(2).append(
    new ListNode(3).append(new ListNode(4).append(new ListNode(5)))
  )
);

function reorderList(head: ListNode | null): void {
  if (!head) return;
  let mid = middleNode(head);
  let l2 = mid.next;
  // 断开与反转node的链接，否则会形成环链表
  mid.next = null;
  let l1 = head;
  const reverseNode = reverseList(l2);
  mergeList(l1, reverseNode);
}

/**
 * 查找中间点
 * @param head
 * @returns
 * @description 通过快慢指针来查询中间点
 * 循环条件：快慢指针有一方为null时，此时的slow节点为链表中间点
 */
function middleNode(head: ListNode) {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

/**
 * 反转链表
 * @param head
 * @returns
 * @description 通过引入dummy节点，来进行反转链表
 */
function reverseList(head: ListNode | null) {
  let dummy = null;
  while (head) {
    let next = head.next;
    head.next = dummy;
    dummy = head;
    head = next;
  }
  return dummy;
}

/**
 * 合并两个节点
 * @param l1
 * @param l2
 * 以l1为主要节点，循环结束条件为l1和l2都有值的情况
 */

function mergeList(l1: ListNode, l2: ListNode) {
  if (!l1 && !l2) return;
  while (l1 && l2) {
    let l1Tmp = l1.next;
    let l2Tmp = l2.next;

    l1.next = l2;
    l1 = l1Tmp;
    l2.next = l1;
    l2 = l2Tmp;
  }
}

console.log(linked1);

console.log(reverseList(linked1));

// console.log(linked1);
