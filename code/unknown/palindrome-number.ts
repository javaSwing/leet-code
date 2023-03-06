/**
 * 9 回文数
 * @param x
 * @returns
 * @link https://leetcode.cn/problems/palindrome-number/submissions/
 */

// function isPalindrome(x: number): boolean {
//   const rightToLeft = x.toString().split("").reverse();
//   return x.toString() === rightToLeft.join("");
// }

/**
 * 注意使用Math.floor取整数，如果除不尽x就会变成小数
 *
 * 空间复杂度：O(1)
 * 时间复杂度：O(log n)
 */

function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 == 0 && x !== 0)) return false;
  let revertNum = 0;
  while (x > revertNum) {
    revertNum = (x % 10) + revertNum * 10;
    x = Math.floor(x / 10);
  }

  // 偶数与奇数
  return x === revertNum || x === Math.floor(revertNum / 10);
}
console.log(isPalindrome(11));
