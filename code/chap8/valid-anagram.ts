/**
 * 242. 有效的字母异位词
 * @param s
 * @param t
 * @returns
 *
 * @link https://leetcode.cn/problems/valid-anagram/description/
 */
function isAnagram(s: string, t: string): boolean {
  const map = new Map();
  for (const w of s) {
    map.set(w, map.get(w) !== undefined ? map.get(w) + 1 : 1);
  }

  for (const m of t) {
    if (map.has(m)) {
      const v = map.get(m) - 1;
      if (v === 0) {
        map.delete(m);
      } else {
        map.set(m, v);
      }
    } else {
      return false;
    }
  }

  return map.size === 0;
}
