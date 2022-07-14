function bubbleSort(arr) {
  const { length } = arr
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}

// 改进后的冒泡，对于前面已经排好序的不再进行对比
function modifiedBubbleSort(arr) {
  const { length } = arr
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}

// 冒泡排序的时间复杂度为O(n^2)，不推荐该算法进行排序