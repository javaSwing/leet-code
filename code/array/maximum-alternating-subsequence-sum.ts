/**
 * 1911. 最大子序列交替和
 * @param nums
 * @link https://leetcode.cn/problems/maximum-alternating-subsequence-sum/description/
 *
 * 这是一个数组数据结构结合动态规划做的题，感觉好难。看了半天题解还是没有看懂
 * 理解：
 * 1. 根据交替和的规则来看，最大的的交替和必定是序列长度为：奇数（1、3、5）这种就是有多个偶数少数位的奇数。或者只有一个偶数
 *
 * @todo 还是不理解，太抽象了。哈哈
 */
export function maxAlternatingSum(nums: number[]): number {
  const len = nums.length;
  const arr: number[] = new Array(len + 1).fill(0);
  const g = arr.slice();

  for (let i = 1; i <= len; i++) {
    arr[i] = Math.max(g[i - 1] + nums[i - 1], arr[i - 1]);
    g[i] = Math.max(arr[i - 1] - nums[i - 1], g[i - 1]);
  }
  return Math.max(arr[len], g[len]);
}

/**
 * 看到的另一种理解写法
 * @param nums
 *
 * 思路：
 * 对于前N个元素，即nums[0]....nums[n]的序列，我们记录以下值：
 *  1. 当N为偶数时，交替和计为 A
 *  2. 当N为奇数时，交替和计为 B
 * 那么对于N+1个元素时，对于A和B的变化如下：（N为数组的长度）
 * 当 N 为偶数时，N+1为奇数。则交替和必为 a + nums[n+1]，如果忽略则这继续保持B的值即可
 * 当 N 为奇数时，N+1为偶数，则交替和必为 B - nums[n+1]，如果忽略保持A值即可
 *
 * 则最终的结果 选取 A 与 B中较大的就可以
 *
 */
function maxAlternatingSum2(nums: number[]): number {
  let a = 0;
  let b = nums[0];

  for (let i = 1; i < nums.length; i++) {
    a = Math.max(b - nums[i], a);
    b = Math.max(a + nums[i], b);
  }

  return Math.max(a, b);
}
