import React from "react";
import { AiOutlinePlus } from "react-icons/ai"; // Plus icon for additional members
import Avatar from "../shared/Avatar";
import { FaPlus } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const ProjectItem = ({ name, project, avatars, icon }) => {
  return (
    <div className=" flex flex-col items-start p-4 rounded-[15px] shadow-sm bg-[#f0fcf9] h-[160px] w-[144px]">
      {/* Project Icon */}
      <div className="mb-4 flex justify-center">
        <div className="">{icon} </div>
      </div>

      {/* Project Name */}
      <p className="text-[15px] font-medium text-left text-green  pr-[50%]">
        {name}
      </p>

      <div className="flex  mt-2 w-full">
        <div className="relative flex items-center w-full">
          {/* First Avatar */}
          <div>
            <Avatar
              className="h-5 w-5 rounded-full object-cover"
              image={avatars[0]}
            />
          </div>

          {/* Second Avatar with overlap */}
          <div className="absolute left-4">
            {" "}
            <Avatar
              className="h-5 w-5 rounded-full object-cover"
              image={avatars[1]}
            />
          </div>
          <div className="absolute left-8 bg-white rounded-full items-center justify-center flex p-1">
            <span className="text-xs text-blue-400 font-medium">2+</span>
          </div>
        </div>

        <div className=" rounded-full items-center justify-center flex p-1">
          <FaCirclePlus size={16} className="text-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
