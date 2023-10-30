/**
 * 54. 螺旋矩阵
 * @param matrix
 * @returns
 * @link https://leetcode.cn/problems/spiral-matrix/description/
 */
function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  const row = matrix.length;
  const col = matrix[0].length;

  const maxLength = row * col;
  let row_direct = 0,
    col_direct = 0;

  while (res.length < maxLength) {
    // 向右
    while (col_direct < col && matrix[row_direct][col_direct] != 200) {
      res.push(matrix[row_direct][col_direct]);
      matrix[row_direct][col_direct] = 200;
      col_direct++;
    }
    row_direct++;
    col_direct--;

    // 向下
    while (row_direct < row && matrix[row_direct][col_direct] != 200) {
      res.push(matrix[row_direct][col_direct]);
      matrix[row_direct][col_direct] = 200;
      row_direct++;
    }
    row_direct--;
    col_direct--;
    // 向左
    while (col_direct >= 0 && matrix[row_direct][col_direct] != 200) {
      res.push(matrix[row_direct][col_direct]);
      matrix[row_direct][col_direct] = 200;
      col_direct--;
    }
    col_direct++;
    row_direct--;

    // 向上
    while (row_direct >= 0 && matrix[row_direct][col_direct] != 200) {
      res.push(matrix[row_direct][col_direct]);
      matrix[row_direct][col_direct] = 200;
      row_direct--;
    }
    row_direct++;
    col_direct++;
  }

  return res;
}
