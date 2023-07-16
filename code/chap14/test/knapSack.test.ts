import { knapSack } from '../knapSack';

describe('test dynamic programming knapSack', () => {
  it('test knapSack base method ', () => {
    const values = [3, 4, 5];
    const weights = [2, 3, 4];
    const result = knapSack(5, weights.length, weights, values);
    expect(result).toEqual(7);
  });
});
