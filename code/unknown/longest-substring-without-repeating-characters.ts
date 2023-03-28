/**
 *
 * @param s
 * 思路：
 * 1. 把不包含重复字符的连续字符串放到一个数组中
 * 2. max取数组中的最大长度
 *
 * 自己写的
 */
function lengthOfLongestSubstring(s: string): number {
  let length = s.length;
  let max = 0,
    tmp = "";
  for (let i = 0; i < length; i++) {
    const singleChar = s.charAt(i);
    let index = tmp.indexOf(singleChar);
    tmp += singleChar;
    if (index > -1) {
      tmp = tmp.substring(index + 1);
    }
    max = Math.max(max, tmp.length);
  }
  return max;
}

/**
 * 滑动窗体解法
 * 用两个指针：左右分别带表一个窗体的两端，
 * 1. 如果检测到在当前窗体中有重复的字符串，调整左侧指针的大小
 * 2. 循环数组进行检测是否有重复
 * 3. 然后比较此时右指针到左指针的长度，取一个最长的即可。
 *
 */

// function lengthOfLongestSubstring2();
