/**
 * 931 下降路径最小和
 * @link https://leetcode.cn/problems/minimum-falling-path-sum/description/
 *
 * O（n2）
 * 这是一个标准的动态规划问题，动态规划的标准处理流程
 *
 * 1. 写出状态转移方程（也就是把一个大的问题不断的折分成小问题）
 * 2. 状态转移在我的理解范围内就是一个重复的处理子问题的函数
 * 3. base case即为子问题的边界，也是整个规划中的边界点
 *
 * 第一个方法会因为重叠子问题的原因导致计划超时
 */
function minFallingPathSum(matrix: number[][]): number {
  const n = matrix.length;
  let res = Number.MAX_VALUE;

  for (let i = 0; i < n; i++) {
    res = Math.min(res, dp(matrix, n - 1, i));
  }

  function dp(matrix: number[][], row: number, col: number) {
    if (row < 0 || col < 0 || col >= matrix[0].length) {
      return 99999;
    }

    if (row === 0) {
      return matrix[row][col];
    }

    return (
      matrix[row][col] +
      Math.min(dp(matrix, row - 1, col), dp(matrix, row - 1, col - 1), dp(matrix, row - 1, col + 1))
    );
  }

  return res;
}

function minFallingPathSum2(matrix: number[][]): number {
  const n = matrix.length;
  let res = Number.MAX_VALUE;
  // 这里的9999是自己取的的一个不在[100 , 100]这个数组内的随机一个值
  // 初始化一个备忘录数组用于缓存数据的值
  const memo: number[][] = new Array(n).fill(null).map(() => new Array(n).fill(99999));

  for (let i = 0; i < n; i++) {
    res = Math.min(res, dp(matrix, n - 1, i, memo));
  }
  function dp(matrix: number[][], row: number, col: number, memo: number[][]) {
    // row - 1 、col + 1、col - 1这些改变会导致索引越界问题
    if (row < 0 || col < 0 || col >= matrix[0].length) {
      return 99999;
    }

    if (row === 0) {
      return matrix[row][col];
    }

    if (memo[row][col] !== 99999) {
      return memo[row][col];
    }

    memo[row][col] =
      matrix[row][col] +
      Math.min(
        dp(matrix, row - 1, col, memo),
        dp(matrix, row - 1, col - 1, memo),
        dp(matrix, row - 1, col + 1, memo)
      );

    return memo[row][col];
  }
  return res;
}
