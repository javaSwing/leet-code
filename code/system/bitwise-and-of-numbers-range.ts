/**
 * 201. 数字范围按位与
 * @param left
 * @param right
 * @returns
 * @link https://leetcode.cn/problems/bitwise-and-of-numbers-range/
 * 重点： 0 & x = 0; 0与任何值都=0
 */
function rangeBitwiseAnd(left: number, right: number): number {
  if (left === 0 || right === 0) return 0;
  let r = left;
  for (let i = left + 1; i <= right; i++) {
    r &= i;
    if (r === 0) return 0;
  }
  return r;
}

// 如果left的right的length 相差不止一位，则必定返回0
function rangeBitwiseAnd1(left: number, right: number): number {
  if (left.toString(2).length !== right.toString(2).length) return 0;
  let r = left;
  for (let i = left + 1; i <= right; i++) {
    r &= i;
  }
  return r;
}

// 官方解题思路
// 5 二进制 101

/**
 *
 * @param left
 * @param right
 * @returns
 * @description
 * 利用去除右侧1的方法，来进行求值
 *
 * 5: 0101
 * 6: 0110
 * 7: 0111
 * ----------
 * 4: 01000
 *
 * 从上面可以看出，我们只要找到当前数组中共同的前缀进行返回即是位运算是的结果，因为根据位与运算规则，两个数同时不为1，则必定为 0
 *
 * 时间复杂度： O(logn),在此题中 n 最大为31，
 * 空间为： O(1)
 */
function rangeBitwiseAnd3(left: number, right: number): number {
  while (right > left) {
    right &= right - 1;
  }
  return right;
}

/**
 *
 * @param left
 * @param right
 * @returns
 * @description 通过右移进行操作，取得前缀。最后通过左移再补全位数
 * 之所以能使用右移，主要是题中说了 left和right为正整数，所以不用考虑符号位
 */
function rangeBitwiseAnd4(left: number, right: number): number {
  let r = 0;
  while (right > left) {
    right >>= 1;
    left >>= 1;
    r++;
  }
  return left << r;
}
