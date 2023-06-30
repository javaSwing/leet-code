import countingSort from '../countingSort';

describe('test countingSort', () => {
  it('test countingSort method', () => {
    const source = [32, 4354, 12, 1, 5, 6];
    const newArr = countingSort(source);
    expect(newArr).toEqual([1, 5, 6, 12, 32, 4354]);
  });
});
