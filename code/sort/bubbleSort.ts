
/**
 * 冒泡排序
 * @param arr 
 * @description
 * 冒泡排序：拿当前位置的值与后面的每一个值进行比较，如果当前位置比后面的大。两者位置进行交换，数组中有多少元素，则需要循环多少次
 */
function bubbleSort(arr: number[]) {
    for (let index = 0; index < arr.length; index++) {
       for(let j = 0; j < arr.length - 1; j++ ) {
        if(arr[j] > arr[j+1]) { // 交换位置
            const t = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = t;
        }
       }        
    }
    return arr;
}

/**
 * 优化版本，主要是减少循环的次数，循环一次之后，最大的值必定放到最后一位，所以后续没有必要再循环该位置
 * @param arr 
 * @returns 
 */

function bubbleSort2(arr: number[]) {
    for (let index = 0; index < arr.length; index++) {
       for(let j = 0; j < arr.length - 1 - index; j++ ) {
        if(arr[j] > arr[j+1]) { // 交换位置
            const t = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = t;
        }
       }        
    }
    return arr;
}

const arr  = [5,3,1,6];
console.time('bubbleSort');
console.log(bubbleSort(arr))
console.timeEnd('bubbleSort')

console.time('bubbleSort2');
console.log(bubbleSort2(arr))
console.timeEnd('bubbleSort2')