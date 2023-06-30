import radixSort from '../radixSort';

describe('test radixSort', () => {
  it('test radixSort method', () => {
    const source = [32, 4354, 12, 1, 5, 6];
    const newArr = radixSort(source);
    expect(newArr).toEqual([1, 5, 6, 12, 32, 4354]);
  });
});
