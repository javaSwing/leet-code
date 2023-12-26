/**
 * 49. 字母异位词分组
 * @param strs
 * @returns
 *
 * @link https://leetcode.cn/problems/group-anagrams/description/
 */
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();

  for (const s of strs) {
    const arrS = Array.from(s);
    arrS.sort();
    const k = arrS.toString();
    const r = map.get(k) || [];
    r.push(s);
    map.set(k, r);
  }

  return Array.from(map.values());
}
