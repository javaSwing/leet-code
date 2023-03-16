/**
 * 215. 数组中的第K个最大元素
 * @link  https://leetcode.cn/problems/kth-largest-element-in-an-array/
 *
 * 空间复杂度为 O(1)
 * 时间复杂度：
 * 构建堆时的复杂度为 O(n), 在进行逐步重建的过程中为log2(n-1) , long2(n-2)，近似为 nlogn
 * 所以一般认为为 O(nlogn)
 *
 * 对于此题：因为堆排序的时间复杂度是 O(n + klog2n), 若k <= nlog2n,可时间复杂度为O(n)
 */

function findKthLargest(nums: number[], k: number): number {
  // buildMiniHeap
  for (let i = Math.floor(nums.length / 2); i >= 0; i--) {
    heapfiy(nums, nums.length, i);
  }
  let heapSize = nums.length;
  while (heapSize > 1) {
    swap(nums, 0, --heapSize);
    heapfiy(nums, heapSize, 0);
  }
  return nums[k - 1];
}

function heapfiy(arr: number[], size: number, index: number) {
  let element = index;
  let leftIndex = 2 * index + 1;
  let rightIndex = 2 * index + 2;

  if (leftIndex < size && arr[leftIndex] < arr[element]) {
    element = leftIndex;
  }

  if (rightIndex < size && arr[rightIndex] < arr[element]) {
    element = rightIndex;
  }

  if (element !== index) {
    swap(arr, element, index);
    heapfiy(arr, size, element);
  }
}

function swap(arr: number[], a: number, b: number) {
  const t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}
