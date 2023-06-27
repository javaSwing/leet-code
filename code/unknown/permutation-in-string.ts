/**
 * 567. 字符串的排列
 * @param s1
 * @param s2
 * @link https://leetcode.cn/problems/permutation-in-string/
 *
 * 思路：根据题解来总结，如果s2中包含s1的字符串的排印，只要最终两个数组的长度一样就可以没有所s1的所有组合排列出来进行枚举
 *
 * 有一点：题目中说了 s1和s2只包含小写字母也就是说只有26个而已，在unicode中 a-z是连续的，然后递增1
 */
function checkInclusion(s1: string, s2: string): boolean {
  const s1Length = s1.length;
  const s2Length = s2.length;

  //   长度小于不存在
  if (s2Length < s1Length) return false;
  //  相等时直接返回
  if (s1 === s2) return true;

  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);

  const aUniCode = 'a'.charCodeAt(0);

  // 第一循环以s1为基准

  for (let i = 0; i < s1Length; i++) {
    // 取出当前索引下的字符串，获取其unicode值 - a的unicode值，即为在count数组中对应字符的数量
    count1[s1.charCodeAt(i) - aUniCode]++;
    count2[s2.charCodeAt(i) - aUniCode]++;
  }

  // 如果只循环一次s1字符，两count相等。即直接为true
  if (count1.toString() === count2.toString()) return true;

  for (let i = s1Length; i < s2Length; i++) {
    count2[s2.charCodeAt(i) - aUniCode]++;

    // 这里把第一次循环的字符串值给去掉，即只处理从s1长度开始到s2字符结束内字符串的各数
    count2[s2.charCodeAt(i - s1Length) - aUniCode]--;

    if (count1.toString() === count2.toString()) return true;
  }

  return false;
}
