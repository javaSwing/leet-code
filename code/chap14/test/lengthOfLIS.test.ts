import { lengthOfLIS } from '../lengthOfLIS';

describe('test dynamic programming lengthOfLIS', () => {
  it('test lengthOfLIS base method ', () => {
    const coins = [10, 9, 2, 5, 3, 7, 101, 18];
    const result = lengthOfLIS(coins);
    expect(result).toEqual(4);
  });
});
