import { maxSubArray } from '../maximum-subarray';

describe('maximum-subarray test', () => {
  it('maximum-subarray', () => {
    const arr = [-2,1,-3,4,-1,2,1,-5,4];
    const result = maxSubArray(arr);
    expect(result).toEqual(6);
  });
});
