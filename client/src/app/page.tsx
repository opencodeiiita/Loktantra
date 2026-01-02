import Image from "next/image";
import { Vote, ShieldCheck, CheckCircle } from "lucide-react";

export default function Home() {
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

      <header className="relative z-20 flex w-full items-center justify-end px-6 py-2 md:px-8 md:py-3">
        <div className="glass-panel flex items-center gap-2 rounded-full px-3 py-1.5 shadow-sm transition-transform hover:scale-105 cursor-default">
          <div className="h-2 w-2 rounded-full bg-alert animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.6)]"></div>
          <span className="text-[10px] font-semibold tracking-wide text-neutral-900">
            Not Connected
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
                Loktantra
              </h2>
            </div>

            <h1 className="mb-1 text-xl font-bold leading-tight text-neutral-900">
              Secure. Transparent. Democratic.
            </h1>
            <p className="mb-5 text-xs font-normal text-neutral-600">
              Cast your vote on the blockchain
            </p>

            <button className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-primary px-5 py-3 text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0">
              <svg
                className="h-4.5 w-4.5 transition-transform group-hover:scale-110"
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.66 4.38L23.77 14.15L29.08 11.5L26.66 4.38Z"
                  fill="#E17726"
                ></path>
                <path
                  d="M5.33996 4.38L2.91996 11.5L8.22996 14.15L5.33996 4.38Z"
                  fill="#E27625"
                ></path>
                <path
                  d="M22.95 15.36L20.25 19.34L26.33 27.52L29.56 12.92L22.95 15.36Z"
                  fill="#E27625"
                ></path>
                <path
                  d="M5.67001 12.92L8.89001 27.52L14.98 19.34L12.28 15.36L5.67001 12.92Z"
                  fill="#E27625"
                ></path>
                <path
                  d="M10.87 11.75L12.97 18.72L15.99 23.09L19.03 18.73L21.12 11.75L16 6.01L10.87 11.75Z"
                  fill="#E27625"
                ></path>
              </svg>
              <span className="text-xs font-bold tracking-wide">
                Connect MetaMask Wallet
              </span>
            </button>

            <div className="my-3 flex w-full items-center gap-3">
              <div className="h-px flex-1 bg-neutral-200"></div>
              <span className="text-[9px] font-medium uppercase text-neutral-500">
                or continue with
              </span>
              <div className="h-px flex-1 bg-neutral-200"></div>
            </div>

            <div className="grid w-full grid-cols-2 gap-2.5">
              <button className="flex items-center justify-center gap-1.5 rounded-md border border-neutral-200 bg-white/80 px-3 py-2 text-[11px] font-semibold text-neutral-900 transition-colors hover:bg-white hover:border-neutral-300 shadow-sm cursor-not-allowed opacity-75">
                <Image
                  alt="Google"
                  className="h-3.5 w-3.5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmHpiLaHf12mrH0c4cn1z7H78bG8gt99fgZEkSBHHMRXgd1eXQZ6QAxVmAEnD9YdZ1T70NlbSxCJaD7t7TeMmU4Hrar83xPwdEGzqCAiQnkO5PRxoa23Wl7DpaYYdlTWpY5hlkU-J3IMElKQp4Og_6pXJ9Eon9qaTqMoF55l7XUf7qs2APM1bppSg74CnRy8AntSZeCuAW_e71BIjjbepu-7wm0Rkwr2cXdqFbTF4F7W2cNiMLdYlLtzHPXStlrtqNmv9DadFcEQ"
                  width={14}
                  height={14}
                />
                Google
              </button>
              <button className="flex items-center justify-center gap-1.5 rounded-md border border-neutral-200 bg-white/80 px-3 py-2 text-[11px] font-semibold text-neutral-900 transition-colors hover:bg-white hover:border-neutral-300 shadow-sm cursor-not-allowed opacity-75">
                <svg
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-7.38-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.527.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.653.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
                GitHub
              </button>
            </div>
          </div>

          <div className="w-full border-t border-neutral-200 bg-neutral-50/60 p-2.5 py-3">
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1.5 text-neutral-600">
                <ShieldCheck className="size-2.5" />
                <span className="text-[9px] font-semibold uppercase tracking-wider">
                  Powered by Ethereum Blockchain
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[9px] text-neutral-500 font-mono">
                <div className="flex items-center gap-1">
                  <CheckCircle className="size-2.5 text-secondary" />
                  256-bit Encryption
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="size-2.5 text-secondary" />
                  Tamper-Proof
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="size-2.5 text-secondary" />
                  Fully Auditable
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
