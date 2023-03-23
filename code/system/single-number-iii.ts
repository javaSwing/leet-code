/**
 * 260. 只出现一次的数字 III
 * @param nums
 * @returns
 * @link https://leetcode.cn/problems/single-number-iii/
 *
 * @description
 * 时间复杂度： O(n)
 * 空间为：O(1)
 *
 * 先说一个下LowBit的概念，这里表示的是求二进制数字中的最低为1所对应的值
 * 两种表达式如下：
 * 1. n &(n ^ (n - 1))
 * 2. n & - n
 * 举例说明：
 * 以十进制6例子，其二进制为：110 补码：010   1 二进制为001
 * 在二进制运算中负数都是用补码进行表示
 * ### 公式 1
 * >  110 & (110 ^ (110 - 001)) = 110 & (110 ^ 101)  = 110 & 011 = 010
 * 公式 2
 * 2. 110 & -110 = 110 & 010 = 010
 *
 * 思路：
 * 假设：两个唯一的元素分别为 a b
 * 1. 先对数组中的所有元素进行异或求和，根据 x ^ x = 0, 可以确定 sum = a ^ b
 * 2. 利用lowBit函数求出sum的二进制表示中，最低位为1的值（也就是从这个值的二进制开始可以区分出来两类数组值 num1和num2）
 * 3. num1代表 `&` lowBit值后为0的一类数，num2代表 & lowBit不为0的一类
 * 4. 再根据 x ^ x = 0 规则，执行 `result[0] = result[0] ^ n;`,后result[0]必定是 a或b中的一个值
 *
 */
function singleNumber(nums: number[]): number[] {
  // 1.先对数组进行 ^ 求和，根据 a ^ a = 0，规则可知最终的sum为 a ^ b;
  const sum = nums.reduce((p, c) => (p ^= c), 0);
  // 根据Lowbit求出sum中的最后一个1的位置
  const lowbit = sum & -sum; // 也可以使用 (sum & sum - 1)^sum

  let result = [0, 0];
  nums.forEach((n) => {
    if (n & lowbit) {
      result[0] = result[0] ^ n;
    } else {
      result[1] = result[1] ^ n;
    }
  });
  return result;
}
