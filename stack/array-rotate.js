// 问题：反转指定数量的数组
// 如[1, 2, 3, 4, 5, 6, 7]反转3个->[5, 6, 7, 1, 2, 3, 4]

// 使用pop和unshift
// 时间复杂度为O(n^2)，空间复杂度O(1)
function rotate1(arr, k) {
  const len = arr.length
  if (!k || len === 0) return
  // 循环的时间复杂度O(n)
  for (let i = 0; i < k; i++) {
    const n = arr.pop()
    if (n != null) { // 排除null和undefined
      // 数组是一个有序结构，所以在头部插入/取出，或者中间截取都特别慢
      // unshift、shift、splice都特别慢，时间复杂度O(n)
      arr.unshift(n)
    }
  }
  return arr
}

// 将数组按块取出，然后进行拼接
// 时间复杂度为O(1)，空间复杂度O(n)
function rotate2(arr, k) {
  const len = arr.length
  if (!k || len === 0) return
  const part1 = arr.slice(-k)
  const part2 = arr.slice(0, len - k)
  const part3 = [...part1, ...part2]
  return part3
}

// 总结
// 1. 要注意算法时间复杂度（前端重时间，轻空间）
// 2. 识破内置API的时间复杂度（如unshift）