class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0
  }
}

export default Queue;