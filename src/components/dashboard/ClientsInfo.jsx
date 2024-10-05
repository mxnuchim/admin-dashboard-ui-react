import React from "react";

const ClientInfo = () => {
  const clients = [
    { name: "Alice Johnson", project: "The Future" },
    { name: "Bob Smith", project: "UpLabs" },
    { name: "Charlie Brown", project: "SalmanWap" },
    { name: "Charlie Brown", project: "sdpClub" },
  ];

  return (
    <div className="shadow rounded-md  py-6 w-full mx-[5%]">
      <div className="flex items-center justify-between pb-4 border-b px-4">
        <h2 className="text-xl font-semibold text-black">Clients</h2>
        <p className="text-gray-300 text-sm inline">
          Project: <p className="text-gray-500 font-semibold inline">Uplabs</p>
        </p>
      </div>
      <ul className="space-y-3 px-4">
        {clients.map((client, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 border-b"
          >
            {/* Client Name */}
            <div className="text-green font-semibold">{client.name}</div>

            {/* Project */}
            <div className="text-gray-500">{client.project}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientInfo;
