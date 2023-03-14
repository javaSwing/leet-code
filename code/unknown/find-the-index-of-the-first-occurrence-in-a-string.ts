/**
 * 28. 找出字符串中第一个匹配项的下标
 * @link https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */

/**
 * 这是什么操作，算法题肯定不是这么玩的
 */
function strStr2(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

/**
 * 双指针解法
 * @param haystack
 * @param needle
 * @returns
 * 时间复杂度 O(m x n)
 * 空间 O(1)
 */
function strStr(haystack: string, needle: string): number {
  if (!needle.length) return 0;
  let nLength = needle.length,
    hLength = haystack.length;
  for (let i = 0; i + nLength <= hLength; i++) {
    // 如果当前的索引加needle的长度，与haystack的长度相同时，如果不匹配就不会再有结果。
    for (var j = 0; j < nLength; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (nLength === j) return i;
  }
  return -1;
}

// @todo KMP 解法 解法
