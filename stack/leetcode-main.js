// 包含main函数的栈
// 在存储数据的栈外，再新建一个栈，用于存储最小值
class MinStack {
  constructor() {
    // stackA存储数据
    this.stackA = []
    this.countA = 0
    // stackB用于将数据降序存储（栈顶值为最小值）
    this.stackB = []
    this.countB = 0
  }
  push(item) {
    this.stackA[this.countA++] = item
    // 如果stackB没有数据，直接入栈
    // 如果item的值<=stackB的最小值，入栈
    // 为什么item === stackB的时候也要入栈，因为stackA入栈的时候可能有多个最小值，出栈后保证stackB中依旧存在最小值
    if (this.countB === 0 || item <= this.min()) {
      this.stackB[this.countB++] = item
    }
  }
  // 最小值函数
  min() {
    return this.stackB[this.countB - 1]
  }
  // 获取栈顶值
  top() {
    return this.stackA[this.countA - 1]
  }
  // 出栈
  pop() {
    // 先进行stackB的检测，因为stackA一定要出栈的
    // 如果stackA的栈顶值===stackB的栈顶值，stackB出栈
    if (this.top() === this.min()) {
      Reflect.deleteProperty(this.stackB, --this.countB)
    }
    // stackA出栈
    Reflect.deleteProperty(this.stackA, --this.countA)
  }
}

const m = new MinStack()