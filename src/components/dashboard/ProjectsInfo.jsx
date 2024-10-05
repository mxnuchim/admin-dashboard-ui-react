import React from "react";
import ProjectItem from "./ProjectItem";
import Analytics from "../icons/Analytics";
import System from "../icons/System";
import Community from "../icons/Community";
import Health from "../icons/Health";
import { FaCirclePlus } from "react-icons/fa6";

const ProjectsInfo = () => {
  const projects = [
    { name: "Analytics Design", project: "The Future", icon: <Analytics /> },
    { name: "Design System", project: "UpLabs", icon: <System /> },
    { name: "Virtual Community", project: "SalmanWap", icon: <Community /> },
    { name: "Fitness App", project: "sdpClub", icon: <Health /> },
  ];

  return (
    <div className="shadow rounded-md py-6 w-full">
      <div className="flex items-center justify-between pb-4 px-4 border-b">
        <h2 className="text-xl font-semibold text-black">Projects</h2>
        <p className="text-gray-300 text-sm inline">
          Month: <p className="text-gray-500 font-semibold inline">October</p>
        </p>
      </div>
      <ul className="flex space-x-3 px-4 mt-3">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            name={project.name}
            project={project.name}
            icon={project.icon}
            avatars={[
              "https://static9.depositphotos.com/1278120/1090/i/450/depositphotos_10900960-Casual-business-woman.jpg",
              "https://www.everypixel.com/preview_collections/20231127/people_of_the_world_vol.2_3",
            ]}
          />
        ))}

        <AddProject />
      </ul>
    </div>
  );
};

export default ProjectsInfo;

const AddProject = () => {
  return (
    <div className=" flex flex-col items-center justify-center p-4 rounded-[15px] shadow-sm bg-[#f0fcf9] h-[160px] w-[144px]">
      <div className=" rounded-full items-center justify-center flex p-2 mb-4">
        <FaCirclePlus size={35} className="text-green" />
      </div>{" "}
      <p className="text-[15px] font-medium text-left text-green">
        Add project
      </p>
    </div>
  );
};
