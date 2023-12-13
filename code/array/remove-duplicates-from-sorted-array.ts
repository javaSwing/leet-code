/**
 * 26. 删除有序数组中的重复项
 * @param nums
 * @returns
 * @link https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 *
 * 一般不改变原数组的情况，都需要用双指针进行切换数组位置
 */
function removeDuplicates26(nums: number[]): number {
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }

  return j + 1;
}
