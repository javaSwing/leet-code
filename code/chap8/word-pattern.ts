/**
 * 290. 单词规律
 * @param pattern
 * @param s
 * @returns
 *
 * @link https://leetcode.cn/problems/word-pattern/description/
 *
 * 不能使用Object来代替map，因为有一个测试用例："dog constructor constructor dog"，其中constructor是js的关键字
 */
function wordPattern(pattern: string, s: string): boolean {
  const m1 = new Map(),
    m2 = new Map();
  const sArr = s.split(' ');
  if (pattern.length !== sArr.length) return false;

  for (let i = 0; i < sArr.length; i++) {
    const m = pattern[i],
      t = sArr[i];

    if ((m1.get(m) && m1.get(m) !== t) || (m2.get(t) && m2.get(t) !== m)) {
      return false;
    }

    m1.set(m, t);
    m2.set(t, m);
  }

  return true;
}
