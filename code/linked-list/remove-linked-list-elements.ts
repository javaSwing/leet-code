/**
 * 203.移除链表元素
 * @see https://leetcode.cn/problems/remove-linked-list-elements/
 */

import { ListNode } from "./LinkedList";

const linked1 = new ListNode({ val: 1 }).append(
  new ListNode({ val: 2 }).append(
    new ListNode({ val: 3 }).append(
      new ListNode({ val: 4 }).append(new ListNode({ val: 5 }))
    )
  )
);

// 时间复杂度 O(n),空间复杂度为 O(1)
function removeElements(head: ListNode | null, val: number) {
  if (!head) return head;
  let dummyNode = new ListNode({ val: -1 });
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

console.log(removeElements(linked1, 2));
// dummyNode 节点解题法
// 1. 在删除节点时，创建一个傀儡节点的next指向当前的head
// 2. 如果想要正序返回，当dummy赋值到一个临时变量上，后续的删除都是在这个临时变量上。原来的dummyNode不会被修改
// 3. 循环是选择 curr还是curr.next，要看要删除的变量是当前节点还是当前节点的下一个节点。一般删除节点用的都是curr.next进行删除
// 4. 反转链表可以使用 head.next = dummy;dummy = head;的方式反向添加，最后返回的dummy
