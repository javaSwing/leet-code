import { merge } from '../merge-sorted-array';

describe('merge-sorted-array test', () => {
  it('merge-sorted-arraytest', () => {
    const numsA = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const numsB = [2, 5, 6];
    const n = 3;
    merge(numsA, m, numsB, n);
    expect(numsA).toEqual([1, 2, 2, 3, 5, 6]);
  });
});
