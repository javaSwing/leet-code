import { quickSort } from '../quickSort';

describe('quickSort test', () => {
  it('check sort method', () => {
    const testArr = [8, 6, 5, 1, 88, 30, 2, 19];
    quickSort(testArr);
    expect(testArr).toEqual([1, 2, 5, 6, 8, 19, 30, 88]);
  });
});
