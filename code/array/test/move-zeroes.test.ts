import { moveZeroes } from '../move-zeroes';

describe('moveZeroes test', () => {
  it('moveZeroes test', () => {
    const arr = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
    moveZeroes(arr);
    expect(arr).toEqual([4, 2, 4, 3, 5, 1, 0, 0, 0, 0]);
  });
});
