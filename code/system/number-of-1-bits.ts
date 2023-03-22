/**
 * 191. 位1的个数
 * @param n
 * @returns
 * @link https://leetcode.cn/problems/number-of-1-bits/
 */
function hammingWeight(n: number): number {
  let c = 0;
  //    for(let i = 0; i< 32; i++) {
  //        c += (n >> i) & 1;
  //    }
  while (n) {
    c++;
    n = n & (n - 1);
  }
  return c;
}
