import { TrendingUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  trend?: boolean;
  trendValue?: string;
}

export default function StatsCard({
  title,
  value,
  trend,
  trendValue,
}: StatsCardProps) {
  return (
    <div className="bg-[#f8f7fa] px-5 py-3 rounded-xl border border-[#dedbe6] flex-1 min-w-[200px]">
      <p className="text-xs text-neutral-600 font-semibold uppercase mb-1">
        {title}
      </p>
      <div className="flex items-end gap-2">
        <p className="text-xl font-bold text-neutral-900">{value}</p>

        {trend && (
          <span className="text-xs text-secondary font-medium mb-1 flex items-center">
            <TrendingUp className="size-3.5 mr-0.5" /> {trendValue}
          </span>
        )}
      </div>
    </div>
  );
}
