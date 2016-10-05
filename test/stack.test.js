"use strict";

import {expect} from "chai";
import Stack from "../src/stack.js";

describe("Stack", () => {
  it("shall exist", () => {
    let stack = new Stack();

    expect(stack).to.be.defined;
  });


  it("shall have the ability to push items", () => {
    let stack = new Stack();

    stack.push("a");
    stack.push("b");
    stack.push("c");

    expect(stack.size()).to.equal(3);
  });

  it("shall have the ability to see the top most element", () => {
    let stack = new Stack();

    stack.push("a");
    stack.push("b");

    expect(stack.peek()).to.equal("b");
  });
});
