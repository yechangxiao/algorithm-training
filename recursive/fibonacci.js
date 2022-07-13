// 0 1 1 2 3 5 8 13 21 34...等。
// 斐波那契数列的定义如下
// 位置0的数是0，位置1和2的数是1，位置n(n>2)的数是位置（n-1）的数加上位置（n-2）的数

// 用迭代的方法实现fibonacci函数
function fibonacciIterative(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  let fibMinus2 = 0
  let fibMinus1 = 1
  let fibN = 0
  for (let i = 2; i <= n; i++) {
    fibN = fibMinus2 + fibMinus1
    fibMinus2 = fibMinus1
    fibMinus1 = fibN
  }
  return fibN
}

// 用递归的方法实现fibonacci函数
function fibonacci(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fibonacci(n-2) + fibonacci(n-1)
}

// 记忆化fibonacci函数
// 使用递归的时候，计算位置n的时候，n-2及前面的值都会被最少被调用2次，比如fibonacci(5)，则fibonacci(3)被计算两次
function fibonacciMemoization(n) {
  const memo = [0, 1]
  const fibonacci = (n) => {
    if (memo[n] !== undefined) return memo[n]
    return memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
  }
  return fibonacci
}
