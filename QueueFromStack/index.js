/* 
  Queue from Stack
*/

const Stack = require('./Stack')

class Queue {
  constructor() {
    this.stackA = new Stack()
    this.stackB = new Stack()
  }

  add(val) {
    this.stackA.push(val)
  }

  remove() {
    while(this.stackA.peek()) {
      this.stackB.push(this.stackA.pop())
    }

    const itemToRemove = this.stackB.pop()

    while(this.stackB.peek()) {
      this.stackA.push(this.stackB.pop())
    }

    return itemToRemove
  }

  peek() {
    while(this.stackA.peek()) {
      this.stackB.push(this.stackA.pop())
    }

    const itemToRemove = this.stackB.peek()

    while(this.stackB.peek()) {
      this.stackA.push(this.stackB.pop())
    }

    return itemToRemove
  }
}

module.exports = Queue