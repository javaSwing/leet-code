const nums = [3,2,4];
const target = 6;

/**
 * 两数之和
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 * @description 此写法的时间复杂度为 o(n^2),进行了两次循环
 */
// function twoSum(nums, target) {
//     let result = [];
//     nums.forEach((n, i) => {
//         for (let index = i + 1; index < nums.length; index++) {
//             const element = nums[index];
//             if(element + n === target) {
//                 result.push(i, index)
//                 // result.push(index)
//             } 
//         }
//     })
//     return result;
// }

/**
 * 两数之和
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 * @description 利用多声明一个对象，以空间换时间
 */
function twoSum(nums, target) {
    let map = {};
    for (let index = 0; index < nums.length; index++) {
        const current = nums[index];
        const other = target - current;
        if(map[other] !== undefined) {
            return [map[other], index]
        } 
        map[current] = index;
    }
}

console.log(twoSum(nums, target));