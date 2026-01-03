'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import RankerCard from '@/components/RankerCard';
import Sidebar from '@/components/Sidebar';
import ResultsChart from '@/components/ResultsChart';

export default function Results() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<'card' | 'chart'>('card');

  // Top 3 candidates data
  const topCandidates = [
    { name: 'Vikram Singh', votes: 5234, percentage: 34.3, image: '/modiji.png' },
    { name: 'Rahul Sharma', votes: 4123, percentage: 27.0, image: '/rahulji.png' },
    { name: 'Priya Patel', votes: 2876, percentage: 18.8, image: '/rahulji.png' }
  ];

  const totalVotes = 15234;

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
                  <h1 className="text-2xl font-bold text-gray-800">Election Results</h1>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full font-medium">Live</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setViewMode('card')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      viewMode === 'card' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <i className="fas fa-th-large mr-2"></i>
                    Card View
                  </button>
                  <button 
                    onClick={() => setViewMode('chart')}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      viewMode === 'chart' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <i className="fas fa-chart-bar mr-2"></i>
                    Chart View
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                    <i className="fas fa-sync-alt mr-2"></i>
                    Refresh
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                <i className="fas fa-clock mr-1"></i>
                Last updated: January 2, 2025 at 3:45 PM
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">15,234</div>
                <div className="text-sm text-gray-600">Total Votes</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">8,456</div>
                <div className="text-sm text-gray-600">Registered Voters</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-600">67%</div>
                <div className="text-sm text-gray-600">Voter Turnout</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rankers Section */}
        <div className="p-8 pt-0">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Top 3 Ranked Candidates</h3>
            
            {viewMode === 'card' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RankerCard
                  rank={1}
                  name="Vikram Singh"
                  party="Reform Party"
                  votes={5234}
                  percentage={34.3}
                  image="/modiji.png"
                />
                <RankerCard
                  rank={2}
                  name="Rahul Sharma"
                  party="Progressive Party"
                  votes={4123}
                  percentage={27.0}
                  image="/rahulji.png"
                />
                <RankerCard
                  rank={3}
                  name="Priya Patel"
                  party="Green Future"
                  votes={2876}
                  percentage={18.8}
                  image="/rahulji.png"
                />
              </div>
            ) : (
              <ResultsChart candidates={topCandidates} totalVotes={totalVotes} />
            )}
          </div>
        </div>

        {/* Blockchain Verification Section */}
        <div className="p-8 pt-0">
          <div className="flex flex-col items-center">
            {/* Main Card */}
            <div className="w-full max-w-[1100px] flex justify-between items-center rounded-xl px-8 py-7 
                            bg-gradient-to-br from-[#0b0f1c] to-[#1b1235] 
                            text-white shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

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
                    <span className="block text-xs text-slate-400">Smart Contract</span>
                    <span className="text-sm mt-1 block">0x7A...8A9</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Latest Block</span>
                    <span className="text-sm mt-1 block text-green-400">#845,216</span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex gap-3">
                <button className="px-4 py-2 text-sm rounded-lg bg-white text-black font-medium">
                  Download Audit Report
                </button>
                <button className="px-4 py-2 text-sm rounded-lg 
                                   bg-white/10 border border-white/20 text-white">
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
