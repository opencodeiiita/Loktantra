"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface CandidateCardProps {
  name: string;
  party: string;
  description: string;
  image: string;
  logoColor: string;
  symbolIcon: string;
  onVote: () => void;
  hasVoted?: boolean;
}

// Map Material icon names to Lucide icons
const iconMap: Record<string, keyof typeof LucideIcons> = {
  star: "Star",
  circle: "Circle",
  square: "Square",
  heart: "Heart",
  flag: "Flag",
  flower: "Flower2",
  sun: "Sun",
  moon: "Moon",
  leaf: "Leaf",
  tree: "TreePine",
  hand: "Hand",
  umbrella: "Umbrella",
  lotus: "Flower2",
};

export default function CandidateCard({
  name,
  party,
  description,
  image,
  logoColor,
  symbolIcon,
  onVote,
  hasVoted = false,
}: CandidateCardProps) {
  // Get the Lucide icon component based on symbolIcon name
  const IconComponent = LucideIcons[
    iconMap[symbolIcon.toLowerCase()] || "Star"
  ] as React.ComponentType<{ className?: string }>;

  if (hasVoted) {
    return (
      <div className="group bg-white rounded-2xl p-6 border border-secondary/30 shadow-md shadow-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
        <div className="absolute top-6 right-6">
          <div
            className={`size-10 rounded-full flex items-center justify-center text-white shadow-sm`}
            style={{ backgroundColor: logoColor }}
            title={party}
          >
            <IconComponent className="size-6" />
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-4 relative z-10">
          <div className="p-1 rounded-full border-2 border-solid border-secondary">
            <Image
              className="size-20 rounded-full object-cover grayscale-[0.5]"
              src={image}
              alt={`Portrait of ${name}`}
              width={80}
              height={80}
            />
          </div>
          <div>
            <h4 className="text-lg font-bold text-neutral-900">{name}</h4>
            <p className="text-sm font-medium text-neutral-600">{party}</p>
          </div>
          <p className="text-sm text-neutral-600/80 leading-relaxed line-clamp-2">
            {description}
          </p>
          <button
            className="mt-2 w-full py-2.5 rounded-xl bg-gray-100 text-gray-400 font-bold text-sm border border-gray-200 cursor-not-allowed flex items-center justify-center gap-2"
            disabled
          >
            <CheckCircle className="size-[18px] text-secondary" />
            You&apos;ve Voted
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl p-6 border border-[#f1f0f4] hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative">
      <div className="absolute top-6 right-6">
        <div
          className={`size-10 rounded-full flex items-center justify-center text-white shadow-sm`}
          style={{ backgroundColor: logoColor }}
          title={party}
        >
          <IconComponent className="size-6" />
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-1 rounded-full border-2 border-dashed border-primary/30 group-hover:border-primary transition-colors">
          <Image
            className="size-20 rounded-full object-cover"
            src={image}
            alt={`Portrait of ${name}`}
            width={80}
            height={80}
          />
        </div>
        <div>
          <h4 className="text-lg font-bold text-neutral-900">{name}</h4>
          <p className="text-sm font-medium text-neutral-600">{party}</p>
        </div>
        <p className="text-sm text-neutral-600/80 leading-relaxed line-clamp-2">
          {description}
        </p>
        <button
          onClick={onVote}
          className="mt-2 w-full py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all shadow-md shadow-primary/20"
        >
          Vote Now
        </button>
      </div>
    </div>
  );
}
