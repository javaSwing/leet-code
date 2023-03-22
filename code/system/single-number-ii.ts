/**
 * 137. 只出现一次的数字 II
 * @link https://leetcode.cn/problems/single-number-ii/
 */

/**
 * 自己写的，应该不符合题的解法
 * 看了下和题的hash表解法应该是一个道理
 * 时间复杂度：O(n)
 * 空间复杂度: O(n/3 + 1) 即 O（n）
 */
function singleNumber2(nums: number[]): number {
  const obj = nums.reduce((pre, curr) => {
    pre[curr] = pre[curr] ? pre[curr] + 1 : 1;
    return pre;
  }, {} as Record<number, number>);
  return +Object.keys(obj).find((k) => obj[k] === 1);
}

// 位运算
function singleNumber(nums: number[]): number {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
    const t = 1 << i;
    let count = 0;
    nums.forEach((n) => {
      if (n & t) count++;
    });
    if (count % 3) ret |= t;
  }
  return ret;
}

/**
 * 位运算
 * @param nums
 * @returns
 * 思路：
 * 1. 数组中的元素在32位整数范围内，依次计算二进制状态下第 i 位 1的出现的次数
 * 2. 如果count % 3 > 0,则证明该位是只出现1次元素的二进制值，添加到对应的二进制中
 */
var singleNumber3 = function (nums) {
  let r = 0;
  // 数组中的数为十进制
  for (let i = 0; i < 32; i++) {
    // 遍历nums[i]所有数的可能
    const t = 1 << i; // 左移动1的位数
    let count = 0;
    nums.forEach((n) => {
      if (n & (1 << i)) {
        // 把 n和t都想成二进制数进行处理，进行&运算
        count++;
      }
    });
    if (count % 3) {
      r = r | t; // 这里或运算，主要是把32位数的1进行求和成为一个二进制数
    }
  }
  return r;
};

function singleNumber4(nums: number[]): number {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
    let count = 0;
    nums.forEach((n) => (count += (n >> i) & 1));
    // if(count % 3) ret = ret | 1 << i;
    // 还原位00^10=10
    ret = ret ^ (count % 3 << i);
  }
  return ret;
}
