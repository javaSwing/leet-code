/**
 * 496. 下一个更大元素 I
 * @param nums1
 * @param nums2
 * @returns
 * 暴力破解法
 */
// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//   const l = nums1.length;
//   const ans = new Array(l).fill(-1);
//   for (let i = 0; i < nums1.length; i++) {
//     const element = nums1[i];
//     let sameIndex = -1;
//     for (let j = i; j < nums2.length; j++) {
//       const num2Element = nums2[j];
//       if (element === num2Element) {
//         sameIndex = j;
//         const max = nums2.slice(j + 1).find((e) => e > num2Element);
//         if (max) {
//           ans[i] = max;
//         }
//         break;
//       }
//     }
//   }

//   return ans;
// }

/**
 * 拆解：
 * 1. 用Hash存储nums2右边最的值
 * 2. 循环nums1取出对应的值
 * 思路：
 * 找出数组中右侧下一个最大的元素？
 * 1. 倒序遍历数组
 * 2. stack中只存入比当前值大的数值，小的值循环进行pop移除
 * 3. 如果stack有值，即为最靠近当前值的最大值，否则不存在
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const l = nums2.length;
  const map = new Map<number, number>();
  const stack: number[] = [];
  for (let index = l - 1; index >= 0; index--) {
    const num = nums2[index];
    while (stack.length && num >= stack[stack.length - 1]) {
      stack.pop();
    }

    map.set(num, stack.length ? stack[stack.length - 1] : -1);
    stack.push(num);
  }

  const res = new Array<number>(nums1.length).fill(0).map((_, i) => map.get(nums1[i])) as number[];
  return res;
}

const nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];

console.log(nextGreaterElement(nums1, nums2));
