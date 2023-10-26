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
  if(nums.length == 3) {
    return nums.reduce((p, c) => p+c,0) === 0? [nums] :[];
  }
  let result: number[][] = [];
  const len = nums.length;
  nums.sort((a, b) => a-b);
  for(let i = 0; i < len; i++) {
     if(nums[i] > 0) break;
    //  保证nums[i]不会重复
    if(i> 0 && nums[i] === nums[i - 1]) continue;
    // 双指针
    let L = i +1;
    let R = len - 1;

    while(L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if(sum === 0) {
        result.push([nums[i], nums[L], nums[R]]);
        // 去重L位相同的
        while(L < R && nums[L] === nums[L + 1]) L++;
        // 去重R位相同的
        while(L < R && nums[R] === nums[R - 1]) R--;
        L++;
        R--;
      }
      if(sum < 0) L++;
      if(sum > 0) R--;
    }
  }

  return result;
};
