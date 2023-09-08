// 穷举，以数组为内容的所有的排列组合
function permuteRepeat(nums: number[]) {
  const res: number[][] = [];
  // 计划组合的存储数组
  const track: number[] = [];

  computedTrack(nums);

  function computedTrack(n: number[]) {
    if (n.length === track.length) {
      res.push([...track]); // 复制一份否则会有一个相同的引用
      return;
    }

    for (let i = 0; i < n.length; i++) {
      track.push(n[i]);
      computedTrack(n);
      track.pop();
    }
  }

  return res;
}

/**
 * 139. 单词拆分
 * @param s
 * @param wordDict
 * @returns
 *
 * @link https://leetcode.cn/problems/word-break/solutions/
 * 该方法直接使用会，超出时间限制
 */
function wordBreak(s: string, wordDict: string[]): boolean {
  let flag = false;
  const track: string[] = [];

  function genTrack(s: string, i: number) {
    if (flag) return;

    if (i === s.length) {
      flag = true;
      return;
    }
    for (let j = 0; j < wordDict.length; j++) {
      const element = wordDict[j];
      const len = element.length;

      if (s.substring(i, i + len) === element && len + i <= s.length) {
        track.push(element);
        genTrack(s, i + len);
        track.pop();
      }
    }
  }
  genTrack(s, 0);
  return flag;
}

