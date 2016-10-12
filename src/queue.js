class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0
  }

  enqueue(...items) {
    this.items = this.items.concat(items);
  }
}

export default Queue;