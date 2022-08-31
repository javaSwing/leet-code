/**
 * 206. 反转链表
 * @see https://leetcode.cn/problems/reverse-linked-list/
 */

import { ListNode } from "./LinkedList";

const linked1 = new ListNode(1).append(new ListNode(2).append(new ListNode(3)));

/**
 * dummy 傀儡节点法
 * @param head
 * @returns
 * 引入一个傀儡节点，
 * 1. 使当前的节点的next指向dummy节点，并把head的next赋值给一个临时变量
 * 2. 并把当前的head赋值给dummy
 * 3. 把head的next赋值给head
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
// function reverseList(head: ListNode | null) {
//   if (!head || !head.next) return head;
//   let dummy: ListNode | null = null;
//   while (head) {
//     let next = head.next;
//     head.next = dummy;
//     dummy = head;
//     head = next;
//   }
//   return dummy;
// }

/**
 * 递归法
 * @param head
 * @returns
 * @example 1->2->3为例子
 * 递归的意思：我子节点下的所有节点都已经反转好了，现在就剩我和我的子节点 没有完成最后的反转了，所以反转一下我和我的子节点。
 */
// function reverseList(head: ListNode | null) {
//   if (!head || !head.next) return head;
//   let newHead = reverseList(head.next);
//   /**
//    * 使用递归执行情况如下：
//    * 1. 首次返回执行结果为：head为3时；newHead=3 ,head为2, tail为3 此是为1->3->2
//    * 2. head1时，newHead为3->2
//    */
//   let tail = head.next;
//   head.next = null;
//   tail.next = head;
//   return newHead;
// }

function reverseList(head: ListNode | null) {
  return reverseHelper(head, null);
}

function reverseHelper(head: ListNode, newHead: ListNode | null) {
  if (!head) return newHead;
  let next = head.next;
  head.next = newHead;
  return reverseHelper(next, head);
}

console.log(reverseList(linked1));
