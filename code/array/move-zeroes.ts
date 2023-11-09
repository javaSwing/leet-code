/**
 * 283. 移动零
 * @param nums
 * @link https://leetcode.cn/problems/move-zeroes/submissions/478443328/
 */
export function moveZeroes(nums: number[]): void {
  let l = 0;
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] !== 0 && nums[l] === 0) {
      const t = nums[l];
      nums[l] = nums[index];
      nums[index] = t;
      l++;
    }
    if (nums[l] !== 0) {
      l++;
    }
  }
}

export function moveZeroesImprovement(nums: number[]): void {
  let l = 0;
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] !== 0) {
      const t = nums[l];
      nums[l++] = nums[index];
    }
  }
}
