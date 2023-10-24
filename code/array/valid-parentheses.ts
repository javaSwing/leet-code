/**
 * 20. 有效的括号
 * @param s
 * @link https://leetcode.cn/problems/valid-parentheses/description/
 */
export function isValid(s: string): boolean {
  const obj = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  if ((s.length & 1) == 1) {
    // 奇数
    return false;
  }
  const map: string[] = [];

  for (let index = 0; index < s.length; index++) {
    const currentChar = s.charAt(index);
    if (obj[currentChar]) {
      map.push(currentChar);
    } else {
      if (map.length === 0) return false;
      else {
        const top = map.pop();
        if (top && currentChar !== obj[top]) return false;
      }
    }
  }
  return map.length === 0;
}
