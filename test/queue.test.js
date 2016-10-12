"use strict";

import {expect} from "chai";
import Queue from "../src/queue.js";
import QueueIsEmptyError from "../src/queueIsEmptyError.js";

describe("Queue", () => {
  it("shall exist", () => {
    let queue = new Queue();

    expect(queue).to.be.defined;
  });

  it("shall have ability to check if it's empty", () => {
    let queue = new Queue();

    expect(queue.isEmpty()).to.be.true;
  });

  it("shall have ability to enqueue new items", () => {
    let queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.isEmpty()).to.be.false;
  });

  it("shall have ability to check the size", () => {
    let queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.size()).to.equal(2);

    queue.enqueue(3, 4, 5);

    expect(queue.size()).to.equal(5);
  });

  it("shall have ability to check first element in queue", () => {
    let queue = new Queue();

    queue.enqueue("happy");
    queue.enqueue(2);
    queue.enqueue(1);

    expect(queue.front()).to.equal("happy");
  });

  it("shall throw an error when checking first element in queue, if queue is empty", () => {
    let queue = new Queue();

    try {
      expect(queue.front()).to.throw(new QueueIsEmptyError());
    }
    catch (error) {
      expect(error.message).to.equal("QueueIsEmptyError");
    }
  });

  it("shall have ability dequeue items off", () => {
    let queue = new Queue();

    queue.enqueue("love");
    queue.enqueue("rocks");

    expect(queue.dequeue()).to.equal("love");
    expect(queue.dequeue()).to.equal("rocks");
  });

  it("shall throw an error when dequeueing, if it's empty", () => {
    let queue = new Queue();

    queue.enqueue("love");
    queue.enqueue("rocks");

    expect(queue.dequeue()).to.equal("love");
    expect(queue.dequeue()).to.equal("rocks");

    try {
      expect(queue.dequeue()).to.throw(new QueueIsEmptyError());
    }
    catch (error) {
      expect(error.message).to.equal("QueueIsEmptyError");
    }
  });
});
