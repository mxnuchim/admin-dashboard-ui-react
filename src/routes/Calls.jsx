import React from "react";
import { callsData } from "../constants/data";

const Calls = () => {
  const headerClassName = "text-black text-base font-medium text-left";

  const rowClassName = "py-5 px-4 rounded-lg text-gray-500 text-left";

  return (
    <div className="flex flex-col h-screen w-full bg-lightGreen p-6 pb-12 overflow-y-scroll">
      <div className="py-3 border-b w-full">
        <h3 className="text-xl font-semibold text-gray-800">Calls</h3>
      </div>

      {/** TABLE */}
      <div className="mt-4 overflow-x-scroll">
        <table className="min-w-full bg-white border-gray-300">
          <thead>
            <tr className="mb-8">
              <th className={`${headerClassName}`}>Name</th>
              <th className={`${headerClassName}`}>Type</th>
              <th className={`${headerClassName}`}>Duration</th>
              <th className={`${headerClassName}`}>Date</th>
            </tr>
          </thead>
          <tbody className="">
            {callsData.map((call, index) => (
              <tr key={index} className="">
                <td className={`${rowClassName}`}>{call.name}</td>
                <td className={`${rowClassName}`}>{call.type}</td>
                <td className={`${rowClassName}`}>{call.duration}</td>
                <td className={`${rowClassName}`}>{call.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calls;
