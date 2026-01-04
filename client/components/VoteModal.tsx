'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

interface VoteModalProps {
  isOpen: boolean
  onClose: () => void
  candidate: {
    name: string
    party: string
    image: string
  }
  onConfirm: () => void
}

export default function VoteModal({ isOpen, onClose, candidate, onConfirm }: VoteModalProps) {
  const [isConfirmed, setIsConfirmed] = useState(false)

  if (!isOpen) return null

  const handleConfirm = () => {
    if (isConfirmed) {
      onConfirm()
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center backdrop-blur-sm">
        {/* Modal Card */}
        <div className="relative z-50 bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 p-8 animate-in fade-in zoom-in duration-200">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l6.59-6.59L20 9l-8 8z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">
            Confirm Your Vote
          </h2>
          <p className="text-red-600 text-center text-sm font-medium mb-8">
            This action cannot be undone
          </p>

          {/* Candidate Details */}
          <div className="space-y-4 mb-6">
            {/* Candidate */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-sm text-gray-500">Candidate</span>
              <span className="font-semibold text-gray-900">{candidate.name}</span>
            </div>

            {/* Party */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-sm text-gray-500">Party</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">{candidate.party}</span>
                <span className="text-lg">🚀</span>
              </div>
            </div>

            {/* Wallet */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-sm text-gray-500">Your Wallet</span>
              <span className="font-mono text-sm font-semibold text-gray-900">0x12...89AB</span>
            </div>

            {/* Gas Fee */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-sm text-gray-500">Gas Fee</span>
              <div className="text-right">
                <div className="font-semibold text-gray-900">~$0.45</div>
                <div className="text-xs text-gray-500">≈0.0003 ETH</div>
              </div>
            </div>

            {/* Transaction Time */}
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-gray-500">Transaction Time</span>
              <div className="flex items-center gap-1 text-gray-900 font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                ~30 seconds
              </div>
            </div>
          </div>

          {/* Confirmation Checkbox */}
          <label className="flex items-start gap-3 mb-6 cursor-pointer group">
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">
              I confirm this is my final choice and understand that my vote cannot be changed after submission
            </span>
          </label>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={!isConfirmed}
              className={`flex-1 px-6 py-3 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${
                isConfirmed
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Confirm & Cast Vote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Footer Note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            Your vote will be recorded on the Ethereum blockchain
          </div>
        </div>
      </div>
    </>
  )
}
