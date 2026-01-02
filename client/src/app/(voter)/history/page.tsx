"use client";

import { useState, Fragment } from "react";
import {
  Download,
  ShieldCheck,
  Calendar,
  ChevronDown,
  ChevronUp,
  Copy,
  CheckCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";

interface HistoryRow {
  id: number;
  date: string;
  time: string;
  election: string;
  candidate: string;
  candidateInitial: string;
  candidateColor: string;
  txHash: string | null;
  fullTxHash: string | null;
  status: "Confirmed" | "Pending";
  blockNumber: string | null;
  gasUsed: string | null;
  contractAddress: string | null;
}

const HISTORY_DATA: HistoryRow[] = [
  {
    id: 1,
    date: "Oct 24, 2024",
    time: "10:42 AM",
    election: "National General Election 2024",
    candidate: "Alice Johnson",
    candidateInitial: "A",
    candidateColor: "bg-blue-100 text-blue-600",
    txHash: "0x8f2...3a9",
    fullTxHash: "0x8f2c3a9d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z",
    status: "Confirmed",
    blockNumber: "#12939402",
    gasUsed: "0.00042 ETH",
    contractAddress: "0x71C...99e",
  },
  {
    id: 2,
    date: "Sep 12, 2024",
    time: "09:15 AM",
    election: "Local Council Referendum",
    candidate: "Measure B (Yes)",
    candidateInitial: "Y",
    candidateColor: "bg-green-100 text-green-600",
    txHash: "0x4a1...b2c",
    fullTxHash: "0x4a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t",
    status: "Confirmed",
    blockNumber: "#12837601",
    gasUsed: "0.00038 ETH",
    contractAddress: "0x71C...99e",
  },
  {
    id: 3,
    date: "Today",
    time: "11:30 AM",
    election: "Emergency Board Vote",
    candidate: "Robert Chen",
    candidateInitial: "R",
    candidateColor: "bg-purple-100 text-purple-600",
    txHash: null,
    fullTxHash: null,
    status: "Pending",
    blockNumber: null,
    gasUsed: null,
    contractAddress: null,
  },
];

export default function HistoryPage(): React.ReactNode {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [dateFilter, setDateFilter] = useState("Last 30 days");
  const [electionFilter, setElectionFilter] = useState("All Elections");
  const [statusFilter, setStatusFilter] = useState("All");

  const toggleRow = (id: number): void => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <>
      {/* Page Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-black tracking-tight text-[#131118]">
            Your Voting History
          </h1>
          <p className="text-[#6e6189] text-sm">
            View and audit your past voting activity on the blockchain.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 h-8 px-3 bg-white border border-gray-200 hover:bg-gray-50 text-[#131118] rounded-lg text-xs font-bold transition-colors shadow-sm">
            <Download className="size-4" />
            <span>Download</span>
          </button>
          <button className="flex items-center gap-1.5 h-8 px-3 bg-primary hover:bg-primary/90 text-white rounded-lg text-xs font-bold transition-colors shadow-sm shadow-primary/20">
            <ShieldCheck className="size-4" />
            <span>Verify</span>
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-4">
        <div className="flex flex-col lg:flex-row items-end gap-3">
          <label className="flex flex-col w-full lg:w-auto min-w-[160px]">
            <span className="text-xs font-semibold text-[#131118] mb-1 ml-1">
              Date Range
            </span>
            <div className="relative">
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="appearance-none w-full h-9 px-3 pr-8 bg-[#f6f6f8] border-transparent rounded-lg text-xs font-medium text-[#131118] focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer outline-none"
              >
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Year 2024</option>
                <option>All time</option>
              </select>
              <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none" />
            </div>
          </label>

          <label className="flex flex-col w-full lg:w-auto min-w-[200px] flex-1">
            <span className="text-xs font-semibold text-[#131118] mb-1 ml-1">
              Election Event
            </span>
            <div className="relative">
              <select
                value={electionFilter}
                onChange={(e) => setElectionFilter(e.target.value)}
                className="appearance-none w-full h-9 px-3 pr-8 bg-[#f6f6f8] border-transparent rounded-lg text-xs font-medium text-[#131118] focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer outline-none"
              >
                <option>All Elections</option>
                <option>National General Election 2024</option>
                <option>Local Council Referendum</option>
                <option>State Senate Primaries</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none" />
            </div>
          </label>

          <div className="flex flex-col w-full lg:w-auto">
            <span className="text-xs font-semibold text-[#131118] mb-1 ml-1">
              Status
            </span>
            <div className="flex h-9 p-0.5 bg-[#f6f6f8] rounded-lg w-full lg:w-auto">
              {["All", "Confirmed", "Pending"].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`flex-1 lg:flex-none lg:w-20 flex items-center justify-center rounded-md transition-all font-medium text-xs ${
                    statusFilter === status
                      ? "bg-white shadow-sm text-primary"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="py-2.5 pl-4 pr-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Date & Time
                </th>
                <th className="py-2.5 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Election
                </th>
                <th className="py-2.5 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Candidate
                </th>
                <th className="py-2.5 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Tx Hash
                </th>
                <th className="py-2.5 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="py-2.5 pl-3 pr-4 text-[10px] font-semibold uppercase tracking-wider text-gray-500 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-xs divide-y divide-gray-100">
              {HISTORY_DATA.map((row) => (
                <Fragment key={row.id}>
                  <tr
                    onClick={() =>
                      row.status === "Confirmed" && toggleRow(row.id)
                    }
                    className={`group hover:bg-gray-50 transition-colors cursor-pointer ${expandedRow === row.id ? "bg-primary/5" : ""}`}
                  >
                    <td className="py-2.5 pl-4 pr-3 font-medium text-[#131118] whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        {expandedRow === row.id ? (
                          <ChevronUp
                            className={`size-4 text-primary transition-colors`}
                          />
                        ) : (
                          <ChevronDown
                            className={`size-4 text-gray-400 group-hover:text-primary transition-colors`}
                          />
                        )}
                        <span>{row.date}</span>
                        <span className="text-gray-500 font-normal">
                          {row.time}
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-[#131118] font-medium">
                      {row.election}
                    </td>
                    <td className="py-2.5 px-3 text-[#131118]">
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`size-5 rounded-full ${row.candidateColor} flex items-center justify-center text-[10px] font-bold`}
                        >
                          {row.candidateInitial}
                        </div>
                        {row.candidate}
                      </div>
                    </td>
                    <td className="py-2.5 px-3">
                      <div className="flex items-center gap-1.5 group/hash">
                        {row.txHash ? (
                          <>
                            <span className="font-mono text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">
                              {row.txHash}
                            </span>
                            <button className="opacity-0 group-hover/hash:opacity-100 transition-opacity text-gray-400 hover:text-primary">
                              <Copy className="size-3" />
                            </button>
                          </>
                        ) : (
                          <span className="font-mono text-gray-400 italic text-[10px]">
                            Generating...
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-2.5 px-3">
                      {row.status === "Confirmed" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-100 text-green-700">
                          <CheckCircle className="size-3" />
                          Confirmed
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-yellow-100 text-yellow-700">
                          <Loader2 className="size-3 animate-spin" />
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 pl-3 pr-4 text-right">
                      {row.txHash ? (
                        <a
                          className="inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
                          href="#"
                          title="View on Blockchain"
                        >
                          <ExternalLink className="size-4" />
                        </a>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center justify-center p-1 rounded-md text-gray-300 cursor-not-allowed"
                        >
                          <ExternalLink className="size-4" />
                        </button>
                      )}
                    </td>
                  </tr>

                  {expandedRow === row.id && row.status === "Confirmed" && (
                    <tr className="bg-gray-50/50">
                      <td className="p-0" colSpan={6}>
                        <div className="px-4 py-3 border-l-4 border-primary ml-4 my-1.5 mr-4 bg-white rounded-r-lg shadow-sm">
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="flex flex-col gap-0.5">
                              <span className="text-[10px] uppercase tracking-wide text-gray-500">
                                Full Tx Hash
                              </span>
                              <div className="flex items-center gap-1">
                                <span className="font-mono text-[10px] text-[#131118] truncate max-w-[120px]">
                                  {row.fullTxHash}
                                </span>
                                <button className="text-gray-400 hover:text-primary">
                                  <Copy className="size-3" />
                                </button>
                              </div>
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className="text-[10px] uppercase tracking-wide text-gray-500">
                                Block Number
                              </span>
                              <span className="font-mono text-xs font-medium text-primary">
                                {row.blockNumber}
                              </span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className="text-[10px] uppercase tracking-wide text-gray-500">
                                Gas Used
                              </span>
                              <span className="font-mono text-xs text-[#131118]">
                                {row.gasUsed}
                              </span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className="text-[10px] uppercase tracking-wide text-gray-500">
                                Contract
                              </span>
                              <a
                                className="font-mono text-xs text-primary hover:underline"
                                href="#"
                              >
                                {row.contractAddress}
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-2.5 border-t border-gray-100 flex items-center justify-between bg-white">
          <span className="text-xs text-gray-500">
            Showing <span className="font-semibold text-[#131118]">1-3</span> of{" "}
            <span className="font-semibold text-[#131118]">12</span>
          </span>
          <div className="flex gap-1.5">
            <button
              disabled
              className="px-2 py-1 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-xs disabled:opacity-50"
            >
              Previous
            </button>
            <button className="px-2 py-1 rounded-md border border-gray-200 text-[#131118] hover:bg-gray-50 text-xs">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
