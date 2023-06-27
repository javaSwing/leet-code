/**
 * 1475. 商品折扣后的最终价格
 * @param prices
 * @returns
 * 时间 O(n2)
 * 空间为 O(1)
 */
// function finalPrices(prices: number[]): number[] {
//   for (let index = 0; index < prices.length; index++) {
//     const element = prices[index];
//     const right = prices.slice(index + 1);
//     const min = right.find((e) => element >= e);
//     if (min) {
//       prices[index] = element - min;
//     }
//   }
//   return prices;
// }

/**
 * 单调Stack的写法
 * 时间为 O(n)
 * 空间 O(n)
 */
function finalPrices(prices: number[]): number[] {
  const l = prices.length;
  const ans = new Array(l).fill(0);
  const stack = [];
  for (let index = l - 1; index >= 0; index--) {
    while (stack.length && stack[stack.length - 1] > prices[index]) {
      stack.pop();
    }

    ans[index] = stack.length === 0 ? prices[index] : prices[index] - stack[stack.length - 1];
    stack.push(prices[index]);
  }
  return ans;
}

const prices = [8, 4, 6, 2, 3];

console.log(finalPrices(prices));
