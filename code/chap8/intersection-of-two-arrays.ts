/**
 * 349. 两个数组的交集
 * @param nums1
 * @param nums2
 * @returns
 *
 * @link https://leetcode.cn/problems/intersection-of-two-arrays/description/
 */
function intersection(nums1: number[], nums2: number[]): number[] {
  const map: number[] = [];
  const minLengthArr = nums1.length >= nums2.length ? nums2 : nums1;
  const maxLengthArr = nums1.length >= nums2.length ? nums1 : nums2;

  for (let i = 0; i < minLengthArr.length; i++) {
    const e = minLengthArr[i];
    if (maxLengthArr.indexOf(e) > -1 && map.indexOf(e) === -1) {
      map.push(e);
    }
  }

  return map;
}
