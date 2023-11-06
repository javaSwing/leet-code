/**
 * 66. 加一
 * @param digits
 * @returns
 *
 * @link https://leetcode.cn/problems/plus-one/description/
 */
function plusOne(digits: number[]): number[] {
  const res: number[] = [];
  let addion = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    const c = digits[i];
    let sum = 0;
    if (i === digits.length - 1) {
      sum = c + 1;
    } else {
      sum = c + addion;
    }
    addion = 0;

    if (sum > 9) {
      addion = sum / 10;
      sum = sum - 10;
    }

    res.push(sum);

    if (i === 0 && addion > 0) {
      res.push(addion);
    }
  }

  return res.reverse();
}
