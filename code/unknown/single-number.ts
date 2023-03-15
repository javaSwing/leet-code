/**
 * 136. 只出现一次的数字
 * @param nums
 * @returns
 * @link https://leetcode.cn/problems/single-number/
 *
 * 注：你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
 * 该算法只使用常量额外空间，有这句话基本都是位运算
 *
 * 解题思路：用位运算处理 ^ (异或)
 * 在位运算中: a ^ a = 0; 0 ^ a = a;
 */
function singleNumber(nums: number[]): number {
  return nums.reduce((pre, curr) => pre ^ curr, 0);
}
