/**
 * 基数排序
 * @param arr
 * @param radixBase
 *
 * 这里的排序算没有仔细看，记下大概的思路：
 * 如果是数字可以根据数字的效位或基数，将整数分布到桶中。然后基于桶进行排序
 */
function radixSort(arr: number[], radixBase = 10) {
  if (arr.length < 2) {
    return arr;
  }

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

  let significantDigit = 1; // 从最小的位数开始处理

  while ((max - min) / significantDigit >= 1) {
    // 根据当前的基数进行分桶排序
    arr = countingSortForRadix(arr, radixBase, significantDigit, min);
    significantDigit *= radixBase;
  }
  return arr;
}

/**
 * 根据基数进行桶排序
 * @param array
 * @param radixBase
 * @param significantDigit
 * @param minValue
 * @returns
 *
 * @todo 这里没有研究只是把代码复制过来进行了运行
 */
function countingSortForRadix(
  array: number[],
  radixBase: number,
  significantDigit: number,
  minValue: number
) {
  const buckets: number[] = [];
  const aux: number[] = [];
  for (let i = 0; i < radixBase; i++) {
    // {5}
    buckets[i] = 0;
  }
  for (let i = 0; i < array.length; i++) {
    // {6}
    const bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase); // {7}
    buckets[bucketsIndex]++; // {8}
  }
  for (let i = 1; i < radixBase; i++) {
    // {9}
    buckets[i] += buckets[i - 1];
  }
  for (let i = array.length - 1; i >= 0; i--) {
    // {10}
    const bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase); // {11}
    aux[--buckets[bucketsIndex]] = array[i]; // {12}
  }
  for (let i = 0; i < array.length; i++) {
    // {13}
    array[i] = aux[i];
  }
  return array;
}

export default radixSort;
