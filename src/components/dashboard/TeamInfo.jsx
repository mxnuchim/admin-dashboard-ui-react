// components/TeamInfo.js
import React from "react";
import { AiOutlineMessage } from "react-icons/ai"; // Chat message icon
import { IoChatboxEllipses } from "react-icons/io5";
import Avatar from "../shared/Avatar";
import { teamMembers } from "../../constants/data";

const TeamInfo = () => {
  return (
    <div className="shadow rounded-md py-4 w-full mx-[10%]">
      <div className="flex items-center justify-between pb-4 border-b px-4">
        <h2 className="text-xl font-semibold  text-black">Team</h2>
        <p className="text-gray-300 text-sm inline">
          Project: <p className="text-gray-500 font-semibold inline">Uplabs</p>
        </p>
      </div>
      <ul className="space-y-3 px-4">
        {teamMembers.map((member, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 border-b"
          >
            <div className="flex items-center">
              <Avatar
                image={member.avatar}
                alt={member.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <p className="text-gray-800">{member.name}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:underline">
              <IoChatboxEllipses className="text-lg" />
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-end justify-end px-4">
        <button className="text-gray-500 hover:underline">View All (5)</button>
      </div>
    </div>
  );
};

export default TeamInfo;
