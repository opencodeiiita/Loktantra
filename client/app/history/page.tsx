'use client'

import Navbar from '@/components/Navbar'
import StatusBadge from '@/components/StatusBadge'
import { ExternalLink, CheckCircle2 } from 'lucide-react'

export default function HistoryPage() {
  const voteHistory = [
    {
      id: 1,
      election: 'National Council Representative 2024',
      candidate: 'Narendra Modi',
      party: 'Bharatiya Janata Party',
      date: '2024-01-02',
      time: '14:23:45',
      status: 'confirmed',
      txHash: '0x1234...5678',
      blockNumber: '18234567',
    },
    {
      id: 2,
      election: 'State Assembly Election 2023',
      candidate: 'Arvind Kejriwal',
      party: 'Aam Aadmi Party',
      date: '2023-11-15',
      time: '10:15:32',
      status: 'confirmed',
      txHash: '0x8765...4321',
      blockNumber: '17856432',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Voting History</h1>
          <p className="text-gray-600 text-lg">
            Your complete voting record stored immutably on the blockchain
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="text-sm text-gray-600 mb-2">Total Votes Cast</div>
            <div className="text-4xl font-bold text-gray-900">{voteHistory.length}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="text-sm text-gray-600 mb-2">Elections Participated</div>
            <div className="text-4xl font-bold text-gray-900">{voteHistory.length}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="text-sm text-gray-600 mb-2">Participation Rate</div>
            <div className="text-4xl font-bold text-green-600">100%</div>
          </div>
        </div>

        {/* Vote History Cards */}
        <div className="space-y-6">
          {voteHistory.map((vote) => (
            <div
              key={vote.id}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{vote.election}</h3>
                    <StatusBadge status="confirmed" size="sm" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{vote.date}</span>
                    <span>•</span>
                    <span>{vote.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-xl">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Verified</span>
                </div>
              </div>

              {/* Vote Details Grid */}
              <div className="grid grid-cols-2 gap-6 mb-6 p-6 bg-gray-50 rounded-xl">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Candidate</div>
                  <div className="text-lg font-bold text-gray-900">{vote.candidate}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Party</div>
                  <div className="text-lg font-bold text-gray-900">{vote.party}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Transaction Hash</div>
                  <div className="font-mono text-sm text-indigo-600 flex items-center gap-2">
                    {vote.txHash}
                    <button className="hover:text-indigo-700">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Block Number</div>
                  <div className="font-mono text-sm font-semibold text-gray-900">
                    {vote.blockNumber}
                  </div>
                </div>
              </div>

              {/* Blockchain Verification */}
              <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Verified on Ethereum Blockchain</div>
                    <div className="text-sm text-gray-600">Immutable and publicly auditable</div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                  View on Etherscan
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
