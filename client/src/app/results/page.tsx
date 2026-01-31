"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import RankerCard from "@/components/RankerCard";
import Sidebar from "@/components/Sidebar";
import ResultsChart from "@/components/ResultsChart";

import contractJson from "@/contracts/Loktantra.json";

const CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
  "0xac60C4F506080AAD8621d271a155e2356CaC76B1";
const CONTRACT_ABI = contractJson.abi;
const PROVIDER_URL =
  process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL ||
  "https://eth-sepolia.g.alchemy.com/v2/m3jBKjww6uwiY8YAbPelz";
const provider = new ethers.JsonRpcProvider(PROVIDER_URL);

export default function Results() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"card" | "chart">("card");
  const [candidates, setCandidates] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  // Fetch candidates from contract
  const fetchResults = async () => {
    setLoading(true);
    try {
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        provider,
      );
      const count = await contract.candidatesCount();
      const results = [];
      let totalVotes = 0;
      for (let i = 1; i <= count; i++) {
        const [id, name, voteCount] = await contract.getCandidate(i);
        results.push({
          id: id.toNumber ? id.toNumber() : Number(id),
          name,
          voteCount: voteCount.toNumber
            ? voteCount.toNumber()
            : Number(voteCount),
          // Optionally, you can map images by name or id
          image:
            i === 1 ? "/modiji.png" : i === 2 ? "/rahulji.png" : "/rahulji.png",
          party:
            i === 1
              ? "Reform Party"
              : i === 2
                ? "Progressive Party"
                : "Green Future",
        });
        totalVotes += voteCount.toNumber
          ? voteCount.toNumber()
          : Number(voteCount);
      }
      // Sort by voteCount descending
      results.sort((a, b) => b.voteCount - a.voteCount);
      setCandidates(
        results.map((c, idx) => ({
          ...c,
          percentage: totalVotes > 0 ? (c.voteCount / totalVotes) * 100 : 0,
        })),
      );
      setLastUpdated(new Date().toLocaleString());
    } catch (err) {
      setCandidates([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchResults();
    const interval = setInterval(fetchResults, 10000); // auto-refresh every 10s
    return () => clearInterval(interval);
  }, []);

  const totalVotes = candidates.reduce((sum, c) => sum + c.voteCount, 0);

  return (
    <div className="min-h-screen bg-gray-200 flex">
      {/* Sidebar */}
      <Sidebar currentPage="results" />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header Section */}
        <div className="p-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h1 className="text-2xl font-bold text-gray-800">
                    Election Results
                  </h1>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full font-medium">
                    Live
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setViewMode("card")}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      viewMode === "card"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    <i className="fas fa-th-large mr-2"></i>
                    Card View
                  </button>
                  <button
                    onClick={() => setViewMode("chart")}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      viewMode === "chart"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    <i className="fas fa-chart-bar mr-2"></i>
                    Chart View
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
                    onClick={fetchResults}
                    disabled={loading}
                  >
                    <i className="fas fa-sync-alt mr-2"></i>
                    {loading ? "Refreshing..." : "Refresh"}
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                <i className="fas fa-clock mr-1"></i>
                Last updated: {lastUpdated || "Loading..."}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">
                  {totalVotes}
                </div>
                <div className="text-sm text-gray-600">Total Votes</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">-</div>
                <div className="text-sm text-gray-600">Registered Voters</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-600">-</div>
                <div className="text-sm text-gray-600">Voter Turnout</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rankers Section */}
        <div className="p-8 pt-0">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Top 3 Ranked Candidates
            </h3>

            {viewMode === "card" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {candidates.slice(0, 3).map((c, idx) => (
                  <RankerCard
                    key={c.id}
                    rank={idx + 1}
                    name={c.name}
                    party={c.party}
                    votes={c.voteCount}
                    percentage={c.percentage}
                    image={c.image}
                  />
                ))}
              </div>
            ) : (
              <ResultsChart
                candidates={candidates.slice(0, 3)}
                totalVotes={totalVotes}
              />
            )}
          </div>
        </div>

        {/* Blockchain Verification Section */}
        <div className="p-8 pt-0">
          <div className="flex flex-col items-center">
            {/* Main Card */}
            <div
              className="w-full max-w-[1100px] flex justify-between items-center rounded-xl px-8 py-7 
                            bg-gradient-to-br from-[#0b0f1c] to-[#1b1235] 
                            text-white shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              {/* Left Section */}
              <div className="max-w-[620px]">
                <div className="flex items-center gap-2 text-xs tracking-widest text-violet-400 mb-3">
                  <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                  BLOCKCHAIN VERIFIED
                </div>

                <h2 className="text-2xl font-semibold mb-2">
                  Immutability Guaranteed
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  Every action is recorded on the blockchain, ensuring full
                  transparency and tamper-proof integrity.
                </p>

                <div className="flex gap-8">
                  <div>
                    <span className="block text-xs text-slate-400">
                      Smart Contract
                    </span>
                    <span className="text-sm mt-1 block">0x7A...8A9</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">
                      Latest Block
                    </span>
                    <span className="text-sm mt-1 block text-green-400">
                      #845,216
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex gap-3">
                <button className="px-4 py-2 text-sm rounded-lg bg-white text-black font-medium">
                  Download Audit Report
                </button>
                <button
                  className="px-4 py-2 text-sm rounded-lg 
                                   bg-white/10 border border-white/20 text-white"
                >
                  View on Explorer
                </button>
              </div>
            </div>

            {/* Footer */}

            <p className="mt-6 text-md text-slate-500">
              2024 • All actions securely stored on-chain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
