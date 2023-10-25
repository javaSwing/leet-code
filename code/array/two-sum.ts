/**
 * 1.two-sum
 * @param nums
 * @param target
 * @returns
 * @link https://leetcode.cn/problems/two-sum/
 * O(n2)
 */
export function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    const other = target - v;
    const secondIndex = nums.findIndex((x) => x === other);
    if (secondIndex > -1 && secondIndex != i) {
      result.push(i, secondIndex);
      break;
    }
  }

  return result;
}

export function twoSum2(nums: number[], target: number): number[] {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    const other = target - v;
    if (typeof map[other] !== 'undefined') {
      return [map[other], i];
    }
    map[v] = i;
  }
  return [];
}
