/**
 * 344. 反转字符串
 * @link https://leetcode.cn/problems/reverse-string/description/
 */
function reverseString(s: string[]): void {
  const l = s.length;
  for (let i = 0; i < Math.ceil(l / 2); i++) {
    [s[i], s[l - 1 - i]] = [s[l - 1 - i], s[i]];
  }
}
