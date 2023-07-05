/**
 * 顺序搜索
 * @param arr
 * @param value
 * 这是最基本的搜索，也是最简单的
 * 没有什么好说的，一个接一个的遍历就完事了
 */
function sequentialSearch(arr: number[], value: number) {
  let resultIndex = -1;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === value) {
      resultIndex = index;
      break;
    }
  }
  return resultIndex;
}

export default sequentialSearch;
