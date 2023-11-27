import { LinkedNode as ListNode } from './book/linked-node';

/**
 * 92. 反转链表 II
 * @param head
 * @param left
 * @param right
 * @returns
 * @description 自己写的写法
 *
 * 思路就是：反转需要反转的部分，然后记录left的pre，再把right的剩余部分加上
 *
 * 看评论区里这是一个高频面试题
 */
export function reverseBetween(
  head: ListNode<number> | undefined,
  left: number,
  right: number
): ListNode<number> | undefined {
  if (!head || !head.next) return head;
  let dummy: ListNode<number> | undefined = undefined;
  let c: ListNode<number> | undefined = head;
  let slow: ListNode<number> | undefined = head;
  let fast: ListNode<number> | undefined = head;
  let i = 1;
  while (c) {
    if (i >= left && i <= right) {
      const m = new ListNode<number>(c.val);
      m.next = dummy;
      dummy = m;
    }

    if (i < left) {
      slow = slow?.next;
    }

    if (i <= right) {
      fast = fast?.next;
    }

    c = c.next;
    i++;
  }

  if (slow && dummy) {
    slow.val = dummy.val;
    slow.next = dummy.next;
  }

  while (slow && slow.next) {
    slow = slow.next;
  }
  if (slow) slow.next = fast;

  return head;
}

/**
 * 需要再理解下，只会第一种自己写的
 * @param head
 * @param left
 * @param right
 * @returns
 */
export function reverseBetween2(
  head: ListNode<number> | undefined,
  left: number,
  right: number
): ListNode<number> | undefined {
  const dummy = new ListNode<number>(-1);
  dummy.next = head;
  let prev: ListNode<number> | undefined = dummy;
  for (let i = 0; i < left - 1; i++) {
    prev = prev?.next;
  }

  const c: ListNode<number> | undefined = prev?.next;
  for (let i = 0; i < right - left; i++) {
    const next = c?.next;
    c !== undefined && (c.next = next?.next);
    next !== undefined && (next.next = prev?.next);
    prev != undefined && (prev.next = next);

    console.log('i', i);
    console.log('dummy.next', dummy.next?.toString());
    console.log('c', c?.toString());
  }
  return dummy.next;
}
