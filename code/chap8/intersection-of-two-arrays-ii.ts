/**
 * 350. 两个数组的交集 II
 * 这个用的是最笨的方法，效率很低
 * @param nums1
 * @param nums2
 * @returns
 * @link https://leetcode.cn/problems/intersection-of-two-arrays-ii/description/
 */
export function intersect(nums1: number[], nums2: number[]): number[] {
  const res: number[] = [];
  const obj1 = {};
  for (let i = 0; i < nums1.length; i++) {
    const e = nums1[i];
    if (obj1[e] !== undefined) {
      obj1[e] = obj1[e] + 1;
    } else {
      obj1[e] = 1;
    }
  }

  const obj2 = {};
  for (let i = 0; i < nums2.length; i++) {
    const e = nums2[i];
    if (obj2[e] !== undefined) {
      obj2[e] = obj2[e] + 1;
    } else {
      obj2[e] = 1;
    }
  }

  for (let t = 0; t < Object.keys(obj1).length; t++) {
    const key = Object.keys(obj1)[t];
    if (obj2[key] !== undefined) {
      if (obj1[key] === obj2[key]) {
        res.push(...new Array(obj1[key]).fill(key));
      } else {
        const min = Math.min(obj1[key], obj2[key]);
        res.push(...new Array(min).fill(key));
      }
    }
  }

  return res;
}

/**
 * 优化版本
 * @param nums1
 * @param nums2
 * @returns
 */
function intersect2(nums1: number[], nums2: number[]): number[] {
  const res: number[] = [];
  const obj1 = {};
  const minArr = nums1.length > nums2.length ? nums2 : nums1;
  for (let i = 0; i < minArr.length; i++) {
    const e = minArr[i];
    if (obj1[e] !== undefined) {
      obj1[e] = obj1[e] + 1;
    } else {
      obj1[e] = 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    const e = nums2[i];
    if (obj1[e] !== undefined) {
      const newV = obj1[e] - 1;
      newV === 0 ? delete obj1[e] : (obj1[e] = newV);
      res.push(e);
    }
  }

  return res;
}
