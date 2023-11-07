/**
 * 70. 爬楼梯
 * @param n
 * @returns
 * @link https://leetcode.cn/problems/climbing-stairs/description/?envType=study-plan-v2&envId=top-100-liked
 *
 * 转换为斐波那契数列问题处理
 */
function climbStairs(n: number): number {
  const dp: number[] = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

/**
 * 滚动数组方法该进
 * @param n
 * @returns
 * 空间为 O(1)
 */

function climbStairs2(n: number): number {
  let a = 0,
    b = 0,
    sum = 1;
  for (let i = 1; i <= n; i++) {
    a = b;
    b = sum;
    sum = a + b;
  }
  return sum;
}
