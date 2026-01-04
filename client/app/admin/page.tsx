'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import StatusBadge from '@/components/StatusBadge'
import { Plus, Settings, Users, Calendar, TrendingUp } from 'lucide-react'

export default function AdminPage() {
  const [elections, setElections] = useState([
    {
      id: 1,
      title: 'National Council Representative 2024',
      startDate: '2024-01-01',
      endDate: '2024-01-10',
      status: 'active',
      candidates: 3,
      totalVotes: 2680,
    },
    {
      id: 2,
      title: 'State Assembly Election 2023',
      startDate: '2023-11-10',
      endDate: '2023-11-20',
      status: 'ended',
      candidates: 5,
      totalVotes: 4520,
    },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600 text-lg">Manage elections and monitor voting activity</p>
          </div>
          <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Create New Election
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Total Elections</div>
                <div className="text-3xl font-bold text-gray-900">{elections.length}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Active Elections</div>
                <div className="text-3xl font-bold text-gray-900">
                  {elections.filter((e) => e.status === 'active').length}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Total Votes</div>
                <div className="text-3xl font-bold text-gray-900">
                  {elections.reduce((sum, e) => sum + e.totalVotes, 0).toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Total Candidates</div>
                <div className="text-3xl font-bold text-gray-900">
                  {elections.reduce((sum, e) => sum + e.candidates, 0)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elections Table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">All Elections</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Election Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Start Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    End Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Candidates
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Total Votes
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {elections.map((election) => (
                  <tr key={election.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">{election.title}</div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={election.status as any} />
                    </td>
                    <td className="px-6 py-4 text-gray-600">{election.startDate}</td>
                    <td className="px-6 py-4 text-gray-600">{election.endDate}</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">{election.candidates}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">
                        {election.totalVotes.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 bg-indigo-100 text-indigo-700 font-medium rounded-lg hover:bg-indigo-200 transition-colors">
                          Edit
                        </button>
                        <button className="px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
