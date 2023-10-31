/**
 * 912. 排序数组
 * @param nums
 * @returns
 * @link https://leetcode.cn/problems/sort-an-array/description/
 */
function sortArray(nums: number[]): number[] {
  let minIndex;
  for (let i = 0; i < nums.length - 1; i++) {
    minIndex = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums;
}
