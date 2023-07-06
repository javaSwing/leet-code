import binarySearch from '../binarySearch';

describe('test divide and conquer binarySearch', () => {
  it('test binarySearch method ', () => {
    const arr = [4, 534, 6, 2];
    const index = binarySearch(arr, 6);

    expect(index).toBeGreaterThan(-1);
  });
});
