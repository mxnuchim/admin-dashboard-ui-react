// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { AiOutlineBell } from "react-icons/ai"; // Notification icon
import { IoIosArrowDown } from "react-icons/io"; // Chevron down icon
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-4 flex justify-between items-center h-20">
        {/* Brand Logo */}
        <div className="flex items-center">
          <span className="text-green text-xl font-bold">SalmanWap</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <div className="relative cursor-pointer">
            <AiOutlineBell className="text-gray-600 text-2xl" />
            <span className="absolute top-0 right-0 bg-red-500 rounded-full w-3 h-3"></span>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <Avatar
              image="https://t4.ftcdn.net/jpg/06/45/22/39/360_F_645223994_gQhjScGH6urW1hyjh82YLCPa0n0jHCOy.jpg"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover" // Rounded avatar
            />
            <span className="text-gray-800">Shambhavi Mishra</span>{" "}
            <IoIosArrowDown className="text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
