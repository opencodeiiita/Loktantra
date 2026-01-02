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
  PieChart as PieChartIcon,
  Trophy,
  CheckCircle,
  ShieldCheck,
  Copy,
  ExternalLink,
  Download,
  Link,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Area,
  AreaChart,
} from "recharts";

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

      {/* Candidate Cards Grid - Card View */}
      {viewMode === "card" && (
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
      )}

      {/* Charts View - Interactive Recharts */}
      {viewMode === "chart" && (
        <div className="space-y-4 mb-4">
          {/* Top Row - Bar Chart & Pie Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Bar Chart - Vote Distribution */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary/5 via-transparent to-accent/5 p-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <BarChart3 className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#131118]">
                        Vote Distribution
                      </h3>
                      <p className="text-xs text-[#6e6189]">
                        Real-time vote count by candidate
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 rounded-full border border-green-200">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-green-700 uppercase">
                      Live
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart
                    data={CANDIDATES_RESULTS}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient
                        id="barGradient1"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                      <linearGradient
                        id="barGradient2"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#2563eb" />
                      </linearGradient>
                      <linearGradient
                        id="barGradient3"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={true}
                      vertical={false}
                      stroke="#f0f0f0"
                    />
                    <XAxis
                      type="number"
                      domain={[0, "dataMax"]}
                      tick={{ fill: "#6e6189", fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{ fill: "#131118", fontSize: 13, fontWeight: 600 }}
                      axisLine={false}
                      tickLine={false}
                      width={95}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-gray-700">
                              <p className="font-bold text-sm">{data.name}</p>
                              <p className="text-gray-400 text-xs">
                                {data.party}
                              </p>
                              <div className="mt-2 flex items-center gap-3">
                                <div>
                                  <p className="text-2xl font-black text-emerald-400">
                                    {data.votes.toLocaleString()}
                                  </p>
                                  <p className="text-[10px] text-gray-400">
                                    votes
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-xl font-bold">
                                    {data.percentage}%
                                  </p>
                                  <p className="text-[10px] text-gray-400">
                                    share
                                  </p>
                                </div>
                              </div>
                              {data.isLeading && (
                                <div className="mt-2 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full text-center">
                                  🏆 LEADING CANDIDATE
                                </div>
                              )}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar
                      dataKey="votes"
                      radius={[0, 8, 8, 0]}
                      animationDuration={1500}
                      animationEasing="ease-out"
                    >
                      {CANDIDATES_RESULTS.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={`url(#barGradient${index + 1})`}
                          style={{
                            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                          }}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart - Vote Share */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-accent/5 via-transparent to-primary/5 p-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-xl">
                    <PieChartIcon className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#131118]">Vote Share</h3>
                    <p className="text-xs text-[#6e6189]">
                      Percentage distribution
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="relative">
                  <ResponsiveContainer width="100%" height={260}>
                    <PieChart>
                      <defs>
                        <linearGradient
                          id="pieGradient1"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                        <linearGradient
                          id="pieGradient2"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                        <linearGradient
                          id="pieGradient3"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                      </defs>
                      <Pie
                        data={CANDIDATES_RESULTS}
                        cx="50%"
                        cy="45%"
                        innerRadius={55}
                        outerRadius={85}
                        paddingAngle={3}
                        dataKey="votes"
                        nameKey="name"
                        animationDuration={1500}
                        animationEasing="ease-out"
                      >
                        {CANDIDATES_RESULTS.map((_, index) => (
                          <Cell
                            key={`pie-cell-${index}`}
                            fill={`url(#pieGradient${index + 1})`}
                            stroke="white"
                            strokeWidth={2}
                            style={{
                              filter:
                                "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))",
                            }}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-gray-700">
                                <p className="font-bold text-sm">{data.name}</p>
                                <div className="mt-1">
                                  <span className="text-2xl font-black text-white">
                                    {data.percentage}%
                                  </span>
                                  <span className="text-gray-400 text-xs ml-2">
                                    ({data.votes.toLocaleString()} votes)
                                  </span>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Legend
                        verticalAlign="bottom"
                        height={36}
                        content={() => (
                          <div className="flex justify-center gap-4 flex-wrap">
                            {CANDIDATES_RESULTS.map((candidate, index) => (
                              <div
                                key={`legend-${candidate.id}`}
                                className="flex items-center gap-1.5"
                              >
                                <div
                                  className="size-3 rounded-full"
                                  style={{
                                    background: `linear-gradient(135deg, ${["#10b981", "#6366f1", "#a855f7"][index]}, ${["#059669", "#2563eb", "#7c3aed"][index]})`,
                                  }}
                                />
                                <span className="text-xs font-medium text-[#131118]">
                                  {candidate.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Center label - absolutely positioned */}
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ marginBottom: "36px" }}
                  >
                    <div className="text-center bg-white/95 rounded-full size-[90px] flex flex-col items-center justify-center shadow-inner border border-gray-100">
                      <p className="text-xl font-black text-[#131118]">
                        {totalVotes.toLocaleString()}
                      </p>
                      <p className="text-[9px] text-[#6e6189] uppercase font-semibold">
                        Total Votes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Detailed Stats Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 p-5 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <TrendingUp className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#131118]">
                      Detailed Comparison
                    </h3>
                    <p className="text-xs text-[#6e6189]">
                      Complete breakdown of election results
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="text-left py-4 px-5 text-[10px] uppercase tracking-wider text-[#6e6189] font-bold">
                      Rank
                    </th>
                    <th className="text-left py-4 px-5 text-[10px] uppercase tracking-wider text-[#6e6189] font-bold">
                      Candidate
                    </th>
                    <th className="text-left py-4 px-5 text-[10px] uppercase tracking-wider text-[#6e6189] font-bold">
                      Party
                    </th>
                    <th className="text-right py-4 px-5 text-[10px] uppercase tracking-wider text-[#6e6189] font-bold">
                      Votes
                    </th>
                    <th className="text-center py-4 px-5 text-[10px] uppercase tracking-wider text-[#6e6189] font-bold">
                      Share
                    </th>
                    <th className="text-center py-4 px-5 text-[10px] uppercase tracking-wider text-[#6e6189] font-bold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CANDIDATES_RESULTS.map((candidate, index) => {
                    const rankStyles = [
                      "bg-gradient-to-br from-yellow-300 to-amber-400 text-amber-900 shadow-lg shadow-amber-200",
                      "bg-gradient-to-br from-gray-200 to-gray-400 text-gray-800 shadow-lg shadow-gray-200",
                      "bg-gradient-to-br from-amber-600 to-amber-800 text-amber-100 shadow-lg shadow-amber-200",
                    ];
                    return (
                      <tr
                        key={candidate.id}
                        className={`border-b border-gray-50 hover:bg-gray-50/50 transition-all ${candidate.isLeading ? "bg-emerald-50/30" : ""}`}
                      >
                        <td className="py-4 px-5">
                          <div
                            className={`inline-flex items-center justify-center size-8 rounded-full font-black text-sm ${rankStyles[index]}`}
                          >
                            {candidate.rank}
                          </div>
                        </td>
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <Image
                                alt={candidate.name}
                                className="size-10 rounded-full object-cover ring-2 ring-gray-100"
                                src={candidate.image}
                                width={40}
                                height={40}
                              />
                              {candidate.isLeading && (
                                <div className="absolute -bottom-0.5 -right-0.5 size-4 bg-emerald-500 rounded-full flex items-center justify-center ring-2 ring-white">
                                  <CheckCircle className="size-2.5 text-white" />
                                </div>
                              )}
                            </div>
                            <span className="font-bold text-[#131118]">
                              {candidate.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-[#6e6189]">
                          {candidate.party}
                        </td>
                        <td className="py-3 px-3 text-right font-bold text-[#131118]">
                          {candidate.votes.toLocaleString()}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <span
                            className={`font-bold ${candidate.isLeading ? "text-[#059669]" : "text-[#131118]"}`}
                          >
                            {candidate.percentage}%
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          {candidate.isLeading ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700">
                              <CheckCircle className="size-3" /> Leading
                            </span>
                          ) : (
                            <span className="text-xs text-[#6e6189]">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

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
