import "@nomiclabs/hardhat-ethers"; // auto completion

import { ethers } from "hardhat";

async function foo() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();
  await hello.deployed();
}

async function deploy() {
  const hello = await foo();

  return hello;
}

async function sayHello(hello) {
  console.log("Say hello:", await hello.hello());
}

deploy().then(sayHello);
