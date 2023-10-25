/**
 *
 *
 * @link https://juejin.cn/post/6869571836066299912
 * @link https://zh.wikihow.com/%E8%AE%A1%E7%AE%97%E7%9F%A9%E9%98%B5%E4%B9%98%E6%B3%95
 * @link https://www.cnblogs.com/mozi-song/p/9629137.html
 */

export function matrixChainOrder(p: number[]) {
  const n = p.length;
  const m: number[][] = [];

  for (let i = 1; i <= n; i++) {
    m[i] = [];
    m[i][i] = 0;
  }

  for (let l = 2; l < n; l++) {
    for (let i = 1; i <= n - l + 1; i++) {
      const j = i + l - 1;
      m[i][j] = Number.MAX_SAFE_INTEGER;
      console.table(m);
      for (let k = i; k <= j - 1; k++) {
        const q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (q < m[i][j]) m[i][j] = q;
      }
    }
  }

  // console.table(m);
  return m[1][n - 1];
}

const p = [10, 100, 5, 50, 1];

console.log(matrixChainOrder(p));
