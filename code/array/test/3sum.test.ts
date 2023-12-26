import { threeSum2 } from '../3sum';

describe('three-sum test', () => {
  it('three sum test', () => {
    const arr = [-1, 0, 1, 2, -1, -4];
    const result = threeSum2(arr);

    expect(result.length).toEqual(2);
    expect(result[0]).toContain(-1);
  });
});
