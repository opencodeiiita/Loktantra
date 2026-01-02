import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

interface VoterLayoutProps {
  children: ReactNode;
}

export default function VoterLayout({
  children,
}: VoterLayoutProps): React.ReactNode {
  return (
    <div className="flex min-h-screen bg-[#f6f6f8] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen relative overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-6xl mx-auto flex flex-col gap-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
