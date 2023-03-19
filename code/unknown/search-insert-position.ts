/**
 * 35. 搜索插入位置
 * @param nums
 * @param target
 * @returns
 * @link https://leetcode.cn/problems/search-insert-position/
 *
 * 二分法查找：
 * 1. 先对数组进行排序（此题已经默认做过）
 * 2. 取数组的中间数与查找值进行比较，并且初始化左右两个变量 left right。代表最小和最大值的边
 * 3. 如果 arr[mid] < target，则left = mid + 1;
 * 4. arr[mid] >  target，则 right = right = mid - 1
 * 5. 否则返回查找到的值
 *
 *
 * 此题还存在一个值找不到情况，如果最后没有找，则该新数的位置肯定为最后left. ()
 *
 * 空间复杂度：O(1)
 * 时间：O（logn）
 */

function searchInsert(nums: number[], target: number): number {
  if (nums[nums.length - 1] < target) return nums.length;
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return left;
}
