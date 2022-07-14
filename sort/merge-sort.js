// 归并排序是一个可以实际使用的排序算法，时间复杂度为O(nlog(n))。Mozilla FireFox中Array.prototype.sort的实现就是归并排序
// 归并排序是一种分而治之算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
// 由于是分治法，归并排序也是递归的。我们要将算法分为两个函数：第一个负责将一个大数组分为多个小数组并调用用来排序的辅助函数。

function mergeSort(arr) {
  if (arr.length > 1) {
    const { length } = arr
    const middle = Math.floor(length / 2)
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle))
    arr = merge(left, right)
  }
  return arr
}

function  merge(left, right) {
  let i = 0
  let j = 0
  const res = []
  while (i < left.length && j < right.length) {
    res.push(left[i] < right[j] ? left[i++] : right[j++])
  }
  return res.concat(i < left.length ? left.slice(i) : right.slice(j))
}