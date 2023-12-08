/**
 * 383. 赎金信
 * @param ransomNote
 * @param magazine
 * @returns
 *
 * @link https://leetcode.cn/problems/ransom-note/solutions/
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map();
  for (const t of ransomNote) {
    if (map.has(t)) {
      const o = map.get(t);
      map.set(t, o + 1);
    } else {
      map.set(t, 1);
    }
  }

  for (const m of magazine) {
    if (map.has(m)) {
      const v = map.get(m) - 1;
      if (v == 0) {
        map.delete(m);
        if (map.size === 0) return true;
      } else {
        map.set(m, v);
      }
    }
  }
  return map.size === 0;
}
