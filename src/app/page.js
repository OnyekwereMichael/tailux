


"use client";
import Image from "next/image";
import Header from "@/components/UI/Header";
import Sidebar from "@/components/UI/Sidebar";
import BarChartMultiple from "@/components/UI/Barchart";
import customer from "@/assets/customer.svg"; 
import { ArrowUp, BarChart3Icon, Users } from "lucide-react";
import { useState } from "react";
import ChartAreaDefault from "@/components/UI/Graph";
import  DataTable  from "@/components/UI/Dattable";
import TeamActivity from "@/components/UI/TeamActivity";
import SocialSourceCard from "@/components/UI/SocialSource";
import TransactionsCard from "@/components/UI/Transaction";
import CountrySourceCard from "@/components/UI/Country";
import TopSellerCard from "@/components/UI/TopSellerCard";
import BalanceCard from "@/components/UI/BalanceCard";
import RatingCard from "@/components/UI/RatingCard";
import EarningCard from "@/components/UI/EarningCard";
import { DollarSign, Package, BarChart3 } from "lucide-react";


export default function Home() {

  const [isSidebarOpen, setSidebarOpen] = useState(true);



const data = [
  {
    id: 1,
    name: "Sales",
    value: "6.5k",
    percentage: "4.3%",
    icon: <BarChart3Icon className="w-6 h-6" />, // Sales → Bar Chart
    color: "#ffba42",
    textColor: "text-[#ffba42]",
  },
  {
    id: 2,
    name: "Customers",
    value: "12k",
    percentage: "7.2%",
    icon: <Users className="w-5 h-5" />,
    color: "#00d492",
    textColor: "text-[#00d492]",
  },
  {
    id: 3,
    name: "Product",
    value: "47k",
    percentage: "8%",
    icon: <Package className="w-6 h-6" />, // Product → Package box icon
    color: "#4db8ff",
    textColor: "text-[#4db8ff]",
  },
  {
    id: 4,
    name: "Revenue",
    value: "$128k",
    percentage: "3.69%",
    icon: <DollarSign className="w-6 h-6" />, // Revenue → Dollar sign icon
    color: "#ff4d4d",
    textColor: "text-[#ff4d4d]",
  },
];


  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#0e0f11] ml-20 text-gray-300 ">
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar collapsed={!isSidebarOpen} toggleCollapsed={toggleSidebar} />

      <div className="grid grid-cols-4 gap-3 max-sm:grid-cols-1  p-4  text-white">
        {data.map((item) => (
        <div key={item.id} className="flex justify-between w-full gap-4 p-4 border border-gray-800 rounded-[10px]">
          <div className="flex flex-col justify-center gap-1">
            <p className="text-gray-300 font-semibold">{item.name}</p>
            <p className={`text-2xl my-2 font-bold ${item.textColor}`}>{item.value}</p>

            <p className="text-sm text-[#00d492] flex items-center"> <ArrowUp size={16}/> {item.percentage}</p>
          </div>

            <div
      className="p-2 max-w-[250px] rounded-[30%] h-[40px] w-[40px]"
      style={{ backgroundColor: `${item.color}42` }} // 42 makes it semi-transparent
    >
      {/* <Image src={item.img} alt="" /> */}
      <span className={item.textColor}>{item.icon}</span>
    </div>

        </div>
        ))}        
      </div>

        <div className="grid grid-cols-3 gap-4 justify-between p-4 max-sm:grid-cols-1">

          <div className="col-span-2"><BarChartMultiple /></div>

          <div className="flex gap-4 col-span-1 max-sm:flex-col">

            <div className="w-full h-full flex flex-col justify-between gap-4">
              <EarningCard />
            <RatingCard labelTop="Current Rating" labelBottom="" percentage={72} strokeColor="#0ea5e9" />
            </div>
            
            <div className="w-full h-full flex flex-col justify-between gap-4">

             <RatingCard labelTop="Closed Rating" labelBottom="" percentage={85} strokeColor="#10B981" />

              <div className="h-[70%] border rounded-xl border-gray-800 flex flex-col justify-between">
               <div className="p-4">
                  <p className="text-lg font-semibold">Earning</p>
                  <p className="text-lg mt-3">$16.4k</p>
               </div>

               <div>
                <ChartAreaDefault />
               </div>
              </div>
            </div>
          </div>

        </div>

<div className="grid grid-cols-3 gap-0 items-center max-sm:grid-cols-1">
        <div className="p-4 col-span-2">
          <DataTable />
        </div>
        <div className="col-span-1">
          <BalanceCard />
          <TopSellerCard />
        </div>
        </div>

       <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 ">
       <TeamActivity />
       <div className="grid grid-cols-1 gap-4">
     <SocialSourceCard />
       <CountrySourceCard />
      </div>
      <TransactionsCard />
      </div>

   

    </div>
  );
}