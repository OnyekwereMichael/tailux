import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function EarningCard() {
  const bars = [
    { height: "90%" },
    { height: "100%" },
    { height: "60%" },
    { height: "40%" },
    { height: "70%" },
  ];

  return (
    <div className="bg-[#0F0F0F] h-[70%] rounded-lg p-4  border border-gray-800">
      {/* Top section */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-400 text-sm">Earning</p>
          <h2 className="text-white text-xl font-semibold mt-4">$16.4k</h2>
        </div>
        <ArrowUpRight className="text-green-500" size={18} />
      </div>

      {/* Bar chart */}
      <div className="flex items-end justify-between h-48">
        {bars.map((bar, idx) => (
          <div
            key={idx}
            className="w-2 bg-gray-500 relative rounded-full overflow-hidden"
            style={{ height: bar.height }}
          >
            <div className="absolute bottom-0 w-full bg-sky-500" style={{ height: "50%" }}></div>
          </div>
        ))}
      </div>

      {/* Image */}
      {/* <div className="flex justify-end mt-4">
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="placeholder"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div> */}
    </div>
  );
}
