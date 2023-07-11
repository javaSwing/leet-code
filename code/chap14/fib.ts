/**
 * 这里是用斐波那契数列来渐进演示 动态规划代码片段
 *
 * 斐波那契LeetCode原题：https://leetcode.cn/problems/fibonacci-number/
 */

// 暴力解题法
// 利用递归循环解题
export const fib = (n: number) => {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
};

/**
 * 进阶解题方法，使用一个memo用来缓存，递归里可能会重复的值。减少不必要的计算
 * 这也是在react中一个常见的优化方法
 * @param n
 *
 * 注意这里的计算方式为，取N值为4：
 * 1. 先计算了n-1函数，fibMemoBase(3, memo) -> fibMemoBase(2, memo) + fibMemoBase(1, memo)
 *                                              👇
 *                                          fibMemoBase(1, memo) + fibBase(0, memo)
 * 该过程自顶向下进行执行， memo中会先保存小的值。这里的第一个为memo ={2: xxx}
 * 恰巧后面第二函数执行的时候正好复用了第一个函数的执行过程中memo函数，达到减小计算量的效果
 */
export const fibMemo = (n: number) => {
  const memo: Record<number, number> = {};
  return fibMemoBase(n, memo);
};

const fibMemoBase = (n: number, memo: Record<number, number>) => {
  if (n === 0 || n === 1) return n;
  if (memo[n]) return memo[n];
  else {
    memo[n] = fibMemoBase(n - 1, memo) + fibMemoBase(n - 2, memo);
    return memo[n];
  }
};

/**
 * 动态规划实现
 * @param n
 * 在上一步的基础上，我们这里换成从小到大的角度进行执行，即 f(0) + f(1) + f(2)
 * 这样在内存中不会存储很多函数执行的上下文
 * 这里使用一个dp来进行缓存结果，只不不再用递归，而使用了递推法
 */
export const fibDp = (n: number) => {
  const dp: Record<number, number> = {};
  dp[0] = 0;
  dp[1] = 1;
  for (let index = 2; index <= n; index++) {
    dp[index] = dp[index - 1] + dp[index - 2];
  }
  return dp[n];
};

/**
 * 根据上面的递推规则发现，即使不用dp进行缓存，只需要用两个变量保存n-1和n-2的两个值即可，减少空间的占用
 * @param n
 * @returns
 */
export const fibDpImprovement = (n: number) => {
  if (n === 0 || n === 1) return n;
  let n_1 = 1;
  let n_2 = 0;
  let dp_i;
  for (let index = 2; index <= n; index++) {
    dp_i = n_1 + n_2;
    n_2 = n_1;
    n_1 = dp_i;
  }
  return dp_i;
};
