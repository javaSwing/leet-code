/**
 * 18. 四数之和
 * @param nums
 * @param target
 * @returns
 * @link https://leetcode.cn/problems/4sum/description/
 *
 * 与三数之和类型，但是要注意去重
 * 第二个循环中 j > i + 1;这一点很关键
 */
export function fourSum(nums: number[], target: number): number[][] {
  const len = nums.length;
  if (len < 4) return [];
  nums.sort((a, b) => a - b);
  const res: number[][] = [];
  for (let i = 0; i < len - 3; i++) {
    const first = nums[i];
    if (i > 0 && first == nums[i - 1]) continue;

    if (first + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (first + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;

    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;

      if (first + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (first + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;

      let L = j + 1,
        R = len - 1;

      while (L < R) {
        const sum = first + nums[j] + nums[L] + nums[R];

        if (sum === target) {
          res.push([first, nums[j], nums[L], nums[R]]);

          while (L < R && nums[L] == nums[L + 1]) {
            L++;
          }

          while (L < R && nums[R] == nums[R - 1]) {
            R--;
          }

          L++;
          R--;
        } else if (sum > target) {
          R--;
        } else if (sum < target) {
          L++;
        }
      }
    }
  }

  return res;
}
