import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { GoKebabHorizontal } from "react-icons/go";
import Avatar from "../shared/Avatar";

const TeamMemberItem = ({ member }) => {
  const { avatar, name, email } = member;
  return (
    <div className=" flex flex-col items-center justify-center rounded-[24px] shadow-sm bg-[#f0fcf9] h-[297px] w-[250px] overflow-hidden">
      <div className="mb-2 flex items-end justify-end w-full p-4 ">
        <GoKebabHorizontal size={20} className="text-green rotate-90" />
      </div>{" "}
      <div className="mb-2 ">
        <Avatar image={avatar} className="w-[108px] h-[108px]" />
      </div>{" "}
      <div className="flex flex-col  items-center justify-center">
        <p className="text-lg font-medium text-left text-black">{name}</p>
        <p className="text-sm font-light text-left text-black">{email}</p>
      </div>
      <div className="w-full bg-[#ccf5eb] h-8 flex items-center justify-center mt-auto">
        <p className="text-base font-medium text-center text-green">
          View Profile
        </p>
      </div>
    </div>
  );
};

export default TeamMemberItem;
