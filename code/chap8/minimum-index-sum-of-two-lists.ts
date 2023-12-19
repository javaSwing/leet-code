/**
 * 599. 两个列表的最小索引总和
 * @param list1
 * @param list2
 * @returns
 * @link https://leetcode.cn/problems/minimum-index-sum-of-two-lists/description/
 */
function findRestaurant(list1: string[], list2: string[]): string[] {
  let count = -1;
  const map = new Map();
  const arr: string[] = [];

  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  for (let m = 0; m < list2.length; m++) {
    const e = list2[m];
    if (map.has(e)) {
      const currentSum = map.get(e) + m;
      if (count == -1) {
        count = currentSum;
        arr.push(e);
      } else if (currentSum <= count) {
        if (currentSum < count) {
          arr.length = 0;
          count = currentSum;
        }
        arr.push(e);
      }
    }
  }

  return arr;
}
