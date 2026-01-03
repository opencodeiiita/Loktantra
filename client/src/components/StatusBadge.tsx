'use client';

interface StatusBadgeProps {
  status: 'live' | 'ended' | 'upcoming';
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'live':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'ended':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'live':
        return '🟢 Live';
      case 'ended':
        return '🔴 Ended';
      case 'upcoming':
        return '🟡 Upcoming';
      default:
        return 'Unknown';
    }
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusStyles()}`}>
      {getStatusText()}
    </span>
  );
};

export default StatusBadge;
