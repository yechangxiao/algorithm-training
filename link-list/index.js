// 节点
class LinkedNode {
  constructor(value) {
    this.value = value
    // 存储下一个节点的应勇
    this.next = null
  }
}

// 链表
class LinkedList {
  constructor() {
    this.count = 0
    this.head = null
  }
  // 尾部添加节点
  addAtTail(value) {
    // 创建一个节点
    const node = new LinkedNode(value)
    // 判断链表是否空
    if (this.count === 0) {
      this.head = node
    } else {
      // 找到链表的尾部节点，将最后一个节点的next设置为node
      let cur = this.head
      while (cur.next !== null) {
        cur = cur.next
      }
      cur.next = node
    }
    this.count++
  }
  // 从首部添加节点
  addAtHead(value) {
    const node = new LinkedNode(value)
    if (this.count === 0) {
      this.head = node
    } else {
      // 将node添加到head的前面
      node.next = this.head
      this.head = node
    }
    this.count++
  }
  // 根据索引获取节点
  get(index) {
    if (this.count === 0 || index < 0 || index > this.count) {
      return
    }
    // 迭代链表
    let cur = this.head
    for (let i = 0; i < index; i++) {
      cur = this.head.next
    }
    return cur
  }
  // 根据索引添加节点
  addAtIndex(value, index) {
    if (this.count === 0) {
      return
    }
    // 添加到尾部
    if (index >= this.count) {
      return this.addAtTail(value)
    }
    // 如果index <= 0，添加到头部
    if (index <= 0) {
      return this.addAtHead(value)
    }
    // 正常区间
    const prev = this.get(index - 1)
    const next = prev.next
    const node = new LinkedNode(value)
    prev.next = node
    node.next = next
    this.count++
  }
  // 根据索引删除节点
  removeAtIndex(index) {
    if (this.count === 0 || index < 0 || index >= this.count) {
      return
    }
    if (index === 0) {
      this.head = this.head.next
    } else {
      const prev = this.get(index - 1)
      prev.next = prev.next.next
    }
    this.count--
  }
}

const l = new LinkedList()
l.addAtTail('1')
l.addAtTail('2')
l.addAtTail('3')