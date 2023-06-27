import { type CompareType, COMPARE_ENUM, defaultCompare } from './util';

export function heapSort(arr: number[], compareFn = defaultCompare) {
  let heapSize = arr.length;
  buildMaxHeap(arr, compareFn);

  console.log('buildMaxHeap', arr);

  while (heapSize > 1) {
    swap(arr, 0, --heapSize);
    heapify(arr, 0, heapSize, compareFn);
  }
  return arr;
}

// 把一个数组转换为最大堆
function buildMaxHeap(arr: number[], compareFn) {
  // 这里Math.floor表示只对数组的前半部分进行操作, 后半部分都是子节点，没有必须进行siftDown,因为他的左右节点为空
  for (let i = Math.floor(arr.length / 2); i >= 0; i -= 1) {
    heapify(arr, i, arr.length, compareFn);
  }
}

function heapify(arr: number[], index: number, size: number, compareFn: CompareType) {
  let element = index;
  const leftIndex = 2 * index + 1;
  const rightIndex = 2 * index + 2;

  if (leftIndex < size && compareFn(arr[leftIndex], arr[element]) === COMPARE_ENUM.BIGGER_THAN) {
    element = leftIndex;
  }

  if (rightIndex < size && compareFn(arr[rightIndex], arr[element]) === COMPARE_ENUM.BIGGER_THAN) {
    element = rightIndex;
  }

  if (element !== index) {
    swap(arr, element, index);
    heapify(arr, element, size, compareFn);
  }
}

function swap(arr: number[], a: number, b: number) {
  const t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}

const array = [7, 6, 3, 5, 4, 1, 2, 9];
console.log('Before sorting: ', array);
console.log('After sorting: ', heapSort(array));
