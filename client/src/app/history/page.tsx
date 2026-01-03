'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

interface TransactionDetail {
  fullHash: string;
  blockNumber: string;
  gasUsed: string;
  contractAddress: string;
}

export default function History() {
  const router = useRouter();
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionDetail | null>(null);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const handleDateClick = (rowId: number, transaction: TransactionDetail) => {
    if (expandedRow === rowId) {
      setExpandedRow(null);
      setSelectedTransaction(null);
    } else {
      setExpandedRow(rowId);
      setSelectedTransaction(transaction);
    }
  };

  const transactionDetails: Record<number, TransactionDetail> = {
    1: {
      fullHash: '0x7f8e9a2b3c4d5e6f7890abcd1234567890abcdef1234567890abcdef2d1c',
      blockNumber: '#18547234',
      gasUsed: '21,000',
      contractAddress: '0x1234...5678'
    },
    2: {
      fullHash: '0x9a2b3c4d5e6f7890abcd1234567890abcdef1234567890abcdef3f4d',
      blockNumber: '#18547235',
      gasUsed: '21,000',
      contractAddress: '0x1234...5678'
    },
    3: {
      fullHash: '0x3c4d5e6f7890abcd1234567890abcdef1234567890abcdef5e6f',
      blockNumber: '#18547236',
      gasUsed: '21,000',
      contractAddress: '0x1234...5678'
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex">
      {/* Sidebar */}
      <Sidebar currentPage="history" />

      {/* Main Content */}
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
          <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Date & Time</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Election Name</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Candidate</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">TX-HASH</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <button 
                        onClick={() => handleDateClick(1, transactionDetails[1])}
                        className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer hover:underline flex items-center"
                      >
                        2025-01-02 14:30:25
                        <i className={`fas fa-chevron-${expandedRow === 1 ? 'up' : 'down'} ml-2 text-xs`}></i>
                      </button>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-800">2025 General Election</td>
                    <td className="py-3 px-4 text-sm text-gray-800">Vikram Singh</td>
                    <td className="py-3 px-4">
                      <span className="text-sm font-mono text-blue-600">0x7f8e...2d1c</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Confirmed</span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        <i className="fas fa-share"></i>
                      </button>
                    </td>
                  </tr>
                  
                  {/* Expanded Row */}
                  {expandedRow === 1 && (
                    <tr>
                      <td colSpan={6} className="bg-gray-50 p-4">
                        <div className="bg-white rounded-lg border-l-4 border-l-blue-500 border border-gray-200 p-4">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <span className="text-xs text-gray-600">Full Transaction Hash:</span>
                              <div className="text-sm font-mono text-gray-800 break-all">
                                {selectedTransaction?.fullHash}
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-gray-600">Block Number:</span>
                              <div className="text-sm font-medium text-gray-800">
                                {selectedTransaction?.blockNumber}
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-gray-600">Gas Used:</span>
                              <div className="text-sm font-medium text-gray-800">
                                {selectedTransaction?.gasUsed}
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-gray-600">Contract Address:</span>
                              <div className="text-sm font-mono text-gray-800">
                                {selectedTransaction?.contractAddress}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <button className="text-blue-600 hover:text-blue-800 text-sm underline">
                              Verify Cryptographic Proof
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                  
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <button 
                        onClick={() => handleDateClick(2, transactionDetails[2])}
                        className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer hover:underline flex items-center"
                      >
                        2025-01-01 10:15:42
                        <i className={`fas fa-chevron-${expandedRow === 2 ? 'up' : 'down'} ml-2 text-xs`}></i>
                      </button>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-800">2025 General Election</td>
                    <td className="py-3 px-4 text-sm text-gray-800">Rahul Sharma</td>
                    <td className="py-3 px-4">
                      <span className="text-sm font-mono text-blue-600">0x9a2b...3f4d</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Confirmed</span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        <i className="fas fa-share"></i>
                      </button>
                    </td>
                  </tr>
                  
                  {/* Expanded Row */}
                  {expandedRow === 2 && (
                    <tr>
                      <td colSpan={6} className="bg-gray-50 p-4">
                        <div className="bg-white rounded-lg border-l-4 border-l-blue-500 border border-gray-200 p-4">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <span className="text-xs text-gray-600">Full Transaction Hash:</span>
                              <div className="text-sm font-mono text-gray-800 break-all">
                                {selectedTransaction?.fullHash}
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-gray-600">Block Number:</span>
                              <div className="text-sm font-medium text-gray-800">
                                {selectedTransaction?.blockNumber}
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-gray-600">Gas Used:</span>
                              <div className="text-sm font-medium text-gray-800">
                                {selectedTransaction?.gasUsed}
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-gray-600">Contract Address:</span>
                              <div className="text-sm font-mono text-gray-800">
                                {selectedTransaction?.contractAddress}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <button className="text-blue-600 hover:text-blue-800 text-sm underline">
                              Verify Cryptographic Proof
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                  
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <button 
                        onClick={() => handleDateClick(3, transactionDetails[3])}
                        className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer hover:underline flex items-center"
                      >
                        2024-12-31 16:45:18
                        <i className={`fas fa-chevron-${expandedRow === 3 ? 'up' : 'down'} ml-2 text-xs`}></i>
                      </button>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-800">2024 Local Election</td>
                    <td className="py-3 px-4 text-sm text-gray-800">Priya Patel</td>
                    <td className="py-3 px-4">
                      <span className="text-sm font-mono text-blue-600">0x3c4d...5e6f</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pending</span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        <i className="fas fa-share"></i>
                      </button>
                    </td>
                  </tr>
                  
                  {/* Expanded Row */}
                  {expandedRow === 3 && (
                    <tr>
                      <td colSpan={6} className="bg-gray-50 p-4">
                        <div className="bg-white rounded-lg border-l-4 border-l-blue-500 border border-gray-200 p-4">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <span className="text-xs text-gray-600">Full Transaction Hash:</span>
                              <div className="text-sm font-mono text-gray-800 break-all">
                                {selectedTransaction?.fullHash}
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-gray-600">Block Number:</span>
                              <div className="text-sm font-medium text-gray-800">
                                {selectedTransaction?.blockNumber}
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-gray-600">Gas Used:</span>
                              <div className="text-sm font-medium text-gray-800">
                                {selectedTransaction?.gasUsed}
                              </div>
                            </div>
                            <div>
                              <span className="text-xs text-gray-600">Contract Address:</span>
                              <div className="text-sm font-mono text-gray-800">
                                {selectedTransaction?.contractAddress}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <button className="text-blue-600 hover:text-blue-800 text-sm underline">
                              Verify Cryptographic Proof
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
