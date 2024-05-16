import { countReset } from "console";
import { ethers } from "ethers";

function getEth() {
  // @ts-ignore
  const eth = window.ethereum;

  if (!eth) {
    throw new Error("get unable to load ethers");
  }
  return eth;
}

async function hasAccounts() {
  const eth = getEth();
  const accounts = (await eth.request({ method: "eth_accounts" })) as string[]; // request accounts from metamask

  return accounts && accounts.length;
}

async function requestAccounts() {
  const eth = getEth();
  const accounts = (await eth.request({
    method: "eth_requestAccounts",
  })) as string[];

  return accounts;
}

async function run() {
  if (!(await hasAccounts()) && !(await requestAccounts())) {
    throw new Error("Please let me take your money");
  }

  const hello = new ethers.Contract(
    "0x5fbdb2315678afecb367f032d93f642f64180aa3", // where on this network
    ["function hello() public pure returns (string memory)"], // how to communicate to the contract
    new ethers.providers.Web3Provider(getEth()) // the network through metamask
  );

  document.body.innerHTML = await hello.hello();
}

// run();

async function runCount() {
  if (!(await hasAccounts()) && !(await requestAccounts())) {
    throw new Error("Please let me take your money");
  }

  const providers = new ethers.providers.Web3Provider(getEth());
  const signer = providers.getSigner();

  console.log(
    "process.env.COUNT_CONTRACT_ADDRESS",
    process.env.COUNT_CONTRACT_ADDRESS
  );

  const count = new ethers.Contract(
    process.env.COUNT_CONTRACT_ADDRESS,
    [
      "function count() public",
      "function getCounter() public view returns (uint32)",
      // "receive() external payable",
      // "fallback() external payable",
    ], // ABI how to communicate to the contract
    signer // the network
  );
  await count.count();

  const el = document.createElement("div");
  async function setCounter() {
    el.innerHTML = await count.getCounter();
  }
  setCounter();
  const button = document.createElement("button");
  button.innerHTML = "Incrament";
  button.onclick = async () => {
    await count.count();
    setCounter();
  };

  document.body.appendChild(el);
  document.body.appendChild(button);
}

runCount();
