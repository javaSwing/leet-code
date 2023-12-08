/**
 * 202. 快乐数
 * @param n
 * @returns
 *
 * @link https://leetcode.cn/problems/happy-number/description/
 *
 * 思路：使用Hash表把每次计划的值存起来，如果hash表中有了，则直接返回false,如果n=== 1 返回true
 * 如果进入无限循环情况：
 *
 * 理解： 4位或 4 位以上的数字在每一步都会丢失一位，直到降到 3位为止。
 * 题目中告诉了 n 的大小最大不超过 2^31-1，即最大不超过 10 位数，
 * 也就是说，计算的结果最大不超过 9^2*10 也就是 810，
 * 810再交进行计算变成 65
 */
function isHappy(n: number): boolean {
  const s = new Set();
  // eslint-disable-next-line no-constant-condition
  while (true) {
    n = (n + '').split('').reduce((p, c) => p + Math.pow(+c, 2), 0);
    if (n === 1) return true;
    if (s.has(n)) return false;
    s.add(n);
  }
}
