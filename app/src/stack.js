"use strict";

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  size() {
    return this.items.length;
  }
}

export default Stack;
