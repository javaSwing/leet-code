/**
 * 选择排序算法
 * @param arr
 * @description
 * 思路为找到数组中最小的数值，放到最前面。然后依次处理整个数组
 * 时间 O(n2)
 * 空间 O(1)
 *
 * 相比于冒泡排序：效率高在进行位置交换时，次数少于bubbleSort
 */

const a = [5, 4, 3, 2, 1];

const e = [5, 4, 3, 2, 1];

function selectionSort(arr: number[]) {
  let indexMin;
  for (let index = 0; index < arr.length - 1; index++) {
    indexMin = index;
    for (let j = index; j < arr.length; j++) {
      if (j !== index && arr[j] < arr[index]) {
        indexMin = j;
      }
    }
    // 这样会导致每次都进行交互
    const tmp = arr[index];
    arr[index] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  return arr;
}

console.time('selectionSort');
console.log(selectionSort(e));
console.timeEnd('selectionSort'); // 2.4ms

// book
function selectionSort2(arr: number[]) {
  let indexMin;

  for (let index = 0; index < arr.length - 1; index++) {
    indexMin = index;
    for (let j = index; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        indexMin = j;
      }
    }
    // 只有在索引不相等时候处理
    if (index !== indexMin) {
      const tmp = arr[index];
      arr[index] = arr[indexMin];
      arr[indexMin] = tmp;
    }
  }
  return arr;
}

console.time('selectionSort2');
console.log(selectionSort2(a));
console.timeEnd('selectionSort2'); // 0.292ms
