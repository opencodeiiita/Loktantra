"use client";

import { useState } from "react";
import Image from "next/image";
import { Vote, Check, ArrowRight, ShieldCheck } from "lucide-react";

interface Candidate {
  id: number;
  name: string;
  party: string;
  partyLogo?: string;
}

interface VoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  candidate: Candidate | null;
}

export default function VoteModal({
  isOpen,
  onClose,
  onConfirm,
  candidate,
}: VoteModalProps) {
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen || !candidate) return null;

  const handleConfirm = () => {
    if (confirmed) {
      onConfirm();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/40 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-[380px] flex flex-col gap-4 bg-white rounded-xl shadow-2xl overflow-hidden p-5">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Vote className="size-6 text-primary" />
          </div>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-[#131118] text-lg font-bold leading-tight">
              Confirm Your Vote
            </h2>
            <p className="text-red-600 font-medium text-xs">
              This action cannot be undone
            </p>
          </div>
        </div>

        {/* Details Box */}
        <div className="flex flex-col bg-[#f6f6f8] rounded-lg p-3 border border-gray-100 text-sm">
          <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
            <p className="text-[#6e6189] text-xs">Candidate</p>
            <p className="text-[#131118] text-sm font-bold">{candidate.name}</p>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
            <p className="text-[#6e6189] text-xs">Party</p>
            <div className="flex items-center gap-1">
              <span className="text-[#131118] text-xs font-medium">
                {candidate.party}
              </span>
              {candidate.partyLogo && (
                <Image
                  src={candidate.partyLogo}
                  alt={candidate.party}
                  width={16}
                  height={16}
                  className="size-4 object-contain"
                />
              )}
            </div>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
            <p className="text-[#6e6189] text-xs">Your Wallet</p>
            <p className="text-[#131118] text-xs font-mono bg-white px-1 py-0.5 rounded border border-gray-200">
              0x742d...89aB
            </p>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <p className="text-[#6e6189] text-xs">Gas Fee</p>
            <p className="text-[#131118] text-xs font-medium">
              ~$0.45{" "}
              <span className="text-gray-500 font-mono">≈0.0003 ETH</span>
            </p>
          </div>
        </div>

        {/* Checkbox Confirmation */}
        <label className="flex gap-2 items-center cursor-pointer group select-none">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-gray-300 transition-all checked:border-primary checked:bg-primary hover:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
            <Check className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
          </div>
          <p className="text-[#131118] text-xs font-medium group-hover:text-primary transition-colors">
            I confirm this is my final choice
          </p>
        </label>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 flex items-center justify-center h-9 px-4 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!confirmed}
            className="flex-1 flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-white text-sm font-bold shadow-md shadow-primary/25 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <span className="mr-1">Confirm Vote</span>
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Footer Note */}
        <div className="flex items-center justify-center gap-1">
          <ShieldCheck className="size-3 text-gray-400" />
          <p className="text-[#6e6189] text-[10px]">
            Recorded on Ethereum blockchain
          </p>
        </div>
      </div>
    </div>
  );
}
