import { quickSort } from '../sort/quickSort';

/**
 * 内插搜索是二分搜索的一个改良版本
 * 比如：数组中数据比较平均的性能较好，其它的性能一般
 * 整体思路：
 * 1. 使用position公式选中一个值
 * 2. 如果这个值是搜索值，则返回程序结束
 * 3. 如果这个值比搜索值小，则执行 1， low= position + 1
 * 4. 如果这个值比搜索值大，则执行2，hight = position  - 1
 *
 * 书中没有说差值的计算公式：
 * - 插值：（搜索值 - 最小值）/ (最大值 - 最小值)
 * - 插索引值：low + Math.floor((最大值索引 - 最小值索引) * 插值)
 *
 * 最坏时间复杂度O(n)，最好时间复杂度O(1)，平均时间复杂度O(log₂(log₂n))。
 *
 * 参考：
 * 1. https://www.cnblogs.com/bonelee/p/6591384.html
 * 2. https://www.cnblogs.com/magic-sea/p/11379336.html
 */
function interpolationSearch(arr: number[], target: number) {
  const targetIndex = -1;
  const sortArr = quickSort(arr);
  let low = 0;
  let hight = sortArr.length - 1;
  let position = -1;
  let delta = -1;

  while (low <= hight && target >= sortArr[low] && target <= sortArr[hight]) {
    delta = (target - sortArr[low]) / (sortArr[hight] - sortArr[low]);
    position = low + Math.floor((hight - low) * delta);

    if (sortArr[position] === target) {
      return position;
    } else if (sortArr[position] > target) {
      hight = position - 1;
    } else {
      low = position + 1;
    }
  }

  return targetIndex;
}

export default interpolationSearch;
