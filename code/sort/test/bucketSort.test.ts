import bucketSort from '../bucketSort';

describe('test bucketSort', () => {
  it('test bucketSort method', () => {
    const source = [32, 4354, 12, 1, 5, 6];
    const newArr = bucketSort(source);
    expect(newArr).toEqual([1, 5, 6, 12, 32, 4354]);
  });
});
