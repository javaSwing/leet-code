import { LinkedNode as ListNode } from './book/linked-node';

export function reverseBetween(
  head: ListNode<number> | undefined,
  left: number,
  right: number
): ListNode<number> | undefined {
  if (!head || !head.next) return head;
  let dummy: ListNode<number> | undefined = undefined;
  let c = head;
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
      slow = slow.next;
    }

    if (i <= right) {
      fast = fast.next;
    }

    c = c.next;
    i++;
  }

  slow.val = dummy.val;
  slow.next = dummy.next;

  while (slow && slow.next) {
    slow = slow.next;
  }

  slow.next = fast;

  return head;
}
