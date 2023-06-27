/**
 * 86. 分隔链表
 * @see https://leetcode.cn/problems/partition-list/
 */

import { ListNode } from './LinkedList';

const linked1 = new ListNode({ val: 1 }).append(
  new ListNode({ val: 4 }).append(
    new ListNode({ val: 3 }).append(
      new ListNode({ val: 2 }).append(new ListNode({ val: 5 }).append(new ListNode({ val: 2 })))
    )
  )
);

/**
 * 解法
 * @param head
 * @param x
 * @returns
 * @description 添加两个初始的节点及dummy 虚拟值，一个用来记录大于等于情况。一个用来记录小于情况
 * 在循环结束之后：
 * 1. 把large节点的.next设置为null,此时next节点可能指向一个其它节点,可能会出现死循环
 * 2. 把small的next节点指定large的next节点
 * 3. 最后返回small.next即可
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head || !head.next) return head;
  const small = new ListNode();
  let smallHead = small;
  const large = new ListNode();
  let largeHead = large;
  while (head) {
    if (head.val < x) {
      smallHead.next = head;
      smallHead = head;
    } else {
      largeHead.next = head;
      largeHead = head;
    }
    head = head.next;
  }
  largeHead.next = null;
  smallHead.next = large.next;
  return small.next;
}

partition(linked1, 3);
