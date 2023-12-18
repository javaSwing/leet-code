/**
 * 128. 最长连续序列
 * @param nums
 * @returns
 *
 * @link https://leetcode.cn/problems/longest-consecutive-sequence/description/
 *
 * 自己写的方法，但是使用了sort，在js中sort并是O(n)的复杂度，所以不能使用排序
 *
 * 哈希表在js中表现有两种  set 和map, set一般可以直接去重
 */
function longestConsecutive(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const map = new Map();
  let pre;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const c = nums[i];
    if (c - pre > 1 && i > 0) {
      result = Math.max(map.size, result);
      map.clear();
    }
    map.set(c, c);
    pre = c;
  }

  return Math.max(map.size, result);
}

/**
 * 使用set
 * @param nums
 * @returns
 */
function longestConsecutive2(nums: number[]): number {
  const set = new Set(nums); // 去重
  let rest = 0;
  for (const n of nums) {
    if (set.has(n - 1)) {
      // 如果小于当前数，跳过不处理
      continue;
    }

    let curret = n;
    let currentLong = 1;
    while (set.has(curret + 1)) {
      currentLong++;
      curret++;
    }

    rest = Math.max(rest, currentLong);
  }

  return rest;
}
