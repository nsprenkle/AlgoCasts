// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, node) {
    this.data = data
    this.next = node || null
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }

  insertFirst (data) {
    let second = this.head
    this.head = new Node(data, second)
  }

  size () {
    let size = 0
    let node = this.head
    debugger

    while (node) {
      size += 1
      node = node.next
    }

    return size
  }

  getFirst () {
    return this.head
  }

  getLast () {
    let node = this.head

    while (node && node.next) {
      node = node.next
    }

    return node
  }

  clear () {
    this.head = null
  }

  removeFirst () {
    this.head = this.head.next
  }

  removeLast () {
    let node = this.head
    let prev

    while (node) {
      prev = node
      node = node.next
    }

    prev.next = null
  }
}

let ll = new LinkedList()
ll.insertFirst(1)
ll.insertFirst(2)
console.log(ll.size())

module.exports = { Node, LinkedList }
