/**
 * 零钱兑换
 * @link https://leetcode.cn/problems/coin-change/
 */

// 暴力解题法
export const coinChange = (coins: number[], amount: number) => {
  const memo = {}
  return dp(coins, amount, memo);
};

/**
 * 递归调用的方法
 *
 * **自顶向下**进行展开的临界值处
 * 计算最小值组合的金币数，然后逐步向上组合计算出大值的金币数
 * 然后同级别进行比较取小值，即可算出结果，
 * 也就是说通过计算每个值对应每个金币的累计数进行比较即可
 *
 * 注：**直接使用递归会超时**，需要借助memo
 */
function dp(coins: number[], amount: number, memo) {
  if(amount <=0) {
      return amount === 0? 0: -1;
  }

  if(typeof memo[amount] !== 'undefined') {
      return memo[amount];
  }

  let res = Infinity;
  for (let index = 0; index < coins.length; index++) {
    const coin = coins[index];
    const subProgram = dp(coins, amount - coin, memo);

    if (subProgram === -1) continue;

    // 这里 + 1的原因：
    // 考虑dp(coins, 1)时，返回的amount 为0，代表是金钱数，并不是金币数
    res = Math.min(res, subProgram + 1);
  }
  return res === Infinity ? -1: res;
}

/**
 * 优化备忘录方法
 * 使用一个中间变量来保存递归中重复的值结果，来跳过计算
 */
export const coinChangeMemo = (coins: number[], amount: number) => {
  const memo: Record<number, number> = {}
  return dpMemo(coins, amount, memo);
};

function dpMemo(coins: number[], amount: number, memo) {
  if (amount === 0) return 0;
  if (amount < 0) return -1;
  if(typeof memo[amount] !== 'undefined') return memo[amount]

  let res = Infinity;
  for (let index = 0; index < coins.length; index++) {
    const coin = coins[index];
    const subProgram = dpMemo(coins, amount - coin, memo);

    if (subProgram === -1) continue;
    res = Math.min(res, subProgram + 1);
  }
  memo[amount] = res === Infinity ? -1: res;
  return  memo[amount];
}


/**
 * 动态规划DP版本
 * @param coins
 * @param amount
 * 该版本与备忘录最大的区别是：**自底向上**，并不使用递归的方法
 */
export const coinChangeDP = (coins: number[], amount: number) => {
  // 这里初始化值使用了amount + 1 代表无限大
  const dp = new Array(amount + 1).fill(amount+1);
  dp[0] = 0;
  for (let index = 0; index < dp.length; index++) {
    for(const c of coins) {
      // 子问题求解
      if(index - c < 0) {
        continue;
      }
      // dp[index - c] + 1
      // 这里是因为返回的值没有包含当前 coin的数量
      dp[index] = Math.min(dp[index], dp[index - c] + 1);
    }
  }

  return (dp[amount] === amount + 1)? -1: dp[amount];
};
