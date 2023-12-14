import {
  factorial,
  factorialIterative,
  fibonacci,
  fibonacciIterative,
  fibonacciMemo,
} from '../book';

describe('test book code', () => {
  it('test factorialIterative method', () => {
    const res = factorialIterative(5);

    expect(res).toBe(120);
  });

  it('test factorial method', () => {
    const res = factorial(5);

    expect(res).toBe(120);
  });

  it('test fibonacciIterative method', () => {
    const res = fibonacciIterative(5);

    expect(res).toBe(5);
  });

  it('test fibonacci method', () => {
    const res = fibonacci(5);

    expect(res).toBe(5);
  });

  it('test fibonacciMemo method', () => {
    const res = fibonacciMemo(5);

    expect(res).toBe(5);
  });
});
