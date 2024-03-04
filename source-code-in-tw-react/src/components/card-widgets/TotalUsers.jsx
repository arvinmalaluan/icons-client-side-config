import React from "react";
import MyBarChart from "../common/BarChart";

const TotalUsers = () => {
  return (
    <div className="relative w-full h-full col-span-2 border rounded">
      <div className="p-4">
        <p className="text-xs text-gray-500">Total Users</p>
        <p className="text-2xl font-semibold text-pri-color">11, 018</p>
      </div>
      <div className="absolute bottom-0 w-full h-2/3">
        <MyBarChart />
      </div>
    </div>
  );
};

export default TotalUsers;
