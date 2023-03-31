/**
 * 121. 买卖股票的最佳时机
 * @param prices
 * @returns
 *
 * @link https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 */
function maxProfit(prices: number[]): number {
  let min = prices[0];
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    const curr = prices[i];
    min = Math.min(curr, min);
    max = Math.max(max, curr - min);
  }
  return max;
}
