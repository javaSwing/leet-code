function findKthLargest(nums: number[], k: number): number {
  // buildMiniHeap
  buildMiniHeap(nums);

  let heapSize = nums.length;
  while (heapSize > 1) {
    --heapSize;

    swap(nums, 0, heapSize);

    heapUp(nums, heapSize, 0);
  }

  return nums[k - 1];
}

function buildMiniHeap(nums: number[]) {
  for (let i = Math.floor(nums.length / 2); i >= 0; i--) {
    heapUp(nums, nums.length, i);
  }
}

function heapUp(arr: number[], size: number, index: number) {
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
    heapUp(arr, size, element);
  }
}

function swap(arr: number[], a: number, b: number) {
  const t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}
