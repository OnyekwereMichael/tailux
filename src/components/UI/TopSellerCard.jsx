import { FiEye } from "react-icons/fi";

export default function TopSellerCard() {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-b from-[#1C1D20] to-[#0f1013] text-white font-sans border border-[#2A2B2F] shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold tracking-wide">Top Seller</span>
        <FiEye className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-6">
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAGoAEKJ83pdl0QVb96RQozfXzgoFSFaliA&s"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-[#2A2B2F] object-cover"
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#1C1D20] rounded-full"></span>
        </div>
        <p className="mt-3 text-lg font-semibold">Travis Fuller</p>
        <p className="text-sm text-gray-400">#1 in Sales</p>
      </div>

      {/* Stats Section */}
      <div className="mt-6 flex items-center justify-between bg-[#2A2B2F] rounded-lg p-4">
        <div className="text-center">
          <p className="text-2xl font-bold">1,240</p>
          <p className="text-xs text-gray-400">Items Sold</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-400">+18%</p>
          <p className="text-xs text-gray-400">Growth</p>
        </div>
      </div>
    </div>
  );
}
