'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
export default function Dashboard() {
  const [hasVoted, setHasVoted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
  const handleVote = (candidate: any) => {
    setSelectedCandidate(candidate);
    setShowConfirmPopup(true);
  };

  const confirmVote = () => {
    setHasVoted(true);
    setShowConfirmPopup(false);
    setSelectedCandidate(null);
  };

  const cancelVote = () => {
    setShowConfirmPopup(false);
    setSelectedCandidate(null);
  };

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-200 flex">
      {/* Sidebar */}
      <Sidebar currentPage="dashboard" />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800 mr-3">2025 Election is Live</h1>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">Live</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <i className="fas fa-bell text-black text-lg"></i>
              </button>
              <button onClick={() => router.push('/')} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <i className="fas fa-sign-out-alt text-black text-lg"></i>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-600 text-sm">Total Voters</h3>
                <i className="fas fa-users text-blue-600"></i>
              </div>
              <p className="text-2xl font-bold text-gray-800">15,234</p>
              <p className="text-xs text-green-600 mt-1">+12% from last election</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-600 text-sm">Votes Cast</h3>
                <i className="fas fa-vote-yea text-green-600"></i>
              </div>
              <p className="text-2xl font-bold text-gray-800">8,456</p>
              <p className="text-xs text-gray-500 mt-1">55.5% turnout</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-600 text-sm">Candidates</h3>
                <i className="fas fa-user-tie text-purple-600"></i>
              </div>
              <p className="text-2xl font-bold text-gray-800">6</p>
              <p className="text-xs text-gray-500 mt-1">3 parties</p>
            </div>
            
            <div className="bg-black p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-300 text-sm">Time Left</h3>
                <i className="fas fa-clock text-red-600"></i>
              </div>
              <p className="text-2xl font-bold text-white">2d 14h</p>
              <p className="text-xs text-red-600 mt-1">Election ends soon</p>
            </div>
          </div>

          {/* Voting Section */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Candidates</h2>
              <div className="flex items-center">
                <div className="relative mr-4">
                  <input
                    type="text"
                    placeholder="Search candidates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { id: 1, name: 'Rahul Sharma', party: 'Progressive Party', votes: 1234, image: 'rahulji.png' },
                  { id: 2, name: 'Priya Patel', party: 'Green Future', votes: 987, image: 'rahulji.png' },
                  { id: 3, name: 'Amit Kumar', party: 'Democratic Alliance', votes: 756, image: 'modiji.png' },
                  { id: 4, name: 'Sneha Reddy', party: 'People First', votes: 543, image: 'rahulji.png' },
                  { id: 5, name: 'Vikram Singh', party: 'Reform Party', votes: 432, image: 'modiji.png' },
                  { id: 6, name: 'Anjali Gupta', party: 'National Unity', votes: 321, image: 'rahulji.png' }
                ]
                  .filter(candidate => 
                    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    candidate.party.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((candidate) => (
                  <div key={candidate.id} className="bg-blue-50 border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {candidate.image ? (
                          <img src={`/${candidate.image}`} alt={candidate.name} className="w-12 h-12 rounded-full mr-3 object-cover" />
                        ) : (
                          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                            <i className="fas fa-user text-gray-600"></i>
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold text-gray-800">{candidate.name}</h3>
                          <p className="text-sm text-gray-600">{candidate.party}</p>
                        </div>
                      </div>
                      {candidate.party === 'Reform Party' && (
                        <img src="/bjp.png" alt="BJP" className="w-8 h-8 object-contain" />
                      )}
                      {candidate.party === 'Progressive Party' && (
                        <img src="/congress.png" alt="Congress" className="w-8 h-8 object-contain" />
                      )}
                      {candidate.party === 'Green Future' && (
                        <img src="/congress.png" alt="Congress" className="w-8 h-8 object-contain" />
                      )}
                      {candidate.party === 'Democratic Alliance' && (
                        <img src="/bjp.png" alt="BJP" className="w-8 h-8 object-contain" />
                      )}
                      {candidate.party === 'People First' && (
                        <img src="/congress.png" alt="Congress" className="w-8 h-8 object-contain" />
                      )}
                      {candidate.party === 'National Unity' && (
                        <img src="/bjp.png" alt="BJP" className="w-8 h-8 object-contain" />
                      )}
                    </div>
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">{candidate.votes} votes</span>
                    </div>
                    <button 
                      onClick={() => handleVote(candidate)}
                      disabled={hasVoted}
                      className={`w-full py-2 rounded-lg transition-colors ${
                        hasVoted 
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {hasVoted ? 'Voted' : 'Vote'}
                    </button>
                    {hasVoted && selectedCandidate?.id === candidate.id && (
                      <div className="mt-2 text-center">
                        <span className="text-xs text-green-600 font-medium">
                          <i className="fas fa-check-circle mr-1"></i>
                          You voted for this candidate
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showConfirmPopup && selectedCandidate && (
        <div className="fixed inset-0 backdrop-blur-sm bg-gray-900/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg border border-gray-200 p-6 max-w-sm w-full mx-4 transform transition-all">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-vote-yea text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Confirm Your Vote</h3>
              <p className="text-gray-600 mb-4 text-sm">You are about to cast your vote for:</p>
              <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
                <div className="flex items-center justify-center">
                  <img src={`/${selectedCandidate.image}`} alt={selectedCandidate.name} className="w-12 h-12 rounded-full mr-3 object-cover" />
                  <div className="text-left">
                    <p className="text-base font-semibold text-gray-800">{selectedCandidate.name}</p>
                    <p className="text-xs text-gray-600">{selectedCandidate.party}</p>
                  </div>
                  {selectedCandidate.party === 'Reform Party' && (
                    <img src="/bjp.png" alt="BJP" className="w-6 h-6 object-contain ml-3" />
                  )}
                  {selectedCandidate.party === 'Progressive Party' && (
                    <img src="/congress.png" alt="Congress" className="w-6 h-6 object-contain ml-3" />
                  )}
                  {selectedCandidate.party === 'Green Future' && (
                    <img src="/congress.png" alt="Congress" className="w-6 h-6 object-contain ml-3" />
                  )}
                  {selectedCandidate.party === 'Democratic Alliance' && (
                    <img src="/bjp.png" alt="BJP" className="w-6 h-6 object-contain ml-3" />
                  )}
                  {selectedCandidate.party === 'People First' && (
                    <img src="/congress.png" alt="Congress" className="w-6 h-6 object-contain ml-3" />
                  )}
                  {selectedCandidate.party === 'National Unity' && (
                    <img src="/bjp.png" alt="BJP" className="w-6 h-6 object-contain ml-3" />
                  )}
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Voter ID:</span>
                    <span className="text-xs font-medium text-gray-800">#12345</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Transaction Hash:</span>
                    <span className="text-xs font-medium text-gray-800">0x7f8e...2d1c</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Block Number:</span>
                    <span className="text-xs font-medium text-gray-800">#18547234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Gas Fee:</span>
                    <span className="text-xs font-medium text-green-600">$0.00</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-xs text-blue-800">
                  <i className="fas fa-info-circle mr-2"></i>
                  This action cannot be undone. Your vote will be permanently recorded on the blockchain.
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={cancelVote}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmVote}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm"
                >
                  Confirm Vote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
