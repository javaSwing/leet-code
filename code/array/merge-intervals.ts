/**
 * 56. 合并区间
 * @param intervals
 * @returns
 * @link https://leetcode.cn/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-100-liked
 */
function merge4(intervals: number[][]): number[][] {
  if (intervals.length == 1) return intervals;
  const result: number[][] = [];
  intervals.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]));
  let l = intervals[0][0];
  let r = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const start = intervals[i][0];
    const end = intervals[i][1];

    if (start > r) {
      result.push([l, r]);
      l = start;
      r = end;
    } else if (end >= r) {
      r = end;
    }
  }
  result.push([l, r]);
  return result;
}
