import { FiMoreHorizontal, FiMessageCircle, FiMail, FiPhone } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";

export default function TopSellerCard() {
  return (
    <div className=" bg-[#111214] max-sm:ml-4 mr-4 rounded-2xl p-5 text-white font-sans border border-[#2A2B2F] shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Top Sellers</span>
        <FiMoreHorizontal className="text-gray-400 cursor-pointer hover:text-white" />
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center mt-5">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover"
        />
        <p className="mt-3 text-lg font-semibold">Travis Fuller</p>
        <p className="text-sm text-gray-400">Salesman</p>
      </div>

      {/* Sales Card */}
      <div className="bg-[#1C1D20] mt-5 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Sales</p>
            <p className="text-2xl font-bold">2,348</p>
          </div>
          <div className="flex items-center text-green-400 text-sm font-medium">
            <FaArrowUp className="mr-1" /> 4.30%
          </div>
        </div>

        {/* Fake line chart */}
        <svg viewBox="0 0 200 50" className="w-full mt-2">
          <path
            d="M0 35 Q 40 10, 80 30 T 200 25"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
      </div>

      {/* Action Icons */}
      <div className="flex justify-center gap-6 mt-5">
        <button className="bg-[#1C1D20] p-2 rounded-full hover:bg-[#2A2B2F] transition">
          <FiMessageCircle />
        </button>
        <button className="bg-[#1C1D20] p-2 rounded-full hover:bg-[#2A2B2F] transition">
          <FiMail />
        </button>
        <button className="bg-[#1C1D20] p-2 rounded-full hover:bg-[#2A2B2F] transition">
          <FiPhone />
        </button>
      </div>
    </div>
  );
}
