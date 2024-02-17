Using the correct ethers is crucial to getting this to work.

npx hardhat node // setup a local test network

npx hardhat run scripts/deploy-hello.ts --network localhost // deploy to a local testnet


deploy a contract to a contract address which is the same as a wallet address 

Payer is usually from the first account on the test network - this costs gas

To read it is free.

Metamask to have a wallet for your browser

run python web server

python3 -m http.server 6969




# Starter Project

mkdir newproject
git init
yarn init -y
yarn add  -D hardhat
npx hardhat


# Testing

yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

# Testing-types

yarn add -D chai @types/node @types/mocha @types/chai

# Typescript

yarn add --save-dev ts-node typescript