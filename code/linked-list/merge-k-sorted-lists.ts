import { ListNode } from "./LinkedList";

const linked1 = new ListNode(-1).append(
  new ListNode(5).append(new ListNode(11))
);
// const linked2 = new ListNode(1).append(new ListNode(3).append(new ListNode(4)));
const linked3 = new ListNode(6).append(new ListNode(10));
const data = [new ListNode(null), linked1, new ListNode(null), linked3];

// ## 23. 合并K个升序链表
// @see https://leetcode.cn/problems/merge-k-sorted-lists/

/**
 * 合并K个升序链表
 * @param lists
 * @returns
 * @description 此方法为暴力解法
 * @todo 后面复习时添加其它解法
 * - 分治合并
 * - 使用优先队列合并
 * @see https://leetcode.cn/problems/merge-k-sorted-lists/solution/he-bing-kge-pai-xu-lian-biao-by-leetcode-solutio-2/
 */
function mergeKLists(lists: Array<ListNode | null>) {
  if (lists.length === 0) return null;
  let temp = [];
  for (let index = 0; index < lists.length; index++) {
    let linkNode = lists[index];
    while (linkNode) {
      temp.push(linkNode.val);
      linkNode = linkNode.next;
    }
  }
  if (temp.length === 0) return null;
  const sortArr = temp.sort((a, b) => a - b);
  let linkedNode: null | ListNode = null;
  sortArr.forEach((v, i) => {
    const currNode = new ListNode(v);
    if (!linkedNode) {
      linkedNode = currNode;
    } else {
      let lastNode = linkedNode;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = currNode;
    }
  });
  return linkedNode;
}

console.log(mergeKLists(data));
