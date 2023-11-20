/**
 * 61. 旋转链表
 * @param head
 * @param k
 * @returns
 *
 * @link https://leetcode.cn/problems/rotate-list/description/
 *
 * 思路：
 * 1. 如何移动知长度0或者，只有一个元素，则直接返回head
 * 2. 统计链表长度
 * 3. 实际移动的链表位置为：链表长度 - k%如果链表长度，如果结果刚好等于链表长度，则直接返回head
 * 4. 否则循环链表到移动长度位置，t.next即为新链表的开始，然后让t.next = null,断开链表即可
 */
const rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }

  // 统计长度
  let i = 1;
  let c = head;

  while (c.next) {
    c = c.next;
    i++;
  }

  const t = i - (k % i);
  if (t === i) {
    return head;
  }

  // 形成环
  c.next = head;

  for (let m = 0; m < t; m++) {
    c = c.next;
  }

  const r = c.next;
  c.next = null;
  return r;
};
