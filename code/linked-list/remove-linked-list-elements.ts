/**
 * 203.移除链表元素
 * @see https://leetcode.cn/problems/remove-linked-list-elements/
 */

import { LinkedNode as ListNode } from './book/linked-node';

/**
 * 203.移除链表元素
 * @param head
 * @param val
 * @returns
 *
 * 时间复杂度 O(n),空间复杂度为 O(1)
 *
 * 思路：使用傀儡节点让所有的节点都在链表中进行处理
 *
 * 如何删除链表中的当前元素，目前知道办法，只能让Pre.next = null，即删除了该节点。所循环的时候进行预处理；可以转换成每次循环的时候为curr.next，直接使用curr.next = curr.next.next
 */
export function removeElements(head: ListNode<number> | undefined, val: number) {
  if (!head) return head;
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let curr = dummyNode;
  while (curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return dummyNode.next;
}

export function removeElements2(
  head: ListNode<number> | undefined,
  val: number
): ListNode<number> | undefined {
  const dummy = new ListNode(-1, head);
  let pre = dummy;
  let c = dummy.next;
  while (c) {
    if (c.val === val) {
      pre.next = c.next; // rm current node
    } else {
      pre = c;
    }

    c = c.next;
  }

  return dummy.next;
}

/**
 * 递归法
 * @param head
 * @param val
 * @returns
 */
export function removeElements3(
  head: ListNode<number> | undefined,
  val: number
): ListNode<number> | undefined {
  if (head == null) return head;

  head.next = removeElements(head.next, val);

  return head.val === val ? head.next : head;
}

// dummyNode 节点解题法
// 1. 在删除节点时，创建一个傀儡节点的next指向当前的head
// 2. 如果想要正序返回，当dummy赋值到一个临时变量上，后续的删除都是在这个临时变量上。原来的dummyNode不会被修改
// 3. 循环是选择 curr还是curr.next，要看要删除的变量是当前节点还是当前节点的下一个节点。一般删除节点用的都是curr.next进行删除
// 4. 反转链表可以使用 head.next = dummy;dummy = head;的方式反向添加，最后返回的dummy
