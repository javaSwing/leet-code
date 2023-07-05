/**
 * 二分搜索
 * @param arr
 * @param value
 * 理解：
 * 1. 数组要先经过排序,找到数组的中间位置
 * 2. 如果中间值与查找值相同，则无返回，结束
 * 3. 循环条件为 low和high不同。把查找值与中间值进行比较，如果中间值>查找值，则中间索引 - 1
 * 4，如果中间值 < 查找值，则中间索引 + 1
 */

import { quickSort } from '../sort/quickSort';

function binarySearch(arr: number[], value: number) {
  const sortArr = quickSort(arr);
  const targetIndex = -1;
  const { length } = sortArr;
  let low = 0;
  let hight = length - 1;

  while (low <= hight) {
    const mid = Math.floor(hight - low / 2);
    if (value > sortArr[mid]) {
      low = mid + 1;
    } else if (value < sortArr[mid]) {
      hight = mid - 1;
    } else {
      return mid;
    }
  }

  return targetIndex;
}

export default binarySearch;
