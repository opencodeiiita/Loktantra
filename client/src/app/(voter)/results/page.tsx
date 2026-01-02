"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Clock,
  LayoutGrid,
  BarChart3,
  RefreshCw,
  Vote,
  Users,
  TrendingUp,
  PieChart,
  Trophy,
  CheckCircle,
  ShieldCheck,
  Copy,
  ExternalLink,
  Download,
  Link,
} from "lucide-react";

interface CandidateResult {
  id: number;
  name: string;
  party: string;
  votes: number;
  percentage: number;
  rank: number;
  isLeading: boolean;
  image: string;
  partyLogo: string;
}

const CANDIDATES_RESULTS: CandidateResult[] = [
  {
    id: 1,
    name: "Narendra Modi",
    party: "Bhartiya Janta Party",
    votes: 1200,
    percentage: 49,
    rank: 1,
    isLeading: true,
    image: "/candidates/narendra-modi.jpg",
    partyLogo: "/Logo/bjp-logo.png",
  },
  {
    id: 2,
    name: "Rahul Gandhi",
    party: "Indian National Congress",
    votes: 800,
    percentage: 32,
    rank: 2,
    isLeading: false,
    image: "/candidates/rahul-gandhi.jpg",
    partyLogo: "/Logo/congress-logo.png",
  },
  {
    id: 3,
    name: "Arvind Kejriwal",
    party: "Aam Aadmi Party",
    votes: 450,
    percentage: 18,
    rank: 3,
    isLeading: false,
    image: "/candidates/arvind-kejriwal.png",
    partyLogo: "/Logo/aap-logo.jpg",
  },
];

