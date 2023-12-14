// 阶乘

export function factorialIterative(num: number) {
  if (num < 0) return;
  let total = 1;
  for (let n = num; n > 1; n--) {
    total *= n;
  }
  return total;
}

export function factorial(num: number) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// 斐波那契数列
export function fibonacciIterative(n: number) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  let fibN = n;
  let fib1 = 0;
  let fib2 = 1;
  for (let i = 2; i <= n; i++) {
    fibN = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibN;
  }

  return fibN;
}

export function fibonacci(n: number) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function fibonacciMemo(n: number) {
  const memo = [0, 1];

  return fibFun(n, memo);
}

function fibFun(n: number, memo: Record<string, any>) {
  if (memo[n] != null) return memo[n];
  const v = fibFun(n - 1, memo) + fibFun(n - 2, memo);
  memo[n] = v;
  return v;
}
