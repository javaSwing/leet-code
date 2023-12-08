/**
 * 219. 存在重复元素 II
 * @param nums
 * @param k
 * @returns
 *
 * @link https://leetcode.cn/problems/contains-duplicate-ii/description/
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (nums.length <= 1) return false;
  const table = new Map();
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if (table.has(e)) {
      const substract = Math.abs(table.get(e) - i);
      if (substract <= k) {
        return true;
      }
    }
    table.set(e, i);
  }
  return false;
}
