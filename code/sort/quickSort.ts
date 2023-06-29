/**
 * 快速排序
 * @param arr 数据
 * 时间复杂度：O(nlogn)
 * 思路：也是按照分治的方法来进行处理
 * 1.取数组的中间值为主元(pivot)
 * 2.创建两个指针（l, r），分别为数组的开始和结尾。循环临界条件为 l <= r时
 * 在左边找到>=主元的值时，停止移动(l++)l指针；在右边找到<=主元的值时，停止移动（r--）r指针
 * 如果此时 l <= r, 则两位置元素进行交换。之后l++, r--,如果最外层循环可以继续执行，则继续否则返回此时l的值。
 * 3. 如果步骤2返回的值 - 1 > left,则递归执行quick(arr, index - 1)小数组处理
 * 如果步骤2返回的值 < right, 则递归执行quick(index, right)
 * 递归结束的条件为arr的length为1时
 */
export function quickSort(arr: number[]) {
  return quick(arr, 0, arr.length - 1);
}

/**
 * 排序方法
 * @param arr
 * @param left
 * @param right
 */
function quick(arr: number[], left: number, right: number) {
  if (arr.length > 1) {
    const index = partition(arr, left, right);

    if (left < index - 1) {
      quick(arr, left, index - 1);
    }

    if (index < right) {
      quick(arr, index, right);
    }
  }
  return arr;
}

function partition(arr: number[], left: number, right: number) {
  const middle = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    // 处理left
    while (arr[left] < middle) {
      left++;
    }

    // right
    while (arr[right] > middle) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

/**
 * 交互元素
 * @param arr
 * @param l
 * @param r
 */
function swap(arr: number[], l: number, r: number) {
  const t = arr[l];
  arr[l] = arr[r];
  arr[r] = t;
}
