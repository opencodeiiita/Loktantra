'use client';

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const ETHERSCAN_BASE = process.env.NEXT_PUBLIC_ETHERSCAN_BASE;

export default function Footer() {
  if (!contractAddress || !ETHERSCAN_BASE) return null;

  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 px-6 py-3 text-center text-sm text-gray-600">
      <span className="mr-2">Smart Contract:</span>
      <a
        href={`${ETHERSCAN_BASE}/address/${contractAddress}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline font-medium"
      >
        View on Etherscan
      </a>
    </footer>
  );
}
