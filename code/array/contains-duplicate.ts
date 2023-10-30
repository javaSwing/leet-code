/**
 * 217. 存在重复元素
 * @param nums
 * @returns
 * @link https://leetcode.cn/problems/contains-duplicate/description/
 */
export function containsDuplicate(nums: number[]): boolean {
  let flag = false;
  let obj = {};
  for(let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if(obj[e]) {
      obj[e]++
      flag= true;
    } else {
      obj[e] = 1;
    }
  }

  return flag;
};

function containsDuplicate2(nums: number[]): boolean {
  let set = new Set();
  for(let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if(set.has(e)) {
      return true;
    } else {
      set.add(e)
    }
  }

  return false;
};
