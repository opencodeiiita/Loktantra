'use client';

import { useRouter } from 'next/navigation';

const AdminNavbar = () => {
  const router = useRouter();

  const handleSignOut = () => {
    router.push('/');
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <i className="fas fa-vote-yea text-white text-base"></i>
            </div>
            <div className="font-semibold text-xl text-gray-800">Loktantra</div>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-600">
            <span className="text-purple-600 font-medium px-3 py-2 bg-purple-50 rounded-lg">Elections</span>
            <span className="hover:text-gray-900 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Candidates</span>
            <span className="hover:text-gray-900 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Voters</span>
            <span className="hover:text-gray-900 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Analytics</span>
            <span className="hover:text-gray-900 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">Settings</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 mr-6">
              <i className="fas fa-bell text-black text-lg cursor-pointer transition-colors"></i>
            </div>
            <div className="relative">
              <img 
                src="/rahulji.png" 
                alt="Admin" 
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 hover:border-purple-300 transition-colors cursor-pointer" 
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <i className="fas fa-sign-out-alt"></i>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
