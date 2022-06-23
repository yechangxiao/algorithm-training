class Queue {
  constructor() {
    // 用于存储队列数据
    this.queue = []
    this.count = 0
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
    // 删除queue的第一个元素
    // Reflect.deleteProperty(this.queue, 0) // 会形成empty空位，不能实现
    this.count--
    return this.queue.shift()
  }
  isEmpty() {
    return this.count === 0
  }
  // 获取队首元素
  top() {
    if (this.isEmpty()) {
      return
    }
    return this.queue[0]
  }
  size() {
    return count
  }
  clear() {
    // this.queue = []
    this.queue.length = 0
    this.count = 0
  }
}

const q = new Queue()