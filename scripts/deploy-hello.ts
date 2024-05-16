import "@nomiclabs/hardhat-ethers"; // auto completion

import { ethers } from "hardhat";

async function foo() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();
  return await hello.deployed();
}

async function deploy() {
  const hello = await foo();

  return hello;
}

async function sayHello(hello: any) {
  console.log("Say hello:", await hello.hello());
}

deploy().then(sayHello);
