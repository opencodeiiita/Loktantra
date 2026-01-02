"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import {
  Vote,
  Bell,
  Plus,
  MoreVertical,
  Search,
  Users,
  VoteIcon,
  Server,
  PlayCircle,
  StopCircle,
  Upload,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

interface Candidate {
  id: number;
  name: string;
  party: string;
  image: string;
  active: boolean;
}

const INITIAL_CANDIDATES: Candidate[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    party: "Liberty Party",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBj6nSG1HDplGuRf_9G3Kh8aZoF3I7yonfB5cHfcp_tWLghrsZbbt2W5rqEKY2iiJMuhjhKmJ9x6NqLHdi4DTSI_cG7_ZEO92oEy9voNGY7ZEKf6ziPpLabAHsoEsBpNj1yt87TBnTGRuxoEplfYy2DYEjwgddplz2axyPVFcQymhOhID6hX8Zh1Ku9WGWhCkKeOnEiEE8ITIAJ3Pm8atpcSA6U2Xgu6qvKOtyF2QP45w77ThW0hkMJJtzukycugexnbMmWybVZeA",
    active: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    party: "Progressive Alliance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCBHYT4obkyh_wfNCHlPpYfemm3t-FIimllcgVcfX9_MhPpApWlmEHe976ASHiivVNBYy5ekiIxrZnXC8SKWGzFAJZ8WIxvi53wBimqbqy42SnBewgqJoyywL4i-IVm9gu5f75WRnyvf1x4U1jAHGEBewh8alR3T3jZqrAiePuRUHt790fSygYiv2yqfbR13RwI1v_6k0m4rwCk-Fbhekj5t75VPt_Wq1NElJrgO_Pg3ZRd_4DqbA4WEzuc5KIeNoaY6IHI6o6hQ",
    active: true,
  },
  {
    id: 3,
    name: "Emily Davis",
    party: "Independent",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARV50iwREbaFunbcoaCB4xSoqNVKA_EHSnO4HFy5Imwk8Xw2yVebgCXd80ShYVU2NpYrgmHJ6gbDHiV67GO72S-4pbN21QOpfdSpcqJlrIAeS2lHNQ8wgfQnjh_9GPsIrrQEAkQIJ6kHhxjyUjjATjAVsqjyizqoTKGE0KiFf5oHB7OPrSiIqXRGVdX7HDrgRfUS16G4nQlNTEFFGZQ3j6iSSp9Erz9r8OQmMXGBVaDfahhDAF639_5CxVqzfEnzQD-MyIokJbqg",
    active: false,
  },
  {
    id: 4,
    name: "David Wilson",
    party: "Future Vision",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6M1u5FrDpa_-dtxAaybIxalJ2EOVPjkS1Tg1YxcMtghnxurYNrmF7nrk6GdJp1JfgTHBZlsQQw581GqyaCEaWiIjiP_ZhRsIxdbSca7tmAY3cEXzStku5-RarT4QbtDNnFHjy_6e8tCaslrFsQ88tPue-FibNGhJXJuwevNlpIx1Hp2Ve_6nmT_IqKdcIG-h2sN041lvGv4s6lPEZw1Ssj5v5hIs4RkvJXJtG4A4tHJz2_BluG7U28RWX7669KwwAoGAXUPsWtQ",
    active: true,
  },
];

type FilterType = "All" | "Active" | "Inactive";

