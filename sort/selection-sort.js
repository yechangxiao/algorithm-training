// 选择排序：一种原址比较排序算法。找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。
// 选择排序的时间复杂度为O(n^2)

function selectionSort(arr) {
  const { length } = arr
  let indexMin = 0
  for (let i = 0; i < length - 1; i++) {
    indexMin = i
    for (let j = i; j < length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
    }
  }
  return arr
}
