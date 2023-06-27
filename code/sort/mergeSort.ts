/**
 * 归并排序
 * 思路：
 * 1. 根据数组的长度把数组中的元素进行分成两组left right
 * 2. 采用分而治之的方式，递归循环进行分组。递归的临界条件为：当数组的length为1时
 * 3. 处理数组left和right的两数组的内容进行排序，并返回一个新的数组
 *
 * 时间 O(nlogn)
 */
function mergeSort(arr: number[]) {
  const { length } = arr;
  if (length > 1) {
    const middle = Math.floor(length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle, length));
    arr = merge(left, right);
  }

  return arr;
}

function merge(left: number[], right: number[]) {
  let i = 0;
  let j = 0;
  const newArr: number[] = [];
  while (i < left.length && j < right.length) {
    // 这里的left[i++] 相当于  left[i]; i++
    newArr.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return newArr.concat(i < left.length ? left.slice(i) : right.slice(j));
}

const arrData = [7, 6, 5, 4, 3, 2, 1];

const sortArr = mergeSort(arrData);

// console.log('sortArr', sortArr);

// let i = 0;
// while (i < arrData.length) {
//   console.log('before i', i);
//   console.log(arrData[i++]);
//   console.log('after i', i);
// }
