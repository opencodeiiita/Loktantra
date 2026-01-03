'use client';

interface RankerCardProps {
  rank: number;
  name: string;
  party: string;
  votes: number;
  percentage: number;
  image?: string;
}

const RankerCard = ({ 
  rank, 
  name, 
  party, 
  votes, 
  percentage,
  image = "/rahulji.png"
}: RankerCardProps) => {
  const getRankColor = (rank: number) => {
    switch(rank) {
      case 1: return 'text-yellow-500';
      case 2: return 'text-gray-400';
      case 3: return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const getProgressColor = (rank: number) => {
    switch(rank) {
      case 1: return 'bg-yellow-500';
      case 2: return 'bg-gray-400';
      case 3: return 'bg-orange-600';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="bg-blue-50 rounded-lg shadow-md border border-blue-200 p-4 hover:shadow-lg transition-shadow relative">
      {/* Rank Badge - Top Left Corner */}
      <div className="absolute top-2 left-2">
        <div className={`text-xl font-bold ${getRankColor(rank)}`}>
          #{rank}
        </div>
      </div>
      
      {/* Leading Badge - Top Right Corner (only for rank 1) */}
      {rank === 1 && (
        <div className="absolute top-2 right-2">
          <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            LEADING
          </div>
        </div>
      )}
      
      {/* Profile - Center */}
      <div className="flex flex-col items-center mb-4 mt-2">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full mb-3 object-cover" 
        />
        <h3 className="text-base font-semibold text-gray-900 text-center">{name}</h3>
        <p className="text-sm text-blue-600 font-medium text-center">{party}</p>
      </div>
      
      {/* Vote Count - Below Profile */}
      <div className="text-center mb-4">
        <div className="text-xl font-bold text-gray-900">{votes.toLocaleString()}</div>
        <div className="text-xs text-gray-500">votes</div>
      </div>
      
      {/* Progress Bar - Bottom */}
      <div>
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Vote Share</span>
          <span className="font-medium">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${getProgressColor(rank)}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RankerCard;
