import "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";

// 1. setup
// 2. deploy contract
// 3. call our functions to test

describe("hello world", () => {
  it("should say hi", async () => {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();

    await hello.deployed();

    const helloOutput = await hello.hello();

    expect(helloOutput).to.equal("Hello, World 123!");
  });
});
