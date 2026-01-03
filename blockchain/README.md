# Loktantra Smart Contract Deployment

This directory contains the Loktantra smart contract and deployment scripts using Hardhat.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with your configuration:
```bash
SEPOLIA_RPC_URL=your_rpc_url
PRIVATE_KEY=your_private_key
```

## Compilation

Compile the smart contract:
```bash
npx hardhat compile
```

## Deployment

### Local Deployment (for testing)
```bash
npx hardhat run scripts/deploy.js
```

### Sepolia Testnet Deployment
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## Contract Details

The Loktantra contract includes:
- Proposal creation and management
- Voting functionality
- Owner controls
- Event emissions for transparency

## Files

- `contracts/Loktantra.sol` - Main smart contract
- `scripts/deploy.js` - Deployment script
- `hardhat.config.cjs` - Hardhat configuration
- `walletaddress.txt` - Deployed contract address
- `.env.example` - Environment variables template