'use client';

interface CandidateCardProps {
  id: number;
  name: string;
  party: string;
  description: string;
  votes: number;
  hasVoted?: boolean;
  onVote?: (candidateId: number) => void;
}

const CandidateCard = ({ 
  id, 
  name, 
  party, 
  description, 
  votes, 
  hasVoted = false, 
  onVote 
}: CandidateCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-blue-600 font-medium">{party}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">{votes}</div>
          <div className="text-xs text-gray-500">votes</div>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {description}
      </p>
      
      <button
        onClick={() => onVote?.(id)}
        disabled={hasVoted}
        className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
          hasVoted
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
        }`}
      >
        {hasVoted ? 'Already Voted' : 'Vote for Candidate'}
      </button>
    </div>
  );
};

export default CandidateCard;
