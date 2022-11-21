/**
 * 1047. 删除字符串中的所有相邻重复项
 *
 * @param s
 * @returns
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
function removeDuplicates(s: string): string {
  if (s.length === 1) return s;

  const stack = [];
  for (let index = 0; index < s.length; index++) {
    if (stack.length && s[index] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[index]);
    }

    // const element = s[index];
    // if (!stack.length) {
    //   stack.push(element);
    // } else {
    //   const lastElement = stack[stack.length - 1];
    //   if (lastElement === element) {
    //     stack.pop();
    //   } else {
    //     stack.push(element);
    //   }
    // }
  }
  return stack.join("");
}

const s = "abbaca";

console.log(removeDuplicates(s));
