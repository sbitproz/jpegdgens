Using the correct ethers is crucial to getting this to work.

npx hardhat node // setup a local test network

npx hardhat run scripts/deploy-hello.ts --network localhost // deploy to a local testnet


deploy a contract to a contract address which is the same as a wallet address 

Payer is usually from the first account on the test network - this costs gas

To read it is free.

Metamask to have a wallet for your browser

# run python web server

```
python3 -m http.server 6969
```

# Starter Project

```
mkdir newproject
git init
yarn init -y
yarn add  -D hardhat
npx hardhat
```

# folder structure 
- contracts
scripts
test

assumptions are made for this folder structure by hardhat, this is a kind of standard

# Licensing

first line of a contract should have a licensing

# hardhat config

make sure pragma version in file matches hardhat config version

# compile

npx hardhat compile

# build webproject

```
npx webpack
```

for browser access

# Testing

```
yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

## Testing-types

```
yarn add -D chai @types/node @types/mocha @types/chai
```

# Typescript

```
yarn add --save-dev ts-node typescript
```

# Issues 

# Deploy

Setup network

```
npx hardhat node
```

Deploy to network

```
npx hardhat run scripts/deploy-[smart-contract-deployment-script].ts --network localhost
```

### Received invalid block tag 14. Latest block number is 2

Try changing the network in Metamask and then switching back to the network you are using to connect to the hardhat node (probably the Localhost 8545 network).

There seems to be some sort of cache with the highest block number known, and it tries to keep using that value after the network is reset. This might be a Metamask issue, or maybe something in the dapp like the ethers.js provider.

1. Shutdown browser with metamask 
1. Settings > Advanced > Clear Activity
1. Shutdown localhost hardhat testnet

### Catchout for python server caching



https://theprimeagen.github.io/web3-smart-contracts



# Issues

- We have some RPC errors in the browser
```
Metamask RPC Error: Internal JSON-RPC Error 
{code: -32603, message: 'Internal JSON-RPC error.'}
```
(runCount)

The network reports the following:

```
eth_sendRawTransaction
Nonce too high. Expected nonce to be 2 but got 9. Note that transactions can't be queued when automining.
```

Previously we might have used fallbacks and receive to solve these problems

