import { FiDownload } from "react-icons/fi";

export default function BalanceCard() {
  return (
   <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-[#0052D4] via-[#0066FF] to-[#0052D4] text-white flex flex-col items-center shadow-lg mr-4 max-sm:ml-4">

      {/* Graph Icon / Line */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        fill="none"
        stroke="white"
        strokeWidth="4"
        className="w-16 h-16 mb-4"
      >
        <path d="M10 90 Q 60 10, 110 60 T 190 50" />
      </svg>

      {/* Balance */}
      <div className="text-3xl font-extrabold">$31.313</div>
      <div className="text-gray-200 text-sm mt-1">Current Balance</div>

      {/* Button */}
      <button className="mt-4 flex items-center gap-2 border border-white rounded-full px-4 py-2 hover:bg-white hover:text-blue-500 transition">
        <FiDownload className="text-lg" />
        <span className="font-semibold text-md">Get Statement</span>
      </button>
    </div>
  );
}
