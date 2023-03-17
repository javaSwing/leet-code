/**
 * 1337. 矩阵中战斗力最弱的 K 行
 * @link https://leetcode.cn/problems/the-k-weakest-rows-in-a-matrix/
 */

/**
 * 自己写的方法
 */
function kWeakestRows(mat: number[][], k: number): number[] {
  return mat
    .map((v, i) => ({
      index: i,
      sum: v.reduce((pre, c) => (pre = pre + c), 0),
    }))
    .sort((a, b) => (a.sum === b.sum ? a.index - b.index : a.sum - b.sum))
    .slice(0, k)
    .map((e) => e.index);
}
