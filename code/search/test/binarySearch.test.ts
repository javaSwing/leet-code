import binarySearch from '../binarySearch';

describe('test binarySearch', () => {
  it('test binarySearch method', () => {
    const source = [1, 5, 6];
    const targetIndex = binarySearch(source, 1);
    expect(targetIndex).toEqual(0);
  });
});
