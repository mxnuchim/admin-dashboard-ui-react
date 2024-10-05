// routes/Dashboard.js
import React from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import CustomAreaChart from "../components/dashboard/AreaChart";
import TeamInfo from "../components/dashboard/TeamInfo";
import ClientInfo from "../components/dashboard/ClientsInfo";
import ProjectsInfo from "../components/dashboard/ProjectsInfo";

const areaChartData = [
  { day: "Jan", transactions: 22000 },
  { day: "Feb", transactions: 18500 },
  { day: "Mar", transactions: 27000 },
  { day: "Apr", transactions: 21000 },
  { day: "May", transactions: 29000 },
  { day: "Jun", transactions: 17000 },
  { day: "Jul", transactions: 31000 },
  { day: "Aug", transactions: 18000 },
  { day: "Sep", transactions: 32000 },
  { day: "Oct", transactions: 21000 },
  { day: "Nov", transactions: 33000 },
  { day: "Dec", transactions: 26000 },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-white p-6">
      <DashboardHeader />

      <div className="w-full flex items-center justify-center space-x-8">
        <div className="flex flex-1">
          <CustomAreaChart chartData={areaChartData} />
        </div>

        <div className="flex w-1/3">
          <TeamInfo />
        </div>
      </div>
      <div className="w-full flex items-center">
        <div className="flex w-1/3">
          <ClientInfo />
        </div>

        <div className="flex flex-1">
          <ProjectsInfo />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
