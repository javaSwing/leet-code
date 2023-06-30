/**
 * 计数排序
 * @param arr
 * 时间 O(n+k)
 * 思路：
 * 1. 找到数组中元素的最大值
 * 2. 根据元素的最大值+1，创建一个计数的数组
 * 3. 循环数组进行对元素进行计数，规则如下：
 *   把源数组中元素的值，作为新数组的中的索引。如果没有初始化为0，之后进行++
 *   则此时数组中，以索引为取值点，只有在源数组中有对应值的，其值才>0
 * 4. 循环计数数组，注意此时计算数组中的index为源数组的值，value为出现在次数。循环数组已经完成了对于数组的取值
 */
function countingSort(arr: number[]) {
  if (arr.length < 2) {
    return arr;
  }

  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > max) {
      max = element;
    }
  }

  const computedArr = new Array(max + 1);

  for (let j = 0; j < arr.length; j++) {
    const element = arr[j];
    if (!computedArr[element]) {
      computedArr[element] = 0;
    }
    computedArr[element]++;
  }

  let sortIndex = 0;
  computedArr.forEach((e, i) => {
    while (e > 0) {
      arr[sortIndex++] = i;
      e--;
    }
  });
  return arr;
}

export default countingSort;
