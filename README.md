Using the correct ethers is crucial to getting this to work.

npx hardhat node // setup a local test network

npx hardhat run scripts/deploy-hello.ts --network localhost // deploy to a local testnet


deploy a contract to a contract address which is the same as a wallet address 

Payer is usually from the first account on the test network - this costs gas

To read it is free.

Metamask to have a wallet for your browser