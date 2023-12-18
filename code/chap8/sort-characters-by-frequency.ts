/**
 * 451. 根据字符出现频率排序
 * @param s
 * @returns
 *
 * @link https://leetcode.cn/problems/sort-characters-by-frequency/description/
 *
 * 关键在在排序key, 可以使用sort中获取对应的value进行排序
 */
function frequencySort(s: string): string {
  const map = {};
  let res = '';
  for (const n of s) {
    const c = (map[n] || 0) + 1;
    map[n] = c;
  }

  const keys = Object.keys(map);

  keys.sort((a, b) => map[b] - map[a]);

  for (const m of keys) {
    res += m.repeat(map[m]);
  }

  return res;
}
