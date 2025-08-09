import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function RatingCard({
  labelTop = "Current", // default top label
  labelBottom = "Rating", // default bottom label
  percentage = 85, // default progress value
  strokeColor = "#10B981", // default progress stroke color
}) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = (1 - percentage / 100) * circumference;

  return (
    <div className="bg-[#0e0f11] border border-gray-800 rounded-xl p-4 flex items-center gap-4 shadow-md">
      {/* Progress Circle */}
      <div className="relative w-16 h-16">
        <svg className="transform -rotate-90 w-16 h-16">
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#1E1E1E"
            strokeWidth="6"
            fill="transparent"
          />
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke={strokeColor}
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm">
          {percentage}%
        </span>
      </div>

      {/* Labels & Arrow */}
      <div className="flex flex-col">
        <span className="text-gray-300 text-sm leading-tight">{labelTop}</span>
        <span className="text-gray-300 text-sm leading-tight">{labelBottom}</span>
        <ArrowUpRight className="text-green-500 mt-1" size={16} />
      </div>
    </div>
  );
}
