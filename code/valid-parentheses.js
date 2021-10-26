const s = "([}}])";
// 20.有效的括号
// 本题的考查点为栈，特点：后进先出
// 1.先把匹配的左边的括号放到stack中（如果开始直接是右括号也就是stack为空的情况，直接可以return false）
// 2.如果获取到的是右边的括号，则有以下几种情况：
//  a. stack为空，为false
//  b. 取出stack中的最后一位，与通过map中对应的右边括号比对，不相待直接false, 相等删除继续执行
function isValid(s) {
  if (s.length % 2 === 1) return false;
  let map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  let stack = [];
  let left = ['(', '{', '[']
 for (const i in s) {
     const v = s[i]
     if(left.indexOf(v) > -1) {
         stack.push(v)
     } else {
        if(!stack.length) return false
         const curr = stack.pop()
         if(v !== map.get(curr)) return false
     }
 }
  return stack.length === 0;
}

console.log(isValid(s));
