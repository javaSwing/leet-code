import { coinChange, coinChangeDP, coinChangeMemo } from '../coinChange';

describe('test dynamic programming coinChange', () => {
  it('test coinChange base method ', () => {
    const coins = [1, 2, 4];
    const amount = 11;
    const result = coinChange(coins, amount);
    expect(result).toEqual(4);
  });

  it('test coinChangeMemo base method ', () => {
    const coins = [1, 2, 4];
    const amount = 11;
    const result = coinChangeMemo(coins, amount);
    expect(result).toEqual(4);
  });

  it('test coinChangeDP base method ', () => {
    const coins = [1, 2, 4];
    const amount = 11;
    const result = coinChangeDP(coins, amount);
    expect(result).toEqual(4);
  });
});
