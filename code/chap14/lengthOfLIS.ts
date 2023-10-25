/**
 * 最长递增子序列
 * @link https://leetcode.cn/problems/longest-increasing-subsequence/
 */

/**
 * O(n^2)
 *
 * 思路：
 * 先说下，拿到题的最初想法。我最初的想法是：两次递归，声明一个数组。把递增的结果放进去，然后返回该数组的长度。但是该方法并没有写出来。所以不要尝试
 *
 * 正确的解题思路：
 * 1. 使用dp进行数组，与原数组长度相同。初始化都为1。该数组代表，dp[i]以num[i]结尾时，最长的递增子序列。假设都为1
 * 2. 外层循环进行正常的循环数组，注意是小于等于数组的长度
 * 3. 内层循环是从0开始，到目前外层数组的索引长度截止
 * 4. 如果外层的位置值 > 内层的位置值。则当前外层索引的dp[i] = d[j] + 1与当前d[i]的值中的最大值
 *
 * 为什么是dp[j] + 1k呢？因为需要把当前i的数目加上去，因为 > 的成立，肯定要+1
 *
 * 注：命令实现的代码写多了，就会有一个思路：从要得出的结果来反推函数的实现，就像我刚拿到题的想法一样。
 * 有时候这类题的可以换一种思路：声明一个与原数组相同的值，用对应的索引值来记录对应的值。最后取最大也是一个思路。
 * 总结：不一定返回的是真实的数组，也可以是寄存在一个数组中的对应值国
 *
 */
export const lengthOfLIS = (nums: number[]) => {
  const dp = new Array(nums.length).fill(1);

  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  return Math.max(...dp);
};

/**
 * 二分法查找实现最长递增子序列
 * @param num
 * @returns
 *
 * @link https://labuladong.github.io/algo/di-er-zhan-a01c6/dong-tai-g-a223e/dong-tai-g-6ea57/#%E4%BA%8C%E3%80%81%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E8%A7%A3%E6%B3%95
 * @link https://leetcode.cn/problems/longest-increasing-subsequence/solutions/1033432/dong-tai-gui-hua-he-er-fen-cha-zhao-lian-x7dh/
 * O(nlogN) 线性对阶
 *
 * ### 说明
 * 这一点，自己真的是想不到的。看题解也是看了很长时间，有点费脑子，需要努力。在这里不描述怎么想，很难想到用纸牌的思想来描述这个事。说下几个要点：
 *
 * - 这里的`top`代表的是每个是堆的堆顶，也就是堆的最小值
 * - 在循环数组里的逻辑如下：
 *    - 在目前已知的堆里，查找堆顶值与当前牌的值的对比，逻辑就是二分查找
 *    - 如果最终left的值与堆的值相等，则代表没有合适的堆，则新创建（注意left = mid + 1）
 *    - 之后把当前的纸牌放到对应的left的堆上（while结束的条件是left < right,说明left至少与right相等或者大于）
 * - 这样就创建了合适的堆
 */

export const lengthOfLIS2 = (nums: number[]) => {
  // 每堆的堆顶
  const top: number[] = [];
  // 牌堆的数量
  let pipes = 0;

  for (let i = 0; i < nums.length; i++) {
    // 初始化二分法的最左和最右边
    let left = 0;
    let right = pipes;
    const v = nums[i];

    while (left < right) {
      // 取中间值
      let mid = Math.floor((left + right) / 2);

      if (top[mid] > v) {
        right = mid;
      } else if (top[mid] < v) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // 如果最左边和当前堆的长度相等，即没有地方放。则新创建一个堆
    if (left === pipes) pipes++;
    // 把当前的这张牌放到对应堆的堆顶
    top[left] = v;
  }
  return pipes;
};
