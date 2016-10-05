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

  it("shall have the ability to pop items off", () => {
    let stack = new Stack();

    stack.push("a");
    stack.push("b");
    stack.push("c");

    expect(stack.size()).to.equal(3);

    let item = stack.pop();

    expect(item).to.equal("c");
    expect(stack.size()).to.equal(2);
    expect(stack.peek()).to.equal("b");
  });

  it("shall have the ability to know if it's empty", () => {
    let stack = new Stack();

    expect(stack.isEmpty()).to.be.true;

    stack.push("a");

    expect(stack.isEmpty()).to.be.false;
  });
});
