/**
 * 53. 最大子数组和
 * @param nums
 * @returns
 * @link https://leetcode.cn/problems/maximum-subarray/description/
 */
export function maxSubArray(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(0);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...dp);
}
