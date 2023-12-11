/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

class RNode {
  val: number;
  next: RNode | null;
  random: RNode | null;
  constructor(val?: number, next?: RNode, random?: RNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

/**
 * 138. 随机链表的复制
 * @param head
 * @returns
 * @link https://leetcode.cn/problems/copy-list-with-random-pointer/description/
 */
function copyRandomList(head: RNode | null): RNode | null {
  if (!head) return head;
  let c: RNode | null = head;
  // copy new node
  while (c) {
    const newNode = new RNode(c.val);
    const cN = c.next;
    c.next = newNode;
    newNode.next = cN;
    c = newNode.next;
  }

  // 调整random
  let m: RNode | null = head;
  while (m) {
    const mNext = m.next;
    mNext.random = m.random != null ? m.random.next : null;
    m = mNext.next;
  }

  const dummy = new RNode(-10000);
  let cDummy: RNode | null = dummy;
  let n: RNode | null = head;
  while (n) {
    const nNext = n.next;
    cDummy && (cDummy.next = nNext);
    cDummy = cDummy ? cDummy.next : null;
    n.next = cDummy ? cDummy.next : null;
    n = nNext.next;
  }
  return dummy.next;
}
