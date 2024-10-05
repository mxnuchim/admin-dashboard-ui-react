import React from "react";
import TeamMemberItem from "../components/team/TeamMemberItem";
import { FaCirclePlus } from "react-icons/fa6";
import { teamMembers } from "../constants/data";

const Team = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-lightGreen p-6 pb-12 overflow-y-scroll">
      {" "}
      <div className="py-3 border-b w-full">
        <h3 className="text-xl font-semibold text-gray-800">Team</h3>
      </div>
      <div className="w-full flex flex-wrap mt-10 mx-4 gap-5">
        {[...teamMembers, ...teamMembers]?.map((member, index) => (
          <TeamMemberItem member={member} key={index} />
        ))}
        <AddMember />
      </div>
    </div>
  );
};

export default Team;

const AddMember = () => {
  return (
    <div className=" flex flex-col items-center justify-center rounded-[24px] shadow-sm bg-[#f0fcf9] h-[297px] w-[250px] overflow-hidden">
      <div className=" rounded-full items-center justify-center flex p-2 mb-4">
        <FaCirclePlus size={50} className="text-green" />
      </div>{" "}
      <p className="text-xl font-medium text-left text-green">Add member</p>
    </div>
  );
};
