class Queue {
  constructor() {
    this.queue = {}
    this.count = 0
    // 记录队首的键
    this.head = 0
  }
  // 入队
  enQueue(item) {
    this.queue[this.count++] = item
  }
  // 出队
  deQueue() {
    if (this.isEmpty()) {
      return
    }
    const headData = this.queue[this.head]
    Reflect.deleteProperty(this.queue, this.head)
    this.head++
    this.count--
    return headData
  }
  isEmpty() {
    return this.count === 0
  }
  // 获取队首元素
  top() {
    if (this.isEmpty()) {
      return
    }
    return this.queue[this.head]
  }
  size() {
    return this.count
  }
  clear() {
    this.queue = {}
    this.count = 0
    this.head = 0
  }
}

const q = new Queue()