/**
 * 78. 子集
 * @param nums
 * @returns
 * @link https://leetcode.cn/problems/subsets/
 *
 * 思路：
 * 1. 外层循环用于处理当前的数组正常循环
 * 2. 然后取得此时结果数组中的元素的长度
 * 3. 内层循环，进行循环结果数据，把当前的数组元素与结果集数组中每一项重新组合成一个新的结果项（此处结果并不会重复，因为元素互不相同）
 * 时间复杂度：O(m*n)
 * 空间复杂度：O(1)
 *
 * @todo 其它解题方案：
 * - 递归
 * - 回溯
 */

function subsets(nums: number[]): number[][] {
  const result: number[][] = new Array([]);
  for (let i = 0; i < nums.length; i++) {
    const size = result.length;
    for (let j = 0; j < size; j++) {
      result.push([...result[j], nums[i]]);
    }
  }
  return result;
}
