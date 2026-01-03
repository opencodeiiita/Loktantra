import Link from 'next/link'
import { CheckCircle2, Shield, Users, Vote } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Vote className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Loktantra</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium">
                How It Works
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 font-medium">
                About
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Powered by Ethereum Blockchain
            </div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Democracy Powered by{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Blockchain
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Secure, transparent, and tamper-proof voting system built on Ethereum.
              Every vote counts, every vote is verified, every vote is immutable.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-xl shadow-indigo-500/50 flex items-center gap-2"
              >
                <Vote className="w-5 h-5" />
                Cast Your Vote
              </Link>
              <Link
                href="/results"
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-200"
              >
                View Live Results
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">2,450</div>
                <div className="text-sm text-gray-600">Total Votes Cast</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600">Transparency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">0</div>
                <div className="text-sm text-gray-600">Fraud Cases</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Loktantra?
            </h2>
            <p className="text-xl text-gray-600">
              Built with cutting-edge blockchain technology for maximum security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Secure & Immutable
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every vote is encrypted and stored on the Ethereum blockchain, making it impossible to tamper with or delete.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                100% Transparent
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All transactions are publicly verifiable on the blockchain. Anyone can audit the voting process in real-time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Anonymous Voting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your identity is protected through cryptographic hashing while maintaining vote integrity and verifiability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 3-step process to cast your vote
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Connect Wallet
              </h3>
              <p className="text-gray-600">
                Connect your MetaMask or any Web3 wallet to authenticate your identity securely.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Choose Candidate
              </h3>
              <p className="text-gray-600">
                Browse candidates, read their manifestos, and select your preferred choice.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cast Vote
              </h3>
              <p className="text-gray-600">
                Confirm your selection and your vote is permanently recorded on the blockchain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Vote className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Loktantra</span>
            </div>
            <div className="text-gray-400">
              © 2026 Loktantra. Built with ❤️ on Ethereum.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
