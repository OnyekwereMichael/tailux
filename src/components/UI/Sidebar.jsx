

"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Gift,
  Grid2x2,
  SquareMenu,
  House,
  User,
  Settings,
  Bell,
  MessageSquare, // <-- Added Settings icon
} from "lucide-react";

export default function Sidebar({ collapsed, toggleCollapsed }) {
  const [activeItem, setActiveItem] = useState("Sales");

  const menuItems = [
    { label: "Dashboards", hasSubmenu: true },
    { label: "Sales", active: true },
    { label: "CRM Analytics" },
    { label: "Orders" },
    { label: "Cryptocurrency", hasSubmenu: true },
    { label: "Banking", hasSubmenu: true },
    { label: "Personal" },
    { label: "CMS Analytics" },
    { label: "Influencer" },
    { label: "Travel" },
    { label: "Teacher" },
    { label: "Education" },
    { label: "Authors" },
    { label: "Doctor" },
    { label: "Employees" },
    { label: "Workspaces" },
    { label: "Meetings" },
    { label: "Projects Board" }
  ];

  return (
    <div className="flex h-screen fixed top-0 left-0 z-50">
      {/* Fixed Vertical Icon Bar */}
      <div className="w-20 bg-[#0e0f11] flex flex-col items-center justify-between h-full py-4 border-r border-gray-800">
       
        <div className="flex flex-col items-center gap-6 mt-6 text-gray-400"> 
          <div className="inline-block px-4 py-2 text-xl font-extrabold tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg shadow-md">
  TA
</div>


 <div className="flex flex-col gap-2">
      {/* House (unchanged) */}
      <div className="cursor-pointer hover:text-white p-4 bg-[#001f5d88] rounded-2xl">
        <House className="w-6 h-6" />
      </div>

     
      <div className="cursor-pointer hover:text-white p-4 rounded-2xl">
        <User className="w-6 h-6" /> 
      </div>

      {/* <div className="cursor-pointer hover:text-white p-4 rounded-2xl">
        <Settings className="w-7 h-7" /> 
      </div> */}

      <div className="cursor-pointer hover:text-white p-4 rounded-2xl">
        <MessageSquare className="w-6 h-6" /> 
      </div>

      
      <div className="cursor-pointer hover:text-white p-4 rounded-2xl">
        <Bell className="w-6 h-6" /> 
      </div>

      <div className="cursor-pointer hover:text-white p-4 rounded-2xl">
        <Gift className="w-7 h-7" /> {/* New extra icon */}
      </div>
    </div>
        </div>

        {/* Spacer */}
        <div className="flex flex-col items-center gap-6">
          <Settings className="h-7 w-7 text-gray-400 cursor-pointer hover:text-white" />
        <div className="relative w-14 h-14">
  <img
    src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
    alt="Profile"
    className="w-14 h-14 rounded-full border border-gray-700"
  />
  
  {/* Green active dot */}
  <span className="absolute top-[10px] right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
</div>

          
        </div>
      </div>

      {/* Expandable Sidebar */}
      <div
        className={`bg-[#0e0f11] border-r border-gray-800 transition-all duration-300 flex flex-col ${
          collapsed ? "w-0" : "w-64"
        } overflow-hidden`}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-white">Dashboards</span>
          </div>
          <button
            onClick={toggleCollapsed}
            className="p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-gray-400" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="space-y-1 px-3">
            {menuItems.map((item, index) => {
              const isActive = item.label === activeItem;
              return (
                <button
                  key={index}
                  onClick={() => setActiveItem(item.label)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 text-left"
                >
                  <span
                    className={`text-sm truncate ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.hasSubmenu && (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Random placeholder profile image */}
            <img
              src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-700"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400 truncate">Michael O</p>
              <p className="text-xs text-gray-400 truncate">
                08131510808
              </p>
            </div>
          </div>
          <Settings className="h-8 w-8 text-gray-400 cursor-pointer hover:text-white" />
        </div>
      </div>
    </div>
  );
}
