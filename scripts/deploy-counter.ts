import "@nomiclabs/hardhat-ethers"; // auto completion
import { countReset } from "console";

import { ethers } from "hardhat";

async function foo() {
  const Counter = await ethers.getContractFactory("Counter"); // read the contract from disc
  const counter = await Counter.deploy(); // deploy the contract to the network
  return await counter.deployed(); // wait for it to deploy
}

async function deploy() {
  const counter = await foo();

  return counter; // return the contract
}

async function count(count) {
  await count.count(); // call proxy function (known locally by Typescript), await for response from the network
  console.log("Count:", await count.getCounter()); 
}

deploy().then(count);
