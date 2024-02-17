// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0; // can use ranges like ^0.8.0, >=0.8.0, etc.

import "hardhat/console.sol"; // for debugging console import

// uint32 - is more cleaer to JS - but risks overflow

contract Counter {
  uint counter;

  // costs money - does not return data
  function count() public {
    counter++;
    console.log("Counter is now", counter);
  }

  // free to read
  // view; functiosn that do no change the contracts state
  // pure; cannot read or write state on the contract
  function getCounter() public view returns (uint32) {
    return uint32(counter);
  }

  fallback() external payable {
    console.log("----- fallback:", msg.value);
  }

  receive() external payable {
    console.log("----- receive:", msg.value);
  }
}

// public anyone can call
// private only you can call it
// internal you and sub classes
// external only other contracts can call it (other people) - but we can't call it