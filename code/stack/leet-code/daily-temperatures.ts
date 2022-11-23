/**
 * 739. 每日温度
 * 双循环
 * @param temperatures
 * @returns
 * 时间为 O(n2)
 * 空间 O(n)
 */
// function dailyTemperatures(temperatures: number[]): number[] {
//   const arr = new Array(temperatures.length).fill(0);
//   for (let index = 0; index < temperatures.length; index++) {
//     for (let j = index; j < temperatures.length; j++) {
//       if (temperatures[j] > temperatures[index]) {
//         arr[index] = j - index;
//         break;
//       }
//     }
//   }
//   return arr;
// }

/**
 * 使用栈的思路
 * 题中的要求：比今天温度高的天气，计算时间差（并没有说计算最小值）
 * 使用栈就是，正向循环数据，拿当前的温度与栈中最后索引的温度相比
 * 当前温度比stack的高直接更新数组中对应位置的天数，并且从栈中移除该索引
 *
 * 重点：
 * 1. stack 存储的是索引
 * 2. 正向循环数组
 *
 * 时间为：O(n)
 * 空间为：O(n)
 **/
function dailyTemperatures(temperatures: number[]): number[] {
  const stack = [];
  const l = temperatures.length;
  const arr = new Array(l).fill(0);
  for (let index = 0; index < temperatures.length; index++) {
    while (
      stack.length > 0 &&
      temperatures[index] > temperatures[stack[stack.length - 1]]
    ) {
      const pre = stack.pop();
      arr[pre] = index - pre;
    }

    stack.push(index);
  }
  return arr;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
