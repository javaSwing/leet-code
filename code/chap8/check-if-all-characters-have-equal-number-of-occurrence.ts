/**
 * 1941. 检查是否所有字符出现次数相同
 * @param s
 * @returns
 *
 * @link https://leetcode.cn/problems/check-if-all-characters-have-equal-number-of-occurrences/description/
 */
function areOccurrencesEqual(s: string): boolean {
  const obj = {};
  for (const t of s) {
    if (obj[t] != undefined) {
      const v = obj[t];
      obj[t] = v + 1;
    } else {
      obj[t] = 1;
    }
  }
  return new Set(Object.values(obj)).size === 1;
}
