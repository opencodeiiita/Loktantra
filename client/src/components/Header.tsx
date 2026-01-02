import { LogOut } from "lucide-react";
import { JSX } from "react";

interface HeaderProps {
  title?: string;
}

export default function Header({
  title = "2024 General Election",
}: HeaderProps): JSX.Element {
  return (
    <header className="h-16 bg-white border-b border-[#f1f0f4] flex items-center justify-between px-6 shrink-0 z-10">
      <div className="w-1/4 hidden md:block"></div>

      <div className="flex flex-col md:flex-row items-center gap-3">
        <h1 className="text-[#131118] font-bold text-lg hidden sm:block">
          {title}
        </h1>
        <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#059669]"></span>
          </span>
          <span className="text-[#059669] text-xs font-bold tracking-wider">
            ACTIVE
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 w-1/4 justify-end">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f1f0f4] rounded-lg border border-[#dedbe6]">
          <div className="size-2 rounded-full bg-[#059669]"></div>
          <span className="text-xs font-bold text-[#131118] font-mono">
            0x742d...89aB
          </span>
        </div>
        <button
          className="flex items-center justify-center size-9 rounded-lg hover:bg-red-50 text-[#6e6189] hover:text-red-500 transition-colors"
          title="Disconnect Wallet"
        >
          <LogOut className="size-5" />
        </button>
      </div>
    </header>
  );
}
