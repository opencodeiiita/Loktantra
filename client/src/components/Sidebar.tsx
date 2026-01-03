'use client';

import { useRouter } from 'next/navigation';

interface SidebarProps {
  currentPage: string;
}

const Sidebar = ({ currentPage }: SidebarProps) => {
  const router = useRouter();

  return (
    <div className="w-64 bg-white shadow-lg fixed left-0 top-0 h-full z-40">
      <div className="p-6">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
            <i className="fas fa-vote-yea text-white text-xl"></i>
          </div>
          <h2 className="text-xl font-bold text-gray-800">Loktantra</h2>
        </div>
        
        <nav className="space-y-2">
          <button 
            onClick={() => router.push('/dashboard')} 
            className={`flex items-center px-4 py-3 rounded-lg w-full ${
              currentPage === 'dashboard' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <i className="fas fa-home mr-3"></i>
            Dashboard
          </button>
          <button 
            onClick={() => router.push('/results')} 
            className={`flex items-center px-4 py-3 rounded-lg w-full ${
              currentPage === 'results' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <i className="fas fa-chart-bar mr-3"></i>
            Results
          </button>
          <button 
            onClick={() => router.push('/history')} 
            className={`flex items-center px-4 py-3 rounded-lg w-full ${
              currentPage === 'history' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <i className="fas fa-history mr-3"></i>
            History
          </button>
        </nav>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white">
        <div className="flex items-center">
          <img src="/rahulji.png" alt="John Doe" className="w-10 h-10 rounded-full mr-3 object-cover" />
          <div>
            <p className="text-sm font-medium text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">Voter ID: #12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
