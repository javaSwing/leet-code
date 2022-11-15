/**
 * 1021. 删除最外层的括号
 * @param s
 * @link https://leetcode.cn/problems/remove-outermost-parentheses/
 * 时间复杂度 O(n)
 * 空间复杂度 O(n) 随着字符串的长度增长targetStr空间量也在增长
 */

// function removeOuterParentheses(s: string): string {
//   let count = 0,
//     i = 0,
//     targetStr = "";

//   for (let index = 0; index < s.length; index++) {
//     const element = s[index];
//     if (element === "(") {
//       count++;
//     } else {
//       count--;
//     }

//     if (count === 0) {
//       targetStr += s.substring(i + 1, index);
//       i = index + 1;
//     }
//   }

//   return targetStr;
// }

function removeOuterParentheses(s: string): string {
  let res = "";
  const stack = [];
  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    if (element === ")") {
      stack.pop();
    }

    if (stack.length) {
      res += element;
    }

    if (element === "(") {
      stack.push(element);
    }
  }
  return res;
}

const testStr = "(()())(())";

console.log(removeOuterParentheses(testStr));
