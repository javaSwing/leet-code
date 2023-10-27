/**
 * 88. 合并两个有序数组
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 * @returns
 *
 * @link https://leetcode.cn/problems/merge-sorted-array/description/
 * 思路：
 * 1. 倒序查找两个数组（数组是递增的且nums1的最后n位是空的，所以倒序是最好的）
 * 2. while循环和处理是谁把对位的位置 p1 p2进行了处理，对的指针进行--
 * 3. 在某一数据先移动到边界时，只移动另外一个数组即可
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let allLength = m + n - 1;
  let target;

  // 这里的 x = nums[p--] 实际等于 x = nums[p]; p--;
  while (p1 >= 0 || p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      target = nums1[p1--];
    } else if (p1 === -1) {
      target = nums2[p2--];
    } else if (p2 === -1) {
      target = nums1[p1--];
    } else {
      target = nums2[p2--];
    }
    nums1[allLength--] = target;
  }
}


/**
 * 暴力化方案
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, nums1.length -m, ...nums2);
  nums1.sort((a, b) => a-b);
}



