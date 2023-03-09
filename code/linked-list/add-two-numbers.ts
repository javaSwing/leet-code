/**
 * 2. 两数之和
 * @link https://leetcode.cn/problems/add-two-numbers/
 */

import { ListNode } from "./LinkedList";

/**
 * 迭代解法
 * @param l1
 * @param l2
 * @returns
 *
 * 题解：本题也是在看了题角之后再写出来的。
 * 看了题目之后的第一思路是把链表的值取出来转换成值相加再重新转换成链表，我看了评论区有我这个想法的不止一个（但是题目中表示了数字为“逆序”排列，这个方法很肯定很恶心）
 * 重点：
 * 1. 取链表当前相同位置的值进行相加即可
 * 2. 相加之后会以下几重情况
 *  - 相加后的值变成了两位（即 > 9）注意：数字为逆序也就是第一位肯定是最小的个位，只能把数字 进1（即 Math.floor(x / 10)） ，加到后面的位置，而当前的位置只能显示 相加后值的个位数（即 x % 10）
 *  - 数字相加后还是一位，正常放在新的链表位置即可
 *
 * 3. 在迭代处理完两个链表之后，判断是否有进位，如果有要把当前的值添加链表的最后一位上
 *
 * 两个链表 l1 和 l2 长度不一样，（可以在短的一方后面进行补0即可，达到长度相同）
 *
 * 时间复杂度： O(max(m,n))
 * 空间复杂度：O(1)
 *
 *
 */
function addTwoNumbersIterative(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const pre = new ListNode(0);
  let cur = pre;
  let bit = 0;

  while (l1 || l2) {
    let trueL1 = l1 ? l1.val : 0;
    let trueL2 = l2 ? l2.val : 0;
    let sum = trueL1 + trueL2 + bit;

    bit = Math.floor(sum / 10);
    sum = sum % 10;
    cur.next = new ListNode(sum);
    cur = cur.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (bit > 0) {
    cur.next = new ListNode(bit);
  }

  return pre.next;
}

/**
 * 递归版本
 * @param l1
 * @param l2
 * @returns
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
  return add(l1, l2, 0);
}

function add(l1: ListNode | null, l2: ListNode | null, bit: number) {
  if (!l1 && !l2) {
    return bit > 0 ? new ListNode(bit) : null;
  }
  let trueL1 = l1 ? l1.val : 0;
  let trueL2 = l2 ? l2.val : 0;
  let sum = trueL1 + trueL2 + bit;

  const target = new ListNode(sum % 10);
  target.next = add(l1?.next, l2?.next, Math.floor(sum / 10));
  return target;
}
