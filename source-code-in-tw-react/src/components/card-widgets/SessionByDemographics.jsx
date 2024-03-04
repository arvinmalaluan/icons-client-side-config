import React from "react";
import MyPieChart from "../common/PieChart";

const SessionByDemographics = () => {
  const MyPercentageBar = (props) => {
    return (
      <div>
        <div className="flex items-center justify-between">
          <p className="text-xs">{props.label}</p>
          <p className="text-sm font-semibold text-sec-color">{props.count}</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${props.percentage}%` }}
          >
            {`${props.percentage}%`}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="col-span-8 border rounded">
      <div className="p-4">
        <p className="text-xl font-semibold text-pri-color">
          Demographics of User Sessions
        </p>
        <p className="mb-2 text-xs text-gray-500">
          Exploring the Diversity of User Sessions through Demographic Insights
          in this Chart.
        </p>
      </div>

      <div className="flex w-full h-3/4">
        <div className="w-full h-full">
          <MyPieChart />
        </div>

        <div className="flex flex-col w-1/2 h-full gap-4 px-4">
          <MyPercentageBar label="Cavite" count="4, 235" percentage="35" />
          <MyPercentageBar label="Batangas" count="6, 887" percentage="23" />
          <MyPercentageBar label="Quezon" count="8, 484" percentage="15" />
          <MyPercentageBar label="Laguna" count="1, 356" percentage="48" />
        </div>
      </div>
    </div>
  );
};

export default SessionByDemographics;
