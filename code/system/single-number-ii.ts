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

// 补充位运算
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
