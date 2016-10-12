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

  size() {
    return this.items.length;
  }

  front() {
    return this.items[0];
  }
}

export default Queue;