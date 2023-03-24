/**
 *
 * @param n
 * @returns
 * @link https://leetcode.cn/problems/reverse-bits/
 */

function reverseBits(n: number): number {
  let r = 0;
  let t = 31;
  while (n > 0) {
    // 取出右边最后一位
    // n & 1 取出最后一次
    // (n & 1) << t 相当于把取出的最后一位左移 31位，后面补0，相当于把最后一次调整到最前面
    // 之后进行 | 加到最先的值上
    r = r | ((n & 1) << t);

    // 无符号右移最后一位
    n = n >>> 1;
    t--;
  }

  //   对于 JS，ES 规范在之前很多版本都是没有无符号整形的， 转化为无符号，可以用一个 trick n >>> 0
  return r >>> 0;
}
