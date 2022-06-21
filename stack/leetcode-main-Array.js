// 使用数组方法的包含main函数的实现实现
class MinStack {
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.push(item)
  }
  pop() {
    return this.stack.pop()
  }
  top() {
    return this.stack[this.stack.length - 1]
  }
  min() {
    return Math.min(...this.stack)
  }
}

const m = new MinStack()