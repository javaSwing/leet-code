import { type LinkedNode as ListNode } from './book/linked-node';

/**
 * 142. 环形链表 II
 * @param head
 * @returns
 * @link https://leetcode.cn/problems/linked-list-cycle-ii/description/?envType=study-plan-v2&envId=top-100-liked
 */

// map的写法
function detectCycle(head: ListNode<number> | null): ListNode<number> | null {
  const map = new Map();
  let c: null | undefined | ListNode<number> = head;
  while (c != null) {
    if (map.has(c)) {
      return map.get(c);
    } else {
      map.set(c, c);
    }
    c = c.next;
  }

  return null;
}

/**
 * set 写法
 * @param head
 * @returns
 *
 * 需要注意的是这里set判断has之后，直接返回了C
 * 是因为此时的c已经是上一个c.next的值，也就是环的开始
 */
function detectCycle2(head: ListNode<number> | null): ListNode<number> | null {
  const set = new Set();
  let c: null | undefined | ListNode<number> = head;
  while (c != null) {
    if (set.has(c)) {
      return c;
    }
    set.add(c);
    c = c.next;
  }

  return null;
}
