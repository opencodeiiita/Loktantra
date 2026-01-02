"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Vote,
  BarChart3,
  History,
  HelpCircle,
} from "lucide-react";

export default function Sidebar(): React.ReactNode {
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  return (
    <aside className="w-64 bg-white border-r border-[#f1f0f4] flex flex-col shrink-0 z-20 h-screen">
      <div className="h-16 flex items-center px-6 border-b border-[#f1f0f4]">
        <div className="flex items-center gap-3 text-[#131118]">
          <div className="size-8 text-primary">
            <svg
              className="w-full h-full"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_330)">
                <path
                  clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_330">
                  <rect fill="white" height="48" width="48"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-xl font-black tracking-tight">Loktantra</h2>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
            isActive("/dashboard")
              ? "bg-primary/10 text-primary"
              : "text-[#6e6189] hover:bg-[#f1f0f4] hover:text-[#131118]"
          }`}
        >
          <LayoutDashboard className="size-6" />
          <span
            className={`text-sm ${isActive("/dashboard") ? "font-bold" : "font-medium"}`}
          >
            Dashboard
          </span>
        </Link>

        <Link
          href="/history"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${
            isActive("/history")
              ? "bg-primary/10 text-primary"
              : "text-[#6e6189] hover:bg-[#f1f0f4] hover:text-[#131118]"
          }`}
        >
          <Vote
            className={`size-6 transition-transform ${!isActive("/history") && "group-hover:scale-110"}`}
          />
          <span
            className={`text-sm ${isActive("/history") ? "font-bold" : "font-medium"}`}
          >
            My Votes
          </span>
        </Link>

        <Link
          href="/results"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${
            isActive("/results")
              ? "bg-primary/10 text-primary"
              : "text-[#6e6189] hover:bg-[#f1f0f4] hover:text-[#131118]"
          }`}
        >
          <BarChart3
            className={`size-6 transition-transform ${!isActive("/results") && "group-hover:scale-110"}`}
          />
          <span
            className={`text-sm ${isActive("/results") ? "font-bold" : "font-medium"}`}
          >
            Results
          </span>
        </Link>

        <Link
          href="/history"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${
            pathname.includes("/logs")
              ? "bg-primary/10 text-primary"
              : "text-[#6e6189] hover:bg-[#f1f0f4] hover:text-[#131118]"
          }`}
        >
          <History
            className={`size-6 transition-transform ${!pathname.includes("/logs") && "group-hover:scale-110"}`}
          />
          <span className="font-medium text-sm">History</span>
        </Link>

        <div className="mt-auto pt-4 border-t border-[#f1f0f4]">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#6e6189] hover:bg-[#f1f0f4] hover:text-[#131118] transition-colors cursor-pointer">
            <HelpCircle className="size-6" />
            <span className="font-medium text-sm">Help &amp; Support</span>
          </a>
        </div>
      </nav>
    </aside>
  );
}
