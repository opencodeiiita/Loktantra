# 🗳️ Loktantra  
### A Blockchain-Powered Digital Voting System

Loktantra is a decentralized, transparent, and tamper-proof digital voting platform built using **Blockchain, Web3, and Modern Web Technologies**.  
The project aims to demonstrate how democratic processes can be secured using smart contracts while maintaining voter privacy and auditability.

> **Loktantra (लोकतंत्र)** means *Democracy* — power to the people.

---
### Make sure to read contributors-guide.md before starting to contribute on the project!
---

## 🚀 Vision & Objectives

- 🔐 **Secure Voting** – One person, one vote enforced at the smart contract level  
- 🌐 **Transparency** – All votes recorded on a public blockchain  
- 🛡️ **Tamper-Proof** – Immutable ledger ensures election integrity  
- 👤 **Voter Verification** – Off-chain KYC + on-chain voting separation  
- 📊 **Real-Time Results** – Live election results fetched from blockchain  
- 🌍 **Accessibility** – Future multilingual support for regional inclusivity  

---

## 🧱 Project Architecture

Loktantra follows a **3-layer architecture**:

| Layer | Technology | Responsibility |
|------|------------|----------------|
| Frontend | Next.js, TailwindCSS, Ethers.js | UI, Wallet connection, Voting |
| Backend | Node.js, Express, MongoDB | Auth, KYC, Voter verification |
| Blockchain | Solidity, Hardhat, Sepolia | Vote storage, logic, auditability |

---

## 📁 Repository Structure

```plaintext
Loktantra/
│
├── client/                 # Frontend (Next.js + React)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Next.js pages (Home, Dashboard, Admin)
│   │   ├── contracts/      # Contract ABIs
│   │   └── utils/          # Helper & Web3 utilities
│   └── package.json
│
├── server/                 # Backend (Node.js + Express)
│   ├── src/
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Business logic
│   │   └── config/         # DB & environment config
│   └── package.json
│
├── blockchain/             # Smart Contracts
│   ├── contracts/          # Solidity contracts
│   ├── scripts/            # Deployment scripts
│   ├── hardhat.config.js
│   └── package.json
│
└── contributors/           # Registered contributors
    └── <your_roll>.txt

