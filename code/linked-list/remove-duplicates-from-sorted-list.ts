/**
 * 83. 删除排序链表中的重复元素
 * @see https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
 */

import LinkedList from './book/linked-list';
import { LinkedNode } from './book/linked-node';

const linked1 = new LinkedList<number>();

linked1.push(-1);
linked1.push(0);
linked1.push(2);

/**
 * 暴力破解法（很笨的一个方法）
 * @param head
 * @returns
 */
// function deleteDuplicates(head: ListNode | null) {
//   if (!head) return null;
//   let curr = head;
//   let tmp = [];
//   while (curr) {
//     tmp.push(curr.val);
//     curr = curr.next;
//   }
//   console.log(tmp);
//   let targetNode: ListNode | null = null;
//   if (!tmp.length) return null;
//   const uniqueArr = [...new Set(tmp)];
//   uniqueArr.forEach((k) => {
//     const newNode = new ListNode(Number(k));
//     if (!targetNode) {
//       targetNode = newNode;
//     } else {
//       let lastNode = targetNode;
//       while (lastNode.next) {
//         lastNode = lastNode.next;
//       }
//       lastNode.next = newNode;
//     }
//   });
//   return targetNode;
// }

/**
 * 循环法，看过题解之后的理解
 * @param head
 * @description 解题的思路
 * 1. 关键点：升序且已排序的列表
 * 2. 如果本node的val和下个node的val相等，则可以跳过该节点。使用当前值的next.next=当前节点的next
 * 3. 如果不相等不作处理，继续循环
 *
 * 时间复杂度： O(n)
 * 空间复杂度：O(1)
 *
 */
function deleteDuplicates(head: LinkedNode<number> | undefined) {
  if (!head) return null;
  let curr = head;
  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

function deleteDuplicates2(head: LinkedNode<number> | undefined) {
  if (!head || !head.next) return head;
  const dummy = new LinkedNode<number>(-1011);
  let c = dummy;
  let t: LinkedNode<number> | undefined = head;

  while (t != undefined) {
    if (c.val !== t.val) {
      c.next = t;
      c = c.next;
    }

    t = t.next;
  }

  if (c.next != undefined) {
    c.next = undefined;
  }

  return dummy.next;
}

console.log(deleteDuplicates(linked1.head));
