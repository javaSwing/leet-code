/**
 * 15. 三数之和
 * @param nums
 * @returns
 * @link https://leetcode.cn/problems/3sum/description/
 *
 * 双指针法
 * O(n2)
 */

export function threeSum(nums: number[]): number[][] {
  // 边界处理
  if (nums.length == 3) {
    return nums.reduce((p, c) => p + c, 0) === 0 ? [nums] : [];
  }
  const result: number[][] = [];
  const len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    //  保证nums[i]不会重复
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // 双指针
    let L = i + 1;
    let R = len - 1;

    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        result.push([nums[i], nums[L], nums[R]]);
        // 去重L位相同的
        while (L < R && nums[L] === nums[L + 1]) L++;
        // 去重R位相同的
        while (L < R && nums[R] === nums[R - 1]) R--;
        L++;
        R--;
      }
      if (sum < 0) L++;
      if (sum > 0) R--;
    }
  }

  return result;
}

/**
 * 三数之和
 * @param nums
 * @returns
 *
 * 思路：取出来一个值，数组中去掉这个值，问题就变成两数之和的问题。但是要注意去重的情况：
 * 1. 如果 i> 0时，当前first的值与前一个值相同时，找到结果必然与前一组相同，直接跳过
 * 2. 如果sum的值正好为0时，要调整 L和R的值：
 *    a. 如果L和L+1相同，则调整到L++，使用while循环进行处理调整到不同为止
 *    b. 如果R和R的上个值相同，则需要R--，也使用While循环进行处理
 */
export function threeSum2(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    if (first > 0) break;
    // 与前一位数据相同直接跳过
    if (i > 0 && first == nums[i - 1]) continue;

    // 左侧连续的三个值之和都>0，加一个右边的值，根本不能=0
    if (first + nums[i + 1] + nums[i + 2] > 0) break;

    // 连续右边的三个相加都小于0，跳过这次计算
    if (first + nums[nums.length - 1] + nums[nums.length - 2] < 0) continue;

    let L = i + 1;
    let R = nums.length - 1;

    while (L < R) {
      const sum = first + nums[L] + nums[R];
      if (sum === 0) {
        res.push([first, nums[L], nums[R]]);
        // 判断去重调整下个位置
        while (L < R && nums[L] === nums[L + 1]) {
          L++;
        }
        while (L < R && nums[R] == nums[R - 1]) {
          R--;
        }

        L++;
        R--;
      } else if (sum > 0) {
        R--;
      } else if (sum < 0) {
        L++;
      }
    }
  }

  return res;
}
