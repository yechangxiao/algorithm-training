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
}

const l = new LinkedList()
l.addAtTail('1')
l.addAtTail('2')
l.addAtTail('3')