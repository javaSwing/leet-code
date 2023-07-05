/**
 * 数组随机洗牌算法
 * @param arr
 */
function shuffle(arr: number[]) {
  for (let index = arr.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    const t = arr[index];
    arr[index] = arr[randomIndex];
    arr[randomIndex] = t;
  }

  return arr;
}

export default shuffle;
