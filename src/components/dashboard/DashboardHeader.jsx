// components/CustomHeader.js
import React from "react";
import { AiOutlineSearch } from "react-icons/ai"; // Search icon

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center p-4  w-full">
      {/* Left Section */}
      <div className="flex flex-col">
        <p className="text-5xl text-gray-400 inline">
          Hi <span className="font-semibold">Shambhavi</span>
        </p>
        <p className="text-gray-500 inline">
          You can manage your whole team from here
        </p>
      </div>

      {/* Right Section - Custom Search Input */}
      <div className="relative w-[447px] flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="pl-12 pr-4 py-2  h-16 bg-gray-100 outline-none w-full rounded-[24px] text-black"
        />
        <AiOutlineSearch className="absolute left-3 text-gray-300" size={35} />
      </div>
    </div>
  );
};

export default DashboardHeader;
