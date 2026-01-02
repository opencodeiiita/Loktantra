'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Wallet, Vote } from 'lucide-react'

interface NavbarProps {
  showConnectButton?: boolean
  walletAddress?: string
}

export default function Navbar({ 
  showConnectButton = true,
  walletAddress 
}: NavbarProps = {}) {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Elections' },
    { href: '/results', label: 'Results' },
    { href: '/history', label: 'History' },
    { href: '/admin', label: 'Admin' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
              <Vote className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Loktantra</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Wallet Address (if connected) */}
            {walletAddress && (
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm font-mono text-gray-700">
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </span>
              </div>
            )}

            {/* Connect Wallet Button */}
            {showConnectButton && !walletAddress && (
              <button className="px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/30">
                <Wallet className="w-5 h-5" />
                <span className="hidden sm:inline">Connect Wallet</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
