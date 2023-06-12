/**
 * . 多数元素
 * @param nums 
 * @returns 
 * @link https://leetcode.cn/problems/majority-element/
 * 
 * 时间 O(n)
 * 空间 O(n)
 */
function majorityElement(nums: number[]): number {
    let ret = nums[0]
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const e = nums[i];
        if(map.has(e)){
            const v = map.get(e);
            map.set(e, v+1)
        } else {
            map.set(e, 1);
        }
        if(map.get(e) > nums.length / 2) {
            ret = e;
           break;
        }
    }
    return ret;

};