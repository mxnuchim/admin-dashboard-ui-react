import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import {
  MdHome,
  MdGroup,
  MdCall,
  MdOutlineAnalytics,
  MdSettings,
} from "react-icons/md";
import { IoCalendarNumberSharp } from "react-icons/io5";

const Sidebar = () => {
  const location = useLocation(); // Access the current URL
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [activeRoute, setActiveRoute] = useState(location.pathname); // Set the default route based on URL

  // Handle navigation and active state update
  const handleNavigation = (route) => {
    setActiveRoute(route); // Update the active route
    navigate(route); // Navigate to the selected route
  };

  // Update active route based on current path (useful on reload)
  useEffect(() => {
    setActiveRoute(location.pathname); // Update the active route on location change
  }, [location.pathname]);

  return (
    <nav className="flex flex-col items-center justify-start h-screen w-[200px] bg-white border-r shadow-lg">
      {/* Sidebar Links */}
      <ul className="w-full">
        <SidebarItem
          route="/dashboard"
          activeRoute={activeRoute}
          icon={<MdHome size={25} />}
          label="Dashboard"
          onClick={handleNavigation}
        />
        <SidebarItem
          route="/team"
          activeRoute={activeRoute}
          icon={<MdGroup size={25} />}
          label="Team"
          onClick={handleNavigation}
        />
        <SidebarItem
          route="/calls"
          activeRoute={activeRoute}
          icon={<MdCall size={25} />}
          label="Calls"
          onClick={handleNavigation}
        />
        <SidebarItem
          route="/meetings"
          activeRoute={activeRoute}
          icon={<IoCalendarNumberSharp size={25} />} // You might want to replace this with a different icon for Meetings
          label="Meetings"
          onClick={handleNavigation}
        />
        <SidebarItem
          route="/analytics"
          activeRoute={activeRoute}
          icon={<MdOutlineAnalytics size={25} />}
          label="Analytics"
          onClick={handleNavigation}
        />
        <SidebarItem
          route="/settings"
          activeRoute={activeRoute}
          icon={<MdSettings size={25} />}
          label="Settings"
          onClick={handleNavigation}
        />
      </ul>
    </nav>
  );
};

export default Sidebar;

const SidebarItem = ({ route, activeRoute, icon, label, onClick }) => {
  const isActive = activeRoute === route;

  return (
    <li className="w-full h-16">
      <div
        onClick={() => onClick(route)}
        className={`flex items-center w-full h-full space-x-2 ${
          isActive ? "bg-gradient-to-r from-[#EAFBF6] to-white" : ""
        }`}
      >
        <div
          className={`h-full w-1 ${isActive ? "bg-green" : "transparent"}`}
        />
        {React.cloneElement(icon, {
          className: isActive ? "text-green" : "text-gray-400",
        })}
        <p className={`${isActive ? "text-green" : "text-gray-400"} text-lg`}>
          {label}
        </p>
      </div>
    </li>
  );
};
