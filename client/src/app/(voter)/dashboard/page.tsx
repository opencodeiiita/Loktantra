"use client";

import { useState } from "react";
import Image from "next/image";
import VoteModal from "@/components/VoteModal";
import { TrendingUp, Timer, LayoutGrid, List, CheckCircle } from "lucide-react";

interface Candidate {
  id: number;
  name: string;
  party: string;
  description: string;
  image: string;
  partyLogo: string;
}

const CANDIDATES: Candidate[] = [
  {
    id: 1,
    name: "Narendra Modi",
    party: "Bhartiya Janta Party",
    description:
      "Advocating for digital infrastructure, education reform, and sustainable urban development across the region.",
    image: "/candidates/narendra-modi.jpg",
    partyLogo: "/Logo/bjp-logo.png",
  },
  {
    id: 2,
    name: "Rahul Gandhi",
    party: "Indian National Congress",
    description:
      "Focused on economic deregulation, small business support, and individual privacy rights in the digital age.",
    image: "/candidates/rahul-gandhi.jpg",
    partyLogo: "/Logo/congress-logo.png",
  },
  {
    id: 3,
    name: "Arvind Kejriwal",
    party: "Aam Aadmi Party",
    description:
      "Championing environmental protection policies, renewable energy transition, and conservation efforts.",
    image: "/candidates/arvind-kejriwal.png",
    partyLogo: "/Logo/aap-logo.jpg",
  },
];

export default function DashboardPage(): React.ReactNode {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null,
  );
  const [votedCandidateId, setVotedCandidateId] = useState<number | null>(null);

  const handleVoteClick = (candidate: Candidate): void => {
    if (votedCandidateId) return;
    setSelectedCandidate(candidate);
  };

  const handleConfirmVote = (): void => {
    if (selectedCandidate) {
      setVotedCandidateId(selectedCandidate.id);
      setSelectedCandidate(null);
    }
  };

  return (
    <>
      {/* Hero Section: Stats & Timer */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#f1f0f4] flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between relative overflow-hidden">
        {/* Decorative background gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="flex flex-col gap-6 flex-1 w-full">
          <div className="flex flex-col gap-1">
            <p className="text-[#6e6189] font-medium text-sm uppercase tracking-wider">
              Voting in Progress
            </p>
            <h2 className="text-3xl font-black text-[#131118] tracking-tight">
              General Election Phase I
            </h2>
            <p className="text-[#6e6189]">
              Secure your voice on the blockchain. Voting ends soon.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#f8f7fa] px-5 py-3 rounded-xl border border-[#dedbe6]">
              <p className="text-xs text-[#6e6189] font-semibold uppercase mb-1">
                Registered Voters
              </p>
              <p className="text-xl font-bold text-[#131118]">5,000,000</p>
            </div>
            <div className="bg-[#f8f7fa] px-5 py-3 rounded-xl border border-[#dedbe6]">
              <p className="text-xs text-[#6e6189] font-semibold uppercase mb-1">
                Live Votes Cast
              </p>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold text-primary">1,245,902</p>
                <span className="text-xs text-[#059669] font-medium mb-1 flex items-center">
                  <TrendingUp className="size-3.5" /> +12%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex flex-col gap-3 bg-[#131118] text-white p-6 rounded-2xl min-w-[300px] w-full lg:w-auto shadow-xl shadow-primary/10">
          <div className="flex items-center gap-2 mb-1">
            <Timer className="size-6 text-primary" />
            <p className="font-bold text-sm">Time Remaining</p>
          </div>
          <div className="flex gap-3 text-center">
            <div className="flex flex-col gap-1 flex-1">
              <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                <span className="text-2xl font-bold font-mono">04</span>
              </div>
              <span className="text-[10px] text-white/60 uppercase">Hours</span>
            </div>
            <div className="self-start py-2 text-white/40">:</div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                <span className="text-2xl font-bold font-mono">23</span>
              </div>
              <span className="text-[10px] text-white/60 uppercase">Mins</span>
            </div>
            <div className="self-start py-2 text-white/40">:</div>
            <div className="flex flex-col gap-1 flex-1">
              <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                <span className="text-2xl font-bold font-mono text-primary">
                  12
                </span>
              </div>
              <span className="text-[10px] text-white/60 uppercase">Secs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#131118]">Candidates</h3>
          <div className="flex gap-2">
            <button className="size-8 flex items-center justify-center rounded-lg bg-white border border-[#dedbe6] text-[#6e6189] hover:bg-[#f1f0f4]">
              <LayoutGrid className="size-5" />
            </button>
            <button className="size-8 flex items-center justify-center rounded-lg bg-transparent hover:bg-white text-[#6e6189]/60">
              <List className="size-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CANDIDATES.map((candidate) => {
            const isVoted = votedCandidateId === candidate.id;

            return (
              <div
                key={candidate.id}
                className={`group bg-white rounded-2xl p-6 border transition-all duration-300 relative ${
                  isVoted
                    ? "border-[#059669]/30 shadow-md shadow-[#059669]/5 overflow-hidden"
                    : "border-[#f1f0f4] hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                {isVoted && (
                  <div className="absolute inset-0 bg-[#059669]/5 pointer-events-none"></div>
                )}

                <div className="absolute top-6 right-6">
                  <div className="size-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                    <Image
                      src={candidate.partyLogo}
                      alt={candidate.party}
                      width={32}
                      height={32}
                      className="size-8 object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 relative z-10">
                  <div
                    className={`p-1 rounded-full ${isVoted ? "border-2 border-solid border-[#059669]" : "border-2 border-dashed border-primary/30 group-hover:border-primary transition-colors"}`}
                  >
                    <Image
                      className={`size-20 rounded-full object-cover ${isVoted ? "grayscale-[0.5]" : ""}`}
                      src={candidate.image}
                      alt={candidate.name}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#131118]">
                      {candidate.name}
                    </h4>
                    <p className="text-sm font-medium text-[#6e6189]">
                      {candidate.party}
                    </p>
                  </div>
                  <p className="text-sm text-[#6e6189]/80 leading-relaxed line-clamp-2">
                    {candidate.description}
                  </p>

                  {isVoted ? (
                    <button
                      disabled
                      className="mt-2 w-full py-2.5 rounded-xl bg-gray-100 text-gray-400 font-bold text-sm border border-gray-200 cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="size-[18px] text-[#059669]" />
                      You&apos;ve Voted
                    </button>
                  ) : (
                    <button
                      onClick={() => handleVoteClick(candidate)}
                      className="mt-2 w-full py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all shadow-md shadow-primary/20"
                    >
                      Vote Now
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="py-6 text-center text-[#6e6189] text-sm">
        <p>© 2024 Loktantra Blockchain Voting Platform. All rights reserved.</p>
      </div>

      <VoteModal
        isOpen={!!selectedCandidate}
        candidate={selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
        onConfirm={handleConfirmVote}
      />
    </>
  );
}
