/**
 * 41. 缺失的第一个正数
 * @param nums
 * @returns
 *
 * @link https://leetcode.cn/problems/first-missing-positive/description/
 *
 * 自己写的版本，性能很差，空间不符合。因为使用哈希表为O(n)
 */
function firstMissingPositive(nums: number[]): number {
  const len = nums.length;
  const map = new Map();
  for (let i = 1; i <= len + 1; i++) {
    map.set(i, 0);
  }

  for (let j = 0; j < len; j++) {
    const e = nums[j];
    if (map.has(e)) {
      map.delete(e);
    }
  }

  return Array.from(map.keys())[0];
}

/**
 * 置换法
 * @param nums
 * @returns
 *
 * 当 x 属于[1, N]之间里，nums[i] != nums[nums[i] - 1], 则两个元素交换位置，直到相同为直
 *
 * 交换后的数组，如果 nums[i] != i + 1;直接返回 i + 1，否则return n + 1;
 */
function firstMissingPositive2(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
      // 也叫做交换排序
      // const t = nums[nums[i] - 1];
      // nums[nums[i] - 1] = nums[i];
      // nums[i] = t;
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  for (let j = 0; j < n; j++) {
    if (nums[j] != j + 1) {
      return j + 1;
    }
  }

  return n + 1;
}
