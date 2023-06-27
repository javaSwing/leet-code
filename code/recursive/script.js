/**
 * 迭代写法
 */
function factorialIterative(num) {
  let result = 1;
  // if(num <= 2) return num;
  for (let index = 1; index <= num; index++) {
    result *= index;
  }
  return result;
}

/**
 * 递归写法
 * @param {*} num
 */

function factorialRecursive(num) {
  if (num === 0 || num === 1) return 1;
  if (num < 0) return;
  return num * factorialRecursive(num - 1);
}

try {
  // console.log(factorialRecursive(5))
} catch (error) {
  console.error(error);
}

// ------------------------------------ 斐波那契数列

// N 代表数列的位数

function fibonacciIterative(num) {
  if (num < 1) return 0;
  if (num === 1 || num === 2) return 1;

  let res = 0;
  let f1 = 0;
  let f2 = 1;
  //   正向迭代 初始化为0，所以迭代次数为：位数 - 1
  for (let index = 0; index < num - 1; index++) {
    res = f1 + f2;
    f1 = f2;
    f2 = res;
  }

  return res;
}

function fibonacciIterative3(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    // n >= 2
    fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}

// console.log(fibonacciIterative3(3));

function fibonacciRecursive(num) {
  if (num < 1) return 0;
  if (num === 1 || num === 2) return 1;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

function fibonacci(n) {
  if (n < 1) return 0; // {1}
  if (n <= 2) return 1; // {2}
  return fibonacci(n - 1) + fibonacci(n - 2); // {3}
}

// console.log(fibonacci(3));

function fibonacciMemo(num) {
  const memo = [0, 1]; // 结果缓存数组
  if (memo[num] !== null) return memo[num]; // 直接从缓存取结果
  return (memo[num] = fibonacciMemo(num - 1) + fibonacciMemo(num - 2));
}

function fibonacciMemoization(n) {
  const memo = [0, 1]; // {1}
  const fibonacci = (n, memo) => {
    if (memo[n] != null) return memo[n]; // {2}
    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)); // {3}
  };
  return fibonacci(n, memo);
}

console.log(fibonacciMemoization(5));
