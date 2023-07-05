import sequentialSearch from '../sequentialSearch';

describe('test sequentialSearch', () => {
  it('test sequentialSearch method', () => {
    const source = [1, 5, 6];
    const targetIndex = sequentialSearch(source, 1);
    expect(targetIndex).toEqual(0);
  });
});
