/**
 * 415. 字符串相加
 * @param num1
 * @param num2
 * @returns
 * @link https://leetcode.cn/problems/add-strings/
 */
function addStrings(num1: string, num2: string): string {
    let result:number[] = [];
    const maxLenth = Math.max(num1.length, num2.length);
    if(maxLenth > num1.length) {
        num1 = '0'.repeat(maxLenth - num1.length) +num1;
    }

    if(maxLenth > num2.length) {
        num2 = '0'.repeat(maxLenth - num2.length) + num2;
    }

    let more = 0;
    for(let i = maxLenth -1; i >=0; i--) {
        let n1 = num1[i];
        let n2 = num2[i];

        let sum = +n1 + +n2 + more;

        if(sum > 9) {
            more = 1;
            sum = sum % 10;
        } else {
            more = 0;
        }

        result.push(sum)
    }

    more > 0?  result.push(more): result

    return result.reverse().join('');
};
