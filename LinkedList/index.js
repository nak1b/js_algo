/*
  Linked List
*/

class Node {
  constructor(data, next=null) {
    this.data = data 
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    const next = this.head 
    this.head = new Node(data, next)
  }

  size() {
    let counter = 0
    let temp = this.head
    
    while(temp) {
      temp = temp.next
      counter++
    }
    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if(!this.head) { return null }

    let temp = this.head

    while(temp) {
      if(temp.next === null) {
        return temp
      }
      temp = temp.next
    }
  }

  removeFirst() {
    if(!this.head) { return }
    const temp = this.head.next
    this.head = temp
  }

  removeLast() {
    if(!this.head) { return }

    if(!this.head.next) { 
      this.head = null 
      return 
    }
    
    let prev = this.head 
    let node = this.head.next

    while(node.next) {
      prev = node
      node = node.next
    } 
    prev.next = null
  }

  insertLast(data) {
    let lastNode = this.getLast()
    if(!lastNode) {
      this.head = new Node(data)
      return 
    }
    lastNode.next = new Node(data)
  }

  getAt(index) {    
    let counter = 0
    let node = this.head

    while(node) {
      if(index === counter) {
        return node
      }
      counter++
      node = node.next
    }
    return null
  }

  removeAt(index) {
    if(!this.head) { return }

    if(index === 0) {
      this.head = this.head.next
      return 
    }

    let prev = this.getAt(index-1)
    let node = this.getAt(index)

    if(node) {
      prev.next = node.next
    }
  }

  insertAt(data, index) {
    if(index === 0) {
      this.head = new Node(data, this.head)
      return 
    }

    let counter = 1
    let prev = this.head
    let node = this.head.next

    while(node) {
      if(index === counter) {
        prev.next = new Node(data, node)
        return 
      }
      prev = node
      node = node.next
      counter++
    }
    prev.next = new Node(data)
  }

  forEach(fn) {
    let node = this.head

    while(node) {
      fn(node)
      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    
    while(node) {
      yield node 
      node = node.next
    }
  }

  clear() {
    this.head = null
  }
}

module.exports = { Node, LinkedList }