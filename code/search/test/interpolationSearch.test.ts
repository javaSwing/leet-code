import interpolationSearch from '../interpolationSearch';

describe('test interpolationSearch', () => {
  it('test interpolationSearch method', () => {
    const source = [1, 5, 6];
    const targetIndex = interpolationSearch(source, 1);
    expect(targetIndex).toEqual(0);
  });
});
