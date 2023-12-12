/**
 * 442. 数组中重复的数据
 * @param nums
 * @returns
 * @link https://leetcode.cn/problems/find-all-duplicates-in-an-array/description/
 *
 * 要求空间复杂度为 O(1)，时间为上O(n)
 *
 */
function findDuplicates(nums: number[]): number[] {
  const res: number[] = [];
  const map = new Map(); // 使用了map，所以空间也变成了O(n)
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if (map.has(e)) {
      res.push(e);
    }
    map.set(e, 1);
  }

  return res;
}

// 想要实现空间为O(1)，也就不能使用hasMap。只能原地修改数组

/**
 * 正负号法
 * @param nums
 * @returns
 * 思路：从题目中可以知道nums中的数组的值为[1,n]之间的数组，通过[0,  n-1]索引来记录对应的数字，index为当前的数字
 * 为了保存每次的索引都是正值需要使用：Math.asb(e) - 1;
 * 如果nums[index] > 0 说明是首次出现，让该索引下的值变为负值
 * 如果直接查找为负值，则正常已经出现在过，直接添加支目标数组中
 */

function findDuplicates2(nums: number[]): number[] {
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    const index = Math.abs(e) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    } else {
      res.push(index + 1);
    }
  }

  return res;
}
