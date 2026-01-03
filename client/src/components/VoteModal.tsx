'use client';

interface VoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  candidate: {
    id: number;
    name: string;
    party: string;
    description: string;
  };
}

const VoteModal = ({ isOpen, onClose, onConfirm, candidate }: VoteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-700 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="p-6 bg-gray-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-vote-yea text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Confirm Your Vote</h3>
            <p className="text-gray-600 mb-4 text-sm">You are about to cast your vote for:</p>
            <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
              <div className="flex items-center justify-center">
                <img src="/rahulji.png" alt="Rahul Sharma" className="w-12 h-12 rounded-full mr-3 object-cover" />
                <div className="text-left">
                  <p className="text-base font-semibold text-gray-800">Rahul Sharma</p>
                  <p className="text-xs text-gray-600">Progressive Party</p>
                </div>
                <img src="/congress.png" alt="Congress" className="w-6 h-6 object-contain ml-3" />
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
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm"
              >
                Cancel
              </button>
              <button 
                onClick={onConfirm}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm"
              >
                Confirm Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteModal;