export default function ResultsPage(): React.ReactNode {
  const [viewMode, setViewMode] = useState<"card" | "chart">("card");

  const totalVotes = 2450;
  const registeredVoters = 5000;
  const turnout = 49;

  return (
    <>
      {/* Page Heading & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-black tracking-tight text-[#131118]">
              Election Results
            </h1>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-[10px] font-bold uppercase tracking-wider border border-red-200">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
              </span>
              Live
            </span>
          </div>
          <p className="text-[#6e6189] text-sm">
            National Council Representative 2024
          </p>
          <div className="flex items-center gap-1.5 text-xs text-[#6e6189]">
            <Clock className="size-3.5" />
            Last updated: 10:42:05 AM
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
          <div className="bg-gray-100 p-0.5 rounded-lg flex items-center">
            <button
              onClick={() => setViewMode("card")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1 ${viewMode === "card" ? "bg-white shadow-sm text-primary" : "text-[#6e6189] hover:text-[#131118]"}`}
            >
              <LayoutGrid className="size-3.5" />
              Card View
            </button>
            <button
              onClick={() => setViewMode("chart")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1 ${viewMode === "chart" ? "bg-white shadow-sm text-primary" : "text-[#6e6189] hover:text-[#131118]"}`}
            >
              <BarChart3 className="size-3.5" />
              Chart View
            </button>
          </div>
          <button className="flex items-center justify-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-[#131118] rounded-lg text-xs font-bold transition-colors">
            <RefreshCw className="size-3.5" />
            Refresh
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-24 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
            <Vote className="size-9 text-primary" />
          </div>
          <p className="text-[#6e6189] font-medium text-xs">Total Votes Cast</p>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold text-[#131118]">
              {totalVotes.toLocaleString()}
            </p>
            <span className="text-[#059669] text-xs font-medium flex items-center">
              <TrendingUp className="size-3.5" />
              +12%
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-24 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
            <Users className="size-9 text-primary" />
          </div>
          <p className="text-[#6e6189] font-medium text-xs">
            Registered Voters
          </p>
          <p className="text-2xl font-bold text-[#131118]">
            {registeredVoters.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between h-24 relative overflow-hidden">
          <div className="flex flex-col justify-between h-full">
            <p className="text-[#6e6189] font-medium text-xs">Voter Turnout</p>
            <p className="text-2xl font-bold text-[#131118]">{turnout}%</p>
          </div>
          <div className="relative size-12">
            <svg
              className="size-full"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="text-gray-100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="100, 100"
                strokeWidth="4"
              ></path>
              <path
                className="text-primary"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray={`${turnout}, 100`}
                strokeLinecap="round"
                strokeWidth="4"
              ></path>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <PieChart className="size-4 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Candidate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {CANDIDATES_RESULTS.map((candidate) => (
          <div
            key={candidate.id}
            className={`bg-white rounded-xl border-2 shadow-sm relative overflow-hidden flex flex-col ${
              candidate.isLeading
                ? "border-[#059669] shadow-lg"
                : "border-gray-200 hover:border-primary/50"
            } transition-colors`}
          >
            <div className="absolute top-3 left-3 z-10">
              <div
                className={`font-black text-[10px] px-1.5 py-0.5 rounded shadow-sm flex items-center gap-0.5 ${
                  candidate.rank === 1
                    ? "bg-yellow-400 text-yellow-900 border border-yellow-300"
                    : candidate.rank === 2
                      ? "bg-gray-300 text-gray-800 border border-gray-400"
                      : "bg-amber-700 text-amber-100 border border-amber-800"
                }`}
              >
                <Trophy className="size-3" /> #{candidate.rank}
              </div>
            </div>

            {candidate.isLeading && (
              <div className="absolute top-0 right-0 bg-[#059669] text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg shadow-sm z-10 flex items-center gap-0.5">
                <CheckCircle className="size-3 animate-pulse" /> LEADING
              </div>
            )}

            <div className="p-4 pb-0 flex flex-col items-center text-center">
              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-full overflow-hidden border-4 p-0.5 bg-white mb-3 ${candidate.isLeading ? "border-[#059669]" : "border-gray-100"}`}
                >
                  <Image
                    alt={candidate.name}
                    className="w-full h-full object-cover rounded-full"
                    src={candidate.image}
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <h3 className="text-base font-bold text-[#131118]">
                {candidate.name}
              </h3>
              <p className="text-xs font-medium text-[#6e6189] mb-3">
                {candidate.party}
              </p>
              <div className="w-full flex items-end justify-center gap-1.5 mb-1">
                <span
                  className={`text-2xl font-black tracking-tight ${candidate.isLeading ? "text-[#059669]" : "text-[#131118]"}`}
                >
                  {candidate.votes.toLocaleString()}
                </span>
                <span className="text-xs text-[#6e6189] font-medium mb-1">
                  votes
                </span>
              </div>
            </div>

            <div className="mt-auto p-4 pt-1">
              <div className="flex justify-between text-[10px] font-semibold text-[#6e6189] mb-1">
                <span>{candidate.percentage}% of total</span>
                {candidate.isLeading && <span>Goal: 50%</span>}
              </div>
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full relative ${candidate.isLeading ? "bg-[#059669]" : "bg-primary/60"}`}
                  style={{ width: `${candidate.percentage}%` }}
                >
                  {candidate.isLeading && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blockchain Verification Panel */}
      <section className="mt-2">
        <div className="bg-gray-900 rounded-2xl p-5 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary rounded-full blur-[80px] opacity-20"></div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-1.5 text-primary font-bold tracking-wide uppercase text-[10px]">
                <ShieldCheck className="size-3.5" />
                Blockchain Verified
              </div>
              <h2 className="text-lg font-bold">Immutability Guaranteed</h2>
              <p className="text-gray-400 text-xs leading-relaxed">
                Every vote is recorded on the Loktantra permissioned blockchain.
                Results are cryptographically verifiable and tamper-proof.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                  <span className="text-[10px] text-gray-400 block mb-0.5">
                    Smart Contract
                  </span>
                  <div className="flex items-center justify-between gap-1">
                    <code className="text-[10px] font-mono text-primary truncate">
                      0x71C...9A2B
                    </code>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Copy className="size-3" />
                    </button>
                  </div>
                </div>
                <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                  <span className="text-[10px] text-gray-400 block mb-0.5">
                    Latest Tx Hash
                  </span>
                  <div className="flex items-center justify-between gap-1">
                    <code className="text-[10px] font-mono text-green-400 truncate">
                      0x3f2...e19d
                    </code>
                    <a
                      className="text-gray-400 hover:text-white transition-colors"
                      href="#"
                    >
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <button className="flex-1 lg:flex-none items-center justify-center gap-1 bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg text-xs font-bold transition-colors shadow-lg flex">
                <Download className="size-4" />
                Download Audit
              </button>
              <button className="flex-1 lg:flex-none items-center justify-center gap-1 bg-transparent border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg text-xs font-bold transition-colors flex">
                <Link className="size-4" />
                View on Explorer
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
