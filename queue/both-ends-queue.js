// 双端队列
class BeQueue {
  constructor() {
    this.queue = {}
    // 用来存储队尾的前一个键值
    this.count = 0
    // 用来存储队首的键值
    this.head = 0
  }
  // 队首添加
  addFront(item) {
    // head使用的是前--，所以head存的就是队首
    this.queue[--this.head] = item
  }
  // 队尾添加
  addBack(item) {
    // count使用的是后++，所以count - 1存的是队尾
    this.queue[this.count++] = item
  }
  // 队首删除
  removeFront() {
    if (this.isEmpty()) {
      return
    }
    const headData = ths.queue[this.head]
    Reflect.deleteProperty(this.queue, this.head++)
    return headData
  }
  // 队尾删除
  removeBack() {
    const backData = this.queue[this.count - 1]
    Reflect.deleteProperty(this.queue, --this.count)
    return backData
  }
  // 获取队首值
  frontTop() {
    // 对于空对象，按键进行获取值会返回undefined，所以这个写是为了返回特殊值进行标记
    if (this.isEmpty()) {
      return '空的队列'
    }
    return this.queue[this.head]
  }
  // 获取队尾值
  backTop() {
    if (this.isEmpty()) {
      return '空的队列'
    }
    return this.queue[this.count - 1]
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.count - this.head
  }
}

const beq = new BeQueue()