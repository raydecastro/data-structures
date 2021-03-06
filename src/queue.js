import QueueIsEmptyError from "./queueIsEmptyError.js";

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
    if (this.isEmpty()) {
      throw new QueueIsEmptyError();
    }

    return this.items[0];
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new QueueIsEmptyError();
    }

    return this.items.shift();
  }
}

export default Queue;
