'use client'

import { useState } from 'react'
import VoteModal from './VoteModal'

interface CandidateCardProps {
  id: number
  name: string
  party: string
  image?: string
  votes?: number
  manifesto?: string
  hasVoted?: boolean
  onVote?: (candidateId: number) => void
  showVoteButton?: boolean
}

export default function CandidateCard({
  id,
  name,
  party,
  image,
  votes,
  manifesto,
  hasVoted = false,
  onVote,
  showVoteButton = true,
}: CandidateCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleVoteClick = () => {
    setIsModalOpen(true)
  }

  const handleConfirmVote = () => {
    if (onVote) {
      onVote(id)
    }
    setIsModalOpen(false)
  }

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
        {/* Candidate Image */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">
                {getInitials(name)}
              </div>
            )}
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
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span className="text-sm">{party}</span>
            {party.includes('Party') && (
              <span className="text-lg">🚀</span>
            )}
          </div>
        </div>

        {/* Manifesto */}
        {manifesto && (
          <p className="text-sm text-gray-600 text-center mb-4 line-clamp-2">
            {manifesto}
          </p>
        )}

        {/* Vote Count (if available) */}
        {votes !== undefined && (
          <div className="bg-gray-50 rounded-xl p-3 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Current Votes</span>
              <span className="text-lg font-bold text-gray-900">
                {votes.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {/* Vote Button */}
        {showVoteButton && (
          <button
            onClick={handleVoteClick}
            disabled={hasVoted}
            className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
              hasVoted
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/30'
            }`}
          >
            {hasVoted ? (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Already Voted
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                Cast Vote
              </>
            )}
          </button>
        )}

        {/* Additional Info Button */}
        <button className="w-full mt-2 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">
          View Full Profile →
        </button>
      </div>

      {/* Vote Modal */}
      <VoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        candidate={{ name, party, image: image || '' }}
        onConfirm={handleConfirmVote}
      />
    </>
  )
}
