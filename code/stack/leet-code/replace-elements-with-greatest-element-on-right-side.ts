// function replaceElements(arr: number[]): number[] {
//   if (arr.length === 1) return [-1];

//   const target = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) {
//       target.push(-1);
//     } else {
//       const other = arr.slice(i + 1);
//       const stack = [];
//       other.forEach((e) => {
//         if (!stack.length) stack.push(e);
//         else if (stack[stack.length - 1] < e) {
//           stack.pop();
//           stack.push(e);
//         }
//       });
//       target.push(...stack);
//     }
//   }
//   return target;
// }
/**
 * 1299. 将每个元素替换为右侧最大元素
 * @param arr
 * @returns
 * 时间为 O(n)
 * 空间为 O(1)
 */

function replaceElements(arr: number[]): number[] {
  if (arr.length === 1) return [-1];
  for (let i = 0; i < arr.length; i++) {
    const right = arr.slice(i + 1);
    if (right.length === 0) {
      arr[i] = -1;
    } else {
      arr[i] = Math.max(...right);
    }
  }
  return arr;
}

const ar = [17, 18, 5, 4, 6, 1];

console.log(replaceElements(ar));
