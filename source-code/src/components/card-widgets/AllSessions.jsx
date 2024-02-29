import React from "react";
import MyBarChart2d from "../common/BarChart2Datasets";

const AllSessions = () => {
  return (
    <div className="relative w-full h-full col-span-4 border rounded">
      <div className="px-4 pt-4">
        <p className="text-xs text-gray-500">All Sessions</p>
        <p className="text-2xl font-semibold text-pri-color">12, 150</p>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <MyBarChart2d />
      </div>
    </div>
  );
};

export default AllSessions;
