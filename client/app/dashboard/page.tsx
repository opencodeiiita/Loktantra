'use client'

import { useState } from 'react'
import CandidateCard from '@/components/CandidateCard'
import StatusBadge from '@/components/StatusBadge'
import { Clock, Users, TrendingUp } from 'lucide-react'

export default function DashboardPage() {
  const [hasVoted, setHasVoted] = useState(false)

  const candidates = [
    {
      id: 1,
      name: 'Narendra Modi',
      party: 'Bharatiya Janata Party',
      manifesto: 'Focus on economic development, digital India, and infrastructure growth.',
      votes: 1200,
      image: '/candidates/modi.jpg',
    },
    {
      id: 2,
      name: 'Rahul Gandhi',
      party: 'Indian National Congress',
      manifesto: 'Emphasis on social welfare, employment generation, and inclusive growth.',
      votes: 850,
      image: '/candidates/rahul.jpg',
    },
    {
      id: 3,
      name: 'Arvind Kejriwal',
      party: 'Aam Aadmi Party',
      manifesto: 'Anti-corruption agenda, education, and healthcare reforms.',
      votes: 620,
      image: '/candidates/arvind.jpg',
    },
  ]

  const handleVote = (candidateId: number) => {
    console.log('Voted for candidate:', candidateId)
    setHasVoted(true)
    // TODO: Integrate with blockchain
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              National Council Election 2024
            </h1>
            <p className="text-gray-600">Cast your vote for the next representative</p>
          </div>
          <StatusBadge status="active" animated size="lg" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-xl">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Total Voters</div>
              <div className="text-2xl font-bold text-gray-900">5,000</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Votes Cast</div>
              <div className="text-2xl font-bold text-gray-900">2,670</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Time Remaining</div>
              <div className="text-2xl font-bold text-gray-900">2d 5h</div>
            </div>
          </div>
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Candidate</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              {...candidate}
              hasVoted={hasVoted}
              onVote={handleVote}
            />
          ))}
        </div>

        {hasVoted && (
          <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-green-900 text-lg">Vote Submitted Successfully!</div>
              <div className="text-green-700">Your vote has been recorded on the blockchain and cannot be changed.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