export default function AdminPage() {
  const [candidates, setCandidates] = useState<Candidate[]>(INITIAL_CANDIDATES);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<FilterType>("All");

  const toggleCandidateStatus = (id: number): void => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, active: !c.active } : c)),
    );
  };

  const removeCandidate = (id: number): void => {
    setCandidates((prev) => prev.filter((c) => c.id !== id));
  };

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.party.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "All"
        ? true
        : filter === "Active"
          ? candidate.active
          : !candidate.active;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-[#f6f6f8] min-h-screen flex flex-col font-display text-[#131118]">
      {/* Top Navigation */}
      <header className="bg-white border-b border-[#f1f0f4] sticky top-0 z-50">
        <div className="px-6 lg:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[#131118]">
            <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
              <Vote className="size-6" />
            </div>
            <h2 className="text-[#131118] text-xl font-bold leading-tight tracking-[-0.015em]">
              Loktantra
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-primary font-bold text-sm leading-normal border-b-2 border-primary pb-0.5"
              href="#"
            >
              Elections
            </a>
            <a
              className="text-[#6e6189] hover:text-primary transition-colors text-sm font-medium leading-normal"
              href="#"
            >
              Candidates
            </a>
            <a
              className="text-[#6e6189] hover:text-primary transition-colors text-sm font-medium leading-normal"
              href="#"
            >
              Voters
            </a>
            <a
              className="text-[#6e6189] hover:text-primary transition-colors text-sm font-medium leading-normal"
              href="#"
            >
              Analytics
            </a>
            <a
              className="text-[#6e6189] hover:text-primary transition-colors text-sm font-medium leading-normal"
              href="#"
            >
              Settings
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-[#6e6189]">
              <Bell className="size-6" />
            </button>
            <div className="size-10 bg-gray-200 rounded-full overflow-hidden border border-gray-100">
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Tables & Lists (Main Workspace) */}
        <div className="lg:col-span-9 flex flex-col gap-8">
          {/* Section: Manage Elections */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <h1 className="text-[#131118] text-3xl font-bold tracking-tight">
                Manage Elections
              </h1>
              <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-xl px-5 h-11 text-sm font-bold transition-all shadow-sm shadow-primary/30">
                <Plus className="size-5" />
                Create Election
              </button>
            </div>
            {/* Election Table Card */}
            <div className="rounded-xl border border-[#dedbe6] bg-white shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-[#dedbe6]">
                      <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6e6189] tracking-wider">
                        Election Name
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6e6189] tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6e6189] tracking-wider whitespace-nowrap">
                        Start Date
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6e6189] tracking-wider whitespace-nowrap">
                        End Date
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6e6189] tracking-wider text-right">
                        Total Votes
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6e6189] tracking-wider text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dedbe6]">
                    <tr className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4 text-sm font-medium text-[#131118]">
                        Student Council 2024
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6e6189] whitespace-nowrap">
                        Oct 20, 2024
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6e6189] whitespace-nowrap">
                        Oct 21, 2024
                      </td>
                      <td className="px-6 py-4 text-sm text-[#131118] font-semibold text-right">
                        1,245
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[#6e6189] hover:text-primary p-1 rounded hover:bg-gray-100 transition-colors">
                          <MoreVertical className="size-6" />
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4 text-sm font-medium text-[#131118]">
                        Local Council A
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                          Draft
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6e6189] whitespace-nowrap">
                        Nov 01, 2024
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6e6189] whitespace-nowrap">
                        Nov 02, 2024
                      </td>
                      <td className="px-6 py-4 text-sm text-[#131118] font-semibold text-right">
                        0
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[#6e6189] hover:text-primary p-1 rounded hover:bg-gray-100 transition-colors">
                          <MoreVertical className="size-6" />
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4 text-sm font-medium text-[#131118]">
                        Community Board
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                          Ended
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6e6189] whitespace-nowrap">
                        Sep 15, 2024
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6e6189] whitespace-nowrap">
                        Sep 16, 2024
                      </td>
                      <td className="px-6 py-4 text-sm text-[#131118] font-semibold text-right">
                        850
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[#6e6189] hover:text-primary p-1 rounded hover:bg-gray-100 transition-colors">
                          <MoreVertical className="size-6" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <hr className="border-[#dedbe6]" />

          {/* Section: Manage Candidates */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-[#131118] text-2xl font-bold leading-tight">
                Manage Candidates
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setFilter("All")}
                    className={`px-4 py-1.5 text-xs font-semibold rounded shadow-sm transition-all ${filter === "All" ? "bg-white text-[#131118]" : "text-[#6e6189] hover:text-[#131118]"}`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilter("Active")}
                    className={`px-4 py-1.5 text-xs font-medium rounded shadow-sm transition-all ${filter === "Active" ? "bg-white text-[#131118]" : "text-[#6e6189] hover:text-[#131118]"}`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => setFilter("Inactive")}
                    className={`px-4 py-1.5 text-xs font-medium rounded shadow-sm transition-all ${filter === "Inactive" ? "bg-white text-[#131118]" : "text-[#6e6189] hover:text-[#131118]"}`}
                  >
                    Inactive
                  </button>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="size-6 text-[#6e6189]" />
              </div>
              <input
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                className="block w-full pl-10 pr-3 py-3 border border-[#dedbe6] rounded-xl leading-5 bg-white placeholder-[#6e6189] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Search candidates by name or party..."
                type="text"
              />
            </div>

            {/* Candidate Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCandidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="bg-white rounded-xl border border-[#dedbe6] p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="size-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 relative">
                    <Image
                      className="object-cover"
                      src={candidate.image}
                      alt={candidate.name}
                      fill
                      sizes="56px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-[#131118] truncate">
                      {candidate.name}
                    </h3>
                    <p className="text-xs text-[#6e6189] truncate">
                      {candidate.party}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div
                      onClick={() => toggleCandidateStatus(candidate.id)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${candidate.active ? "bg-primary" : "bg-gray-200"}`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${candidate.active ? "translate-x-5" : "translate-x-0"}`}
                      ></span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button className="p-2 text-[#6e6189] hover:text-primary hover:bg-primary/5 rounded-lg text-xs font-medium">
                        Edit
                      </button>
                      <button
                        onClick={() => removeCandidate(candidate.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg text-xs font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar (Quick Actions & Stats) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Live Stats Card */}
          <div className="bg-white p-5 rounded-xl border border-[#dedbe6] shadow-sm flex flex-col gap-4">
            <h3 className="text-[#131118] text-sm font-bold uppercase tracking-wider mb-2">
              Real-Time Stats
            </h3>
            <div className="flex items-start gap-3 pb-3 border-b border-[#f1f0f4]">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Users className="size-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#131118]">452</p>
                <p className="text-xs text-[#6e6189] font-medium">
                  Active Voters
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-[#f1f0f4]">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                <VoteIcon className="size-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#131118]">1,245</p>
                <p className="text-xs text-[#6e6189] font-medium">Votes Cast</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                <Server className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <p className="text-sm font-bold text-[#131118]">
                    Operational
                  </p>
                </div>
                <p className="text-xs text-[#6e6189] font-medium">
                  System Status
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white p-5 rounded-xl border border-[#dedbe6] shadow-sm flex flex-col gap-4">
            <h3 className="text-[#131118] text-sm font-bold uppercase tracking-wider mb-2">
              Quick Actions
            </h3>
            <button className="w-full flex items-center justify-between px-4 py-3 bg-[#f0fdf4] text-[#166534] border border-[#dcfce7] hover:bg-[#dcfce7] rounded-lg text-sm font-bold transition-colors">
              <span>Start Election</span>
              <PlayCircle className="size-5" />
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 bg-[#fef2f2] text-[#991b1b] border border-[#fee2e2] hover:bg-[#fee2e2] rounded-lg text-sm font-bold transition-colors">
              <span>End Election</span>
              <StopCircle className="size-5" />
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 bg-[#eff6ff] text-[#1e40af] border border-[#dbeafe] hover:bg-[#dbeafe] rounded-lg text-sm font-bold transition-colors">
              <span>Publish Results</span>
              <Upload className="size-5" />
            </button>
          </div>

          {/* Help/Docs Link */}
          <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-start gap-3">
              <BookOpen className="size-6 text-primary" />
              <div>
                <h4 className="text-sm font-bold text-[#131118]">
                  Admin Guide
                </h4>
                <p className="text-xs text-[#6e6189] mt-1 leading-relaxed">
                  Need help managing elections? Check the documentation for best
                  practices.
                </p>
                <a
                  className="inline-block mt-2 text-xs font-bold text-primary hover:underline"
                  href="#"
                >
                  Read Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Security Notice */}
      <div className="mt-auto bg-white border-t border-[#f1f0f4] py-3 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200">
          <ShieldCheck className="size-[18px] text-gray-400" />
          <span className="text-xs font-medium text-gray-500">
            Admin actions are logged on blockchain for transparency
          </span>
        </div>
      </div>
    </div>
  );
}
