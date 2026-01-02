"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Vote,
  ShieldCheck,
  CheckCircle,
  Mail,
  Lock,
  ArrowLeft,
  UserCog,
} from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement admin login logic
    console.log("Admin login:", { email, password });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-display text-neutral-900 bg-neutral-100">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Blockchain Background"
          className="h-full w-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRYey3OBVTfXezJnrjENfKq6hoyYfs7y_ZO27-5CCs1Ls_HKSMC-65euj8hJBMFeiY05BupP1lX1sYqSByo9M9avBaQNhX64Uw2lggTTx5hv9J1_PEraYUe7xTA7Q5W2PUWDFynltr3lvAZKP48FtSuCPZkSaeZv7qjrc2ab6Onh6vRRRrhHYKvi9NZCRWvc8V0opT1WFb9TPIxcYTbY-acHf_ZNG8I7pk2G1mJlxJ4OxJplwfQGu3jBiSVNvqow_iRkzAKZoGpg"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-[#4F46E5]/80 to-accent/90 mix-blend-multiply"></div>
      </div>

      <header className="relative z-20 flex w-full items-center justify-between px-6 py-2 md:px-8 md:py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
        <div className="glass-panel flex items-center gap-2 rounded-full px-3 py-1.5 shadow-sm">
          <UserCog className="size-3.5 text-primary" />
          <span className="text-[10px] font-semibold tracking-wide text-neutral-900">
            Admin Portal
          </span>
        </div>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center p-2">
        <div className="glass-panel w-full max-w-[360px] flex flex-col rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
          <div className="p-5 flex flex-col items-center text-center">
            <div className="mb-3 flex flex-col items-center gap-1.5">
              <div className="relative flex items-center justify-center h-12 w-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-md mb-1 ring-1 ring-white/50">
                <Vote className="size-6 text-primary" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1 shadow-sm">
                  <div className="h-1 w-1 rounded-full bg-saffron"></div>
                  <div className="h-1 w-1 rounded-full bg-white border border-gray-200"></div>
                  <div className="h-1 w-1 rounded-full bg-india-green"></div>
                </div>
              </div>
              <h2 className="text-lg font-bold tracking-tight text-neutral-900">
                Loktantra Admin
              </h2>
            </div>

            <h1 className="mb-1 text-xl font-bold leading-tight text-neutral-900">
              Administrator Login
            </h1>
            <p className="mb-5 text-xs font-normal text-neutral-600">
              Access the election management dashboard
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-3">
              <div className="text-left">
                <label className="text-xs font-semibold text-neutral-700 mb-1 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@loktantra.gov"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
                    required
                  />
                </div>
              </div>

              <div className="text-left">
                <label className="text-xs font-semibold text-neutral-700 mb-1 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold text-sm rounded-lg transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Sign In to Dashboard
              </button>
            </form>
          </div>

          <div className="w-full border-t border-neutral-200 bg-neutral-50/60 p-2.5 py-3">
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1.5 text-neutral-600">
                <ShieldCheck className="size-2.5" />
                <span className="text-[9px] font-semibold uppercase tracking-wider">
                  Secured Admin Access
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[9px] text-neutral-500 font-mono">
                <div className="flex items-center gap-1">
                  <CheckCircle className="size-2.5 text-secondary" />
                  256-bit Encryption
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="size-2.5 text-secondary" />
                  Role-Based Access
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="size-2.5 text-secondary" />
                  Audit Logging
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-[9px] text-white/60 font-medium">
          © 2024 Loktantra Foundation. All rights reserved.
        </p>
      </div>
    </div>
  );
}
