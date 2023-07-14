import { fib, fibDp, fibDpImprovement, fibMemo } from '../fib';

describe('test dynamic programming fib', () => {
  it('test fib base method ', () => {
    const n = 4;
    const result = fib(n);
    expect(result).toEqual(3);
  });

  it('test fibMemo method ', () => {
    const n = 4;
    const result = fibMemo(n);
    expect(result).toEqual(3);
  });

  it('test fibDp method ', () => {
    const n = 4;
    const result = fibDp(n);
    expect(result).toEqual(3);
  });

  it('test fibDpImprovement method ', () => {
    const n = 4;
    const result = fibDpImprovement(n);
    expect(result).toEqual(3);
  });
});
