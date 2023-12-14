/**
 * 231. 2 的幂
 * @param n
 * @returns
 */

/**
 * 递归解法
 * 性能很差 哈哈哈
 */
function isPowerOfTwo(n: number): boolean {
  if (n === 1) return true;
  if (n <= 0) return false;
  if (n > 0 && n < 1) return false;
  return isPowerOfTwo(n / 2);
}

// @todo 还有一种位运算解法，暂时没有写
