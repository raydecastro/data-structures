"use strict";

import {expect} from "chai";
import Queue from "../src/queue.js";

describe("Queue", () => {
  it("shall exist", () => {
    let queue = new Queue();

    expect(queue).to.be.defined;
  });

  it("shall have ability to check if it's empty", () => {
    let queue = new Queue();

    expect(queue.isEmpty()).to.be.true;
  });
});
