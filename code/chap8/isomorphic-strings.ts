/**
 * 205. 同构字符串
 * @param s
 * @param t
 * @returns
 * @link https://leetcode.cn/problems/isomorphic-strings/description/
 */
function isIsomorphic(s: string, t: string): boolean {
  const s2t = {},
    t2s = {};

  for (let i = 0; i < s.length; i++) {
    const x = s[i],
      y = t[i];
    if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {
      return false;
    }

    s2t[x] = y;
    t2s[y] = x;
  }

  return true;
}
