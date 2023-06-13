/**
 * 插入排序
 * 理解：
 * 就像我们打牌一样，从左->右，依次为 A 2 3 4 5 ...从小到大的顺序（当然这是我们排好牌的情况下）。
 * 码牌的过程和插入排序一样：把最右边的牌依次向左边每一张牌比较，放在合适的位置，当右边的牌处理完的情况下。整个牌也就处理好了。
 * 
 * 当然这里有一个点：默认情况下你第一张是处理正常的不做处理
 */



function insertSort(arr: number[]) {
    for (let index = 1; index < arr.length; index++) {
        let j = index;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let tmp = arr[j];
            arr[j] = arr[j-1]
            arr[j-1] = tmp;
            j--
        } 
    }
    return arr
}


function insertSort2(arr: number[]) {
    let tmp;
    for (let index = 1; index < arr.length; index++) {
        let j = index;
        tmp = arr[index]
        // 如果存在左边值大于右边且j > 0的情况
        while (j > 0 && arr[j - 1] > tmp) {
            arr[j] = arr[j-1] // 把左边值与相邻的右边交换
            j--
        } 
        arr[j] = tmp // 执行完之后此时j，1. 与index完全相同 2.发生交换后，左侧交换的位置
    }
    return arr
}

const insertSortTestArr = [5, 4, 3, 2, 1];

console.time("insertSort2");
console.log(insertSort2(insertSortTestArr));
console.timeEnd("insertSort2"); 