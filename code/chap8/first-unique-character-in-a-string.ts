/**
 * 387. 字符串中的第一个唯一字符
 * @param s
 * @returns
 * @link https://leetcode.cn/problems/first-unique-character-in-a-string/description/
 */
function firstUniqChar(s: string): number {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (typeof map[c] !== 'undefined') {
      map[c] = Number.MAX_VALUE;
    } else {
      map[c] = i;
    }
  }

  const arr = Object.keys(map);
  arr.sort((a, b) => map[a] - map[b]);
  return map[arr[0]] === Number.MAX_VALUE ? -1 : map[arr[0]];
}
