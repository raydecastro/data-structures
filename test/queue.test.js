"use strict";

import {expect} from "chai";
import Queue from "../src/queue.js";

describe("Queue", () => {
  it("shall exist", () => {
    let queue = new Queue();

    expect(queue).to.be.defined;
  });
});
