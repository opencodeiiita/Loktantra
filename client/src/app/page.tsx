'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isConnecting, setIsConnecting] = useState(false);
  const router = useRouter();

  const handleMetaMaskConnect = async () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      router.push('/dashboard');
    }, 2000);
  };

  const handleAdminLogin = () => {
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-200 rounded-2xl shadow-2xl p-8 border border-gray-400">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
                <img src="/logo.png" alt="Loktantra Logo" className="w-16 h-16" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Loktantra</h1>
            <p className="text-xl text-gray-600 mb-1">Secure. Transparent. Democratic.</p>
            <p className="text-gray-500">Cast your vote on the blockchain.</p>
          </div>

          <button
            onClick={handleMetaMaskConnect}
            disabled={isConnecting}
            className="w-full bg-blue-600 text-white py-4  rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center mb-4"
          >
            {isConnecting ? (
              <>
                <i className="fas fa-spinner fa-spin mr-3"></i>
                Connecting...
              </>
            ) : (
              <>
                <i className="fas fa-wallet mr-2"></i>
                Connect MetaMask Wallet
              </>
            )}
          </button>

          <button
            onClick={handleAdminLogin}
            className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center justify-center mb-6 cursor-pointer"
          >
            <i className="fas fa-user-shield mr-2"></i>
            Admin Login
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-200 text-gray-700">OR CONTINUE WITH</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              className="bg-white text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
</svg>
              Google
            </button>
            <button
              className="bg-white text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <i className="fab fa-github mr-2"></i>
              Github
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">POWERED BY ETHEREUM BLOCKCHAIN</p>
            <div className="flex justify-center space-x-8 text-xs text-gray-400">
              <div className="flex items-center">
                <i className="fas fa-lock mr-1"></i>
                256-bit Encryption
              </div>
              <div className="flex items-center">
                <i className="fas fa-shield-alt mr-1"></i>
                Tamper-Proof
              </div>
              <div className="flex items-center">
                <i className="fas fa-clipboard-check mr-1"></i>
                Fully Auditable
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
