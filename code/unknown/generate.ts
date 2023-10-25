/**
 * 118. 杨辉三角
 * @param numRows
 * @returns
 * @link https://leetcode.cn/problems/pascals-triangle/description/
 */
function generate(numRows: number): number[][] {
  const res: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    res.push(new Array(i + 1).fill(1));
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }
  return res;
}
