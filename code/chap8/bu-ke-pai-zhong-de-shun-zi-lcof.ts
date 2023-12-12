/**
 * LCR 186. 文物朝代判断
 * @param places
 * @returns
 *
 * @link https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/description/
 *
 * 排序 + 最大值 - 最小值（不为0的最小值）必定小于5
 */
function checkDynasty(places: number[]): boolean {
  let unknow = 0;
  places.sort((a, b) => a - b);
  for (let i = 0; i < places.length; i++) {
    if (places[i] === 0) unknow += 1;
    else if (places[i] == places[i + 1]) return false;
  }
  return places[places.length - 1] - places[unknow] < 5;
}
