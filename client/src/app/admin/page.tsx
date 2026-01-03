'use client';

import { useState } from 'react';
import AdminNavbar from '@/components/AdminNavbar';

export default function Admin() {
  const [elections] = useState([
    {
      id: 1,
      name: 'Student Council 2024',
      status: 'Active',
      startDate: 'Oct 20, 2024',
      endDate: 'Oct 21, 2024',
      totalVotes: 1245
    },
    {
      id: 2,
      name: 'Local Council',
      status: 'Draft',
      startDate: 'Nov 01, 2024',
      endDate: 'Nov 02, 2024',
      totalVotes: 0
    },
    {
      id: 3,
      name: 'Community Board',
      status: 'Ended',
      startDate: 'Sep 15, 2024',
      endDate: 'Sep 16, 2024',
      totalVotes: 850
    }
  ]);

  const [candidates] = useState([
    { id: 1, name: 'Priya Sharma', party: 'Unity Party', image: '/rahulji.png' },
    { id: 2, name: 'Vivek Kumar', party: 'Progress Alliance', image: '/modiji.png' },
    { id: 3, name: 'Aditi Rao', party: 'Independent', image: '/rahulji.png' },
    { id: 4, name: 'Rahul Verma', party: 'Future Vision', image: '/modiji.png' }
  ]);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      Active: 'bg-green-100 text-green-700',
      Draft: 'bg-gray-200 text-gray-600',
      Ended: 'bg-red-100 text-red-600'
    };
    
    return (
      <span className={`px-2 py-1 text-xs rounded ${statusConfig[status as keyof typeof statusConfig]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Top Navbar */}
      <AdminNavbar />

      {/* Page Content */}
      <main className="max-w-[1400px] mx-auto p-6 flex gap-6">
        {/* Left Main Section */}
        <section className="flex-1 space-y-6">
          {/* Manage Elections */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">Manage Elections</h2>
              <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                <i className="fas fa-plus mr-2"></i>
                Create Election
              </button>
            </div>

            <table className="w-full text-sm text-left">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="py-2">Election Name</th>
                  <th>Status</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Total Votes</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {elections.map((election) => (
                  <tr key={election.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{election.name}</td>
                    <td>{getStatusBadge(election.status)}</td>
                    <td>{election.startDate}</td>
                    <td>{election.endDate}</td>
                    <td className="font-semibold">{election.totalVotes.toLocaleString()}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <button className="text-gray-400 hover:text-gray-600">
                          <i className="fas fa-ellipsis-v"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Manage Candidates */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">Manage Candidates</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={candidate.image} 
                      alt={candidate.name} 
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{candidate.name}</p>
                      <p className="text-sm text-gray-500">{candidate.party}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <button className="text-green-700 text-[1.5rem] ml-2">
                      <i className="fas fa-toggle-on"></i>
                    </button>
                    <button className="text-blue-600 text-xl ml-2">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-500 text-xl ml-2">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="w-[300px] space-y-6">
          {/* Real-time Stats */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <h3 className="font-semibold text-gray-800 text-sm">Real-Time Stats</h3>
            </div>
            <div className="space-y-4">
              {/* Active Voters */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👤</span>
                  <div>
                    <div className="text-lg font-semibold text-gray-800">452</div>
                    <div className="text-xs text-gray-500">Active Voters</div>
                  </div>
                </div>
              </div>

              {/* Votes Cast */}
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🗳️</span>
                  <div>
                    <div className="text-lg font-semibold text-blue-600">1,245</div>
                    <div className="text-xs text-gray-500">Votes Cast</div>
                  </div>
                </div>
              </div>

              {/* System Status */}
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="text-sm font-medium text-green-600">Operational</div>
                    <div className="text-xs text-gray-500">System Status</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <h3 className="font-semibold text-gray-800 mb-3">
              <i className="fas fa-bolt mr-2 text-purple-600"></i>
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button className="w-full bg-green-100 text-green-700 py-2 rounded hover:bg-green-200 transition-colors">
                <i className="fas fa-play mr-2"></i>
                Start Election
              </button>
              <button className="w-full bg-red-100 text-red-700 py-2 rounded hover:bg-red-200 transition-colors">
                <i className="fas fa-stop mr-2"></i>
                End Election
              </button>
              <button className="w-full bg-purple-100 text-purple-700 py-2 rounded hover:bg-purple-200 transition-colors">
                <i className="fas fa-chart-bar mr-2"></i>
                Publish Results
              </button>
            </div>
          </div>

          {/* Admin Guide */}
          <div className="bg-purple-50 rounded-lg p-5 text-sm text-purple-700">
            <div className="flex items-start gap-2 mb-2">
              <i className="fas fa-info-circle mt-0.5"></i>
              <p className="font-medium">Admin Guide</p>
            </div>
            <p className="text-purple-600">
              Need help managing elections? Check documentation for best practices.
            </p>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-4 border-t bg-white">
        <i className="fas fa-shield-alt mr-1"></i>
        Active actions are logged on blockchain for transparency
      </footer>
    </div>
  );
}
