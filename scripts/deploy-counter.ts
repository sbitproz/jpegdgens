import "@nomiclabs/hardhat-ethers"; // auto completion

import { ethers } from "hardhat";

async function foo() {
  const Counter = await ethers.getContractFactory("Counter"); // read the contract 
  const counter = await Counter.deploy(); // deploy the contract
  return await counter.deployed(); // wait for it to deploy
}

async function deploy() {
  const counter = await foo();

  return counter; // return the contract
}

async function count(count) {
  console.log("Count:", await count.count());
}

deploy().then(count);
