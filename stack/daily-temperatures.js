// leetcode中等每日温度
// T每日温度数组 [73,74,75,71,69,72,76,73]
// 返回等待天数列表[1,1,4,2,1,1,0,0]

const dailyTemperatures = function (T) {
  // 创建栈用于记录（存储索引值，用于记录天数）
  const stack = [0]
  let count = 1
  // 创建结果数组，先全部用0填充
  const len = T.length
  const arr = Array.from({ length: len }).fill(0)

  // 遍历T
  for (let i = 0; i < len; i++) {
    let temp = T[i]
    // 使用temp比较栈顶，如果栈顶值小，出栈（计算日期差，并存储），重复操作
    // stack[count - 1]代表栈顶值
    while (count && temp > T[stack[count - 1]]) {
      // 出栈
      let index = stack.pop()
      count--
      // 计算index与i的差值，作为index位置的升温日期的天数使用
      arr[index] = i - index
    }
    // 处理完毕，当前温度入栈（等待找到后续的更大温度）
    stack.push(i)
    count++
  }
  return arr
}