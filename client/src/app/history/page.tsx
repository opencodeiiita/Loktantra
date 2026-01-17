'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import React from 'react';

interface TransactionDetail {
  id: number;
  date: string;
  election: string;
  candidate: string;
  status: 'Confirmed' | 'Pending';
  fullHash: string;
  blockNumber: string;
  gasUsed: string;
}

const ETHERSCAN_BASE = process.env.NEXT_PUBLIC_ETHERSCAN_BASE;
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

export default function History() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const transactionDetails: TransactionDetail[] = [
    {
      id: 1,
      date: '2025-01-02 14:30:25',
      election: '2025 General Election',
      candidate: 'Vikram Singh',
      status: 'Confirmed',
      fullHash:
        '0x7f8e9a2b3c4d5e6f7890abcd1234567890abcdef1234567890abcdef2d1c',
      blockNumber: '#18547234',
      gasUsed: '21,000',
    },
    {
      id: 2,
      date: '2025-01-01 10:15:42',
      election: '2025 General Election',
      candidate: 'Rahul Sharma',
      status: 'Confirmed',
      fullHash:
        '0x9a2b3c4d5e6f7890abcd1234567890abcdef1234567890abcdef3f4d',
      blockNumber: '#18547235',
      gasUsed: '21,000',
    },
    {
      id: 3,
      date: '2024-12-31 16:45:18',
      election: '2024 Local Election',
      candidate: 'Priya Patel',
      status: 'Pending',
      fullHash:
        '0x3c4d5e6f7890abcd1234567890abcdef1234567890abcdef5e6f',
      blockNumber: '#18547236',
      gasUsed: '21,000',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex">
      <Sidebar currentPage="history" />

      <div className="flex-1 ml-64">
        {/* Voting History Content */}
        <div className="p-8">
          <div className="bg-white rounded-lg shadow-sm border py-2 px-6">
            <div className="flex items-center justify-between mb-6 pt-3">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Voting History</h2>
                <p className="text-sm text-gray-600">View and audit your past voting activity on the blockchain</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                  <i className="fas fa-download mr-2"></i>
                  Download History
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                  <i className="fas fa-check-circle mr-2"></i>
                  Verify Votes
                </button>
              </div>
            </div>
            
            {/* Filter Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Date Range</label>
                <div className="relative ">
                  <input
                    type="text"
                    placeholder="Select date range"
                    className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <i className="fas fa-calendar absolute right-3 top-3 text-black"></i>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Election Event</label>
                <select className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select election event</option>
                  <option>2025 General Election</option>
                  <option>2024 Local Election</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Status</label>
                <select className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                </select>
              </div>  
            </div> 
          </div>
          
          {/* Table Section */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">
                    Date & Time
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">
                    Election
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">
                    Candidate
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">
                    TX Hash
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {transactionDetails.map((tx) => (
                  <React.Fragment key={tx.id}>
                    <tr
                      key={tx.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="py-3 px-4">
                        <button
                          onClick={() =>
                            setExpandedRow(
                              expandedRow === tx.id ? null : tx.id
                            )
                          }
                          className="text-sm text-blue-600 hover:underline flex items-center"
                        >
                          {tx.date}
                          <i
                            className={`fas fa-chevron-${
                              expandedRow === tx.id ? 'up' : 'down'
                            } ml-2 text-xs`}
                          />
                        </button>
                      </td>

                      <td className="py-3 px-4 text-sm text-gray-800">
                        {tx.election}
                      </td>

                      <td className="py-3 px-4 text-sm text-gray-800">
                        {tx.candidate}
                      </td>

                      <td className="py-3 px-4">
                        <a
                          href={`${ETHERSCAN_BASE}/tx/${tx.fullHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-mono text-blue-600 hover:underline"
                        >
                          {tx.fullHash.slice(0, 6)}...
                          {tx.fullHash.slice(-4)}
                        </a>
                      </td>

                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            tx.status === 'Confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {tx.status}
                        </span>
                      </td>

                      <td className="py-3 px-4">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          <i className="fas fa-share" />
                        </button>
                      </td>
                    </tr>

                    {expandedRow === tx.id && (
                      <tr>
                        <td colSpan={6} className="bg-gray-50 p-4">
                          <div className="bg-white rounded-lg border-l-4 border-l-blue-500 border p-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <span className="text-xs text-gray-600">
                                  Full Transaction Hash
                                </span>
                                <a
                                  href={`${ETHERSCAN_BASE}/tx/${tx.fullHash}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-sm font-mono text-blue-600 break-all hover:underline"
                                >
                                  {tx.fullHash}
                                </a>
                              </div>

                              <div>
                                <span className="text-xs text-gray-600">
                                  Block Number
                                </span>
                                <div className="text-sm text-gray-800">
                                  {tx.blockNumber}
                                </div>
                              </div>

                              <div>
                                <span className="text-xs text-gray-600">
                                  Gas Used
                                </span>
                                <div className="text-sm text-gray-800">
                                  {tx.gasUsed}
                                </div>
                              </div>

                              <div>
                                <span className="text-xs text-gray-600">
                                  Contract Address
                                </span>
                                <a
                                  href={`${ETHERSCAN_BASE}/address/${CONTRACT_ADDRESS}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-sm font-mono text-blue-600 hover:underline"
                                >
                                  {CONTRACT_ADDRESS?.slice(0, 6)}...
                                  {CONTRACT_ADDRESS?.slice(-4)}
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}