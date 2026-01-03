'use client'

import Navbar from '@/components/Navbar'
import StatusBadge from '@/components/StatusBadge'
import { RefreshCw, Download, TrendingUp, Users, Clock } from 'lucide-react'

export default function ResultsPage() {
  const candidates = [
    {
      id: 1,
      name: 'Narendra Modi',
      party: 'Bharatiya Janata Party',
      votes: 1320,
      percentage: 49,
      image: '/candidates/modi.jpg',
      isLeading: true,
      badge: '#1',
      trend: '+5%',
    },
    {
      id: 2,
      name: 'Rahul Gandhi',
      party: 'Indian National Congress',
      votes: 875,
      percentage: 33,
      image: '/candidates/rahul.jpg',
      isLeading: false,
      badge: '#2',
      trend: '+2%',
    },
    {
      id: 3,
      name: 'Arvind Kejriwal',
      party: 'Aam Aadmi Party',
      votes: 485,
      percentage: 18,
      image: '/candidates/kejriwal.jpg',
      isLeading: false,
      badge: '#3',
      trend: '-1%',
    },
  ]

  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-gray-900">Live Election Results</h1>
                <StatusBadge status="live" animated size="lg" />
              </div>
              <p className="text-gray-600 text-lg">National Council Representative 2024</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <Clock className="w-4 h-4" />
                Last updated: Just Now
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2.5 bg-white border border-gray-300 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition-colors font-medium">
                <Download className="w-4 h-4" />
                Export Results
              </button>
              <button className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl flex items-center gap-2 hover:bg-indigo-700 transition-colors font-medium shadow-lg shadow-indigo-500/30">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border border-indigo-200">
              <div className="text-sm text-indigo-700 font-medium mb-2">Total Votes Cast</div>
              <div className="flex items-baseline gap-2">
                <div className="text-4xl font-bold text-indigo-900">{totalVotes.toLocaleString()}</div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  +12%
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
              <div className="text-sm text-green-700 font-medium mb-2">Registered Voters</div>
              <div className="text-4xl font-bold text-green-900">5,000</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
              <div className="text-sm text-orange-700 font-medium mb-2">Voter Turnout</div>
              <div className="text-4xl font-bold text-orange-900">
                {Math.round((totalVotes / 5000) * 100)}%
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
              <div className="text-sm text-purple-700 font-medium mb-2">Time Remaining</div>
              <div className="text-4xl font-bold text-purple-900">2d 5h</div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Candidate Rankings</h2>

        <div className="grid grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className={`bg-white rounded-2xl p-6 border-2 relative transition-all hover:shadow-xl ${
                candidate.isLeading
                  ? 'border-green-500 shadow-lg shadow-green-100'
                  : 'border-gray-200'
              }`}
            >
              {/* Position Badge */}
              <div
                className={`absolute -top-3 -left-3 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                  candidate.id === 1
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                    : candidate.id === 2
                    ? 'bg-gradient-to-br from-gray-300 to-gray-500'
                    : 'bg-gradient-to-br from-orange-400 to-orange-600'
                }`}
              >
                {candidate.badge}
              </div>

              {/* Leading Badge */}
              {candidate.isLeading && (
                <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  LEADING
                </div>
              )}

              {/* Candidate Avatar */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-4 border-white shadow-lg flex items-center justify-center text-3xl font-bold text-gray-600">
                    {candidate.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Candidate Info */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
                {candidate.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6">{candidate.party}</p>

              {/* Vote Stats */}
              <div className="space-y-4 mb-6">
                {/* Vote Count */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    {candidate.votes.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center justify-center gap-2">
                    <span>votes</span>
                    <span className={`font-semibold ${candidate.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {candidate.trend}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Vote Share</span>
                    <span className="font-bold text-gray-900">{candidate.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        candidate.isLeading
                          ? 'bg-gradient-to-r from-green-500 to-green-600'
                          : 'bg-gradient-to-r from-indigo-500 to-purple-600'
                      }`}
                      style={{ width: `${candidate.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* View Details Button */}
              <button className="w-full py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                View Detailed Analytics
              </button>
            </div>
          ))}
        </div>

        {/* Blockchain Verification */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Verified on Ethereum Blockchain
              </h3>
              <p className="text-gray-600 mb-4">
                All votes are cryptographically secured and publicly verifiable on the Ethereum blockchain.
                Transaction hash and block details available for full transparency.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Block Height:</span>
                  <span className="font-mono font-semibold text-gray-900">18,234,567</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Network:</span>
                  <span className="font-semibold text-gray-900">Ethereum Mainnet</span>
                </div>
                <button className="ml-auto text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1">
                  View on Etherscan
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
