/**
 * 背包问题 0-1 版本
 * 只有这个版本才适合动态规划
 *
 * 在背包中放入符合指定重量的东西的价值
 *
 * 二维数组对应的值为 背包东西的价值
 *
 * @link https://labuladong.github.io/algo/di-er-zhan-a01c6/bei-bao-le-34bd4/jing-dian--28f3c/
 * @todo 后面可以再理解下,感觉不是很理解
 */
export function knapSack(targetWeight: number, n: number, weights: number[], values: number[]) {
  const dp = new Array(n + 1).fill(0).map(() => new Array(targetWeight + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    // 遍历重量数组
    for (let w = 1; w <= targetWeight; w++) {
      if (w < weights[i - 1]) {
        dp[i][w] = dp[i - 1][w]; // 不装入背包，此时的[i-1][w]值为上次处理的值
      } else {
        dp[i][w] = Math.max(dp[i - 1][w - weights[i - 1]] + values[i - 1], dp[i - 1][w]);
      }
    }
  }
  return dp[n][targetWeight];
}
