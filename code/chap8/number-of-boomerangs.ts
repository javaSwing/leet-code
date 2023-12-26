/**
 * 447. 回旋镖的数量
 * @param points
 * @returns
 *
 * @link https://leetcode.cn/problems/number-of-boomerangs/description/
 *
 * 理解
 * 1. 什么是欧式距离，公式为两点[a,b] [c,d]。距离=根号下 (a - c)的平方 + (b-d)的平方
 * 2. 排列组合问题：从N个节点中选中2个的问题公式为：n * (n - 1)
 */
function numberOfBoomerangs(points: number[][]): number {
  let count = 0;
  for (const out of points) {
    const map = new Map();
    for (const inner of points) {
      const dis =
        (out[0] - inner[0]) * (out[0] - inner[0]) + (out[1] - inner[1]) * (out[1] - inner[1]);
      map.set(dis, (map.get(dis) || 0) + 1);
    }

    // @ts-ignore
    for (const [_, value] of map.entries()) {
      count += value * (value - 1);
    }
  }

  return count;
}
