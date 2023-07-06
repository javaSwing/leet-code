import { quickSort } from '../sort/quickSort';

function binarySearchRecursive(arr: number[], value: number, low: number, hight: number) {
  const defaultValue = -1;
  if (low <= hight) {
    const mid = Math.floor((hight + low) / 2);
    if (arr[mid] > value) {
      return binarySearchRecursive(arr, value, low, mid - 1);
    } else if (arr[mid] < value) {
      return binarySearchRecursive(arr, value, mid + 1, hight);
    } else {
      return mid;
    }
  }
  return defaultValue;
}

export default function binarySearch(arr: number[], value: number) {
  const sortArr = quickSort(arr);
  const low = 0;
  const hight = sortArr.length - 1;
  return binarySearchRecursive(sortArr, value, low, hight);
}
