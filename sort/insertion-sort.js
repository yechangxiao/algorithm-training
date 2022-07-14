// 插入排序：每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了。接着，它和第二项进行比较——判断第二项待在原位还是插入到第一项之前，
// 这样，头两项就已正确排序，接着和第三项比较(它该插入到第一、第二还是第三的位置？)，以此类推。
// 排序小型数组时，此算法比选择排序和冒泡排序性能要好

function insertionSort(arr) {
  const { length } = arr
  let temp
  for (let i = 0; i < length; i++) {
    let j = i
    temp = arr[i]
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}