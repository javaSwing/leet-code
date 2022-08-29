// 合并两个有序链表
// a. 两个链表的节点数目范围是 [0, 50]
// b. -100 <= Node.val <= 100
// c. l1 和 l2 均按 非递减顺序 排列
// 1. 单向链表，下面为伪代码实现：
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// 1. 递归写法
// const mergeTwoLists = function(l1, l2) {
//     if(l1 === null) return l2;
//     if(l2 === null) return l1;
//     if(l1.val < l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2)
//         return l1
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next)
//         return l2
//     }
// }

// 2. 非递归写法
// @todo 不是很理解
const mergeTwoLists = function(l1, l2) {
    const targetList = new ListNode();
    let cur = targetList;
    while (l1 && l2) {
        if(l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next
    }
    cur.next = l1 === null ? l2 : l1;
    return targetList.next; // 初始值为0
}