/**
 * 338. 比特位计数
 * @param n
 * @returns
 * @link https://leetcode.cn/problems/counting-bits/
 */
function countBits(n: number): number[] {
  const result = [];
  for (let i = 0; i <= n; i++) {
    let count = 0;
    let t = i;
    while (t > 0) {
      count++;
      t = t & (t - 1);
    }

    result.push(count);
  }
  return result;
}

// @todo 动态规划
