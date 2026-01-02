import { Timer } from "lucide-react";

interface CountdownTimerProps {
  hours?: string;
  mins?: string;
  secs?: string;
}

export default function CountdownTimer({
  hours = "04",
  mins = "23",
  secs = "12",
}: CountdownTimerProps) {
  return (
    <div className="flex flex-col gap-3 bg-neutral-900 text-white p-6 rounded-2xl min-w-[300px] w-full lg:w-auto shadow-xl shadow-primary/10">
      <div className="flex items-center gap-2 mb-1">
        <Timer className="size-6 text-primary" />
        <p className="font-bold text-sm">Time Remaining</p>
      </div>
      <div className="flex gap-3 text-center">
        <div className="flex flex-col gap-1 flex-1">
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
            <span className="text-2xl font-bold font-mono">{hours}</span>
          </div>
          <span className="text-[10px] text-white/60 uppercase">Hours</span>
        </div>
        <div className="self-start py-2 text-white/40">:</div>
        <div className="flex flex-col gap-1 flex-1">
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
            <span className="text-2xl font-bold font-mono">{mins}</span>
          </div>
          <span className="text-[10px] text-white/60 uppercase">Mins</span>
        </div>
        <div className="self-start py-2 text-white/40">:</div>
        <div className="flex flex-col gap-1 flex-1">
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
            <span className="text-2xl font-bold font-mono text-primary">
              {secs}
            </span>
          </div>
          <span className="text-[10px] text-white/60 uppercase">Secs</span>
        </div>
      </div>
    </div>
  );
}
