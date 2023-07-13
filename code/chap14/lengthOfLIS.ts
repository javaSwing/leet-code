/**
 * 最长递增子序列
 * @link https://leetcode.cn/problems/longest-increasing-subsequence/
 */

/**
 * O(n^2)
 */
export const lengthOfLIS = (nums: number[]) => {
  const dp = new Array(nums.length).fill(1);

  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  return Math.max(...dp);
};
