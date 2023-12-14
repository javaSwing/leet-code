/**
 * 454. 四数相加 II
 * @param nums1
 * @param nums2
 * @param nums3
 * @param nums4
 * @returns
 *
 * @link https://leetcode.cn/problems/4sum-ii/description/
 *
 * 经典的哈希表解题法，利用Hash的唯一性拆解。
 *
 * 刚开始想复杂了，直接数组合并搞成了四数之和，但是没有办法去重
 */
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map = new Map();
  let c = 0;
  for (const n1 of nums1) {
    for (const n2 of nums2) {
      const sum = n1 + n2;
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }

  for (const n3 of nums3) {
    for (const n4 of nums4) {
      const sum = n3 + n4;
      c += map.get(0 - sum) || 0;
    }
  }

  return c;
}
