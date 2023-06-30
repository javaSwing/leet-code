import { quickSort } from './quickSort';

/**
 * 桶排序
 * @param arr
 * 思路：
 * 1. 一般默认的规则是，分5个桶进行排序，可以根据情况进行改变
 * 2. 根据桶的数量，对数组中的元素进行拆分（二维数组）
 * 3. 对所有桶中的数据进行排序，并合并成一个数组
 * 时间为： O(n)
 */
function bucketSort(arr: number[], bucketSize = 5) {
  if (arr.length < 2) {
    return arr;
  }

  const buckets = createBuckets(arr, bucketSize);
  return sortBucket(buckets);
}

function createBuckets(arr, bucketSize: number): number[][] {
  let min = arr[0];
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element < min) {
      min = element;
    }

    if (element > max) {
      max = element;
    }
  }

  // 计算每个桶中元素的个数
  const bucketsCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets: number[][] = [];

  // 初始
  for (let j = 0; j < bucketsCount; j++) {
    buckets[j] = [];
  }

  // 把元素分到桶中
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const bucketIndex = Math.floor((element - min) / bucketSize);
    buckets[bucketIndex].push(element);
  }

  return buckets;
}

function sortBucket(arr: number[][]) {
  const sortedArr: number[] = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    quickSort(element);
    sortedArr.push(...element);
  }
  return sortedArr;
}

export default bucketSort;
