import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-ethers"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: { // configurating networks
    hardhat: {
      chainId: 1337 // make hardhat like other networks so meta mask works better
    }
  }
};
