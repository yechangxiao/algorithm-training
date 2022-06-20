class Stack {
  constructor() {
    // 存储栈的数据，使用对象{}会是一种更好的实现
    // this.data = {}
    this.data = []
    // 记录栈的数据个数，相当于length
    this.count = 0
  }
  // push()入栈方法
  push(item) {
    // 1.数组的push方法添加，相当于在数组上又包了一层
    // this.data.push(item)
    // 2.利用数组长度
    // this.data[this.data.length] = item
    // 3.计数方式
    this.data[this.count] = item
    // 入栈后，count自增
    this.count++
  }
  // pop()出栈方法
  pop() {
    // 出栈的前提是栈中存在元素，应先行检测
    if (this.isEmpty()) {
      console.log('栈为空');
      return
    }
    // 移除栈顶数据
    // 1.使用数组的pop移除
    // return this.data.pop()
    // 2.计数方式
    const temp = this.data[this.count - 1]
    // 会出现数组的空位
    Reflect.deleteProperty(this.data, --this.count)
    return temp
  }
  // top()获取栈顶值
  top() {
    if (this.isEmpty()) {
      console.log('栈为空');
      return
    }
    return this.data[this.count - 1]
  }
  // size()获取元素个数
  size() {
    return this.count
  }
  // clear()清空栈
  clear() {
    this.data = []
    this.count = 0
  }
  isEmpty() {
    return this.count === 0
  }
}

const s = new Stack()