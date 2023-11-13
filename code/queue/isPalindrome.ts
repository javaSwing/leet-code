/**
 * LCR 018. 验证回文串
 * @param s
 * @returns
 * @link https://leetcode.cn/problems/XltzEq/description/
 */
function isPalindrome(s: string): boolean {
  let lowerStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let result = true;
  while (lowerStr.length > 1 && result) {
    const start = lowerStr.charAt(0);
    const end = lowerStr.charAt(lowerStr.length - 1);
    result = start === end;
    if (result) {
      lowerStr = lowerStr.substring(1, lowerStr.length - 1);
    } else {
      break;
    }
  }
  return result;
}
