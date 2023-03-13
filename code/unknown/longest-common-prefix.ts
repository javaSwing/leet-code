/**
 * 14. 最长公共前缀
 * @link https://leetcode.cn/problems/longest-common-prefix/
 */

// 暴力破解法
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  let result = "";
  const [first, ...rest] = strs;
  for (let i = 0; i < first.length; i++) {
    const t = first[i];
    if (rest.every((r) => r.startsWith(result + t))) {
      result += t;
    } else {
      break;
    }
  }
  return result;
}

/**
 * 改进版本
 * 找出字符串的最大值和最小值，只需要查找到这两个字符中间重复的字符就是开始，重复的字符
 * @param strs
 * @returns
 * 时间复杂度 O(m,n)
 * 空间O(1)
 */
function longestCommonPrefix2(strs: string[]): string {
  if (strs.length === 0) return "";
  strs = strs.sort();
  let min = strs[0],
    max = strs[strs.length - 1],
    result = "";
  for (let i = 0; i < min.length; i++) {
    if (max.startsWith(result + min[i])) {
      result += min[i];
    } else {
      break;
    }
  }
  return result;
}
