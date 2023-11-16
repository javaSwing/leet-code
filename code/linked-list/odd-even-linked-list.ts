/**
 * 328. 奇偶链表
 * @param head
 * @returns
 * @link https://leetcode.cn/problems/odd-even-linked-list/
 */
const oddEvenList = function(head) {
  if(head == null) {
      return head;
  }

  let evenHead = head.next;
  let odd = head;
  let even = evenHead;
  while(even != null && even.next != null) {
      odd.next = even.next
      odd = odd.next;
      even.next = odd.next;
      even = even.next;

  }

  odd.next = evenHead;
  return head;
};
