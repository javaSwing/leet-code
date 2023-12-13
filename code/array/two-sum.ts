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

/**
 * 哈希表
 * @param nums
 * @param target
 * @returns
 * @description hash 表思路，利用哈希表的O(1)的key为唯一的特性，在js中可以使用object来简单模拟hash table,但是到了es6之后推荐使用 Map数据结构
 */
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

/**
 * 对撞指针写法
 * @param nums
 * @param target
 * @returns
 *
 * 先排序，需要记录排序前的对应数索引位置
 */
function twoSum3(nums: number[], target: number): number[] {
  const numsWithIndex = nums
    .map((e, i) => {
      return {
        index: i,
        value: e,
      };
    })
    .sort((a, b) => a.value - b.value);

  let left = 0,
    right = numsWithIndex.length - 1;
  while (left < right) {
    const sum = numsWithIndex[left].value + numsWithIndex[right].value;
    if (sum === target) {
      return [numsWithIndex[left].index, numsWithIndex[right].index];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
}
