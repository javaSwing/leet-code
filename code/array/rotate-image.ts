/**
 * 48. 旋转图像
 *
 * @link https://leetcode.cn/problems/rotate-image/description/
 * @link 参考题解：https://leetcode.cn/problems/rotate-image/solutions/1120878/48-xuan-zhuan-tu-xiang-by-chen-wei-f-d5pt/
 *
 * 理解：这里的解法参考了一个题解，感觉真的是天才的想法也是最容易理解的方法
 *
 * 把一个图旋转90度可以拆解成以下方法：
 * 1. 水平中线翻转
 * 2. 左对角线翻转即可是正确的答案
 *
 * 注：另外，交换数据最好使用es6的数组结构，方便且直观。缺点就是在书上说过，性能上明显低于临时变量交换的性能
 */
export function rotate(matrix: number[][]): void {
  const n = matrix.length;
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - 1 - i][j]] = [matrix[n - 1 - i][j], matrix[i][j]];
    }
  }

  // 按左侧水平中线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (i != j) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
  }
}
