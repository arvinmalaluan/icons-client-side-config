import React from "react";
import MyAreaChart from "../common/LineChart";

const AudienceMetrics = () => {
  const MyCard = (props) => {
    return (
      <>
        <div>
          <p className="text-xs text-gray-500">{props.label}</p>
          <p className="text-sm font-semibold">{props.value}</p>
        </div>
      </>
    );
  };

  const MyArea = (props) => {
    const randomarray = Array.from({ length: 10 }, () => ({
      uv: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
      pv: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
    }));

    return (
      <MyAreaChart data={randomarray} fill={props.fill} stroke={props.stroke} />
    );
  };

  return (
    <div className="col-span-7 border rounded">
      <div className="flex items-start justify-between px-4 pt-4">
        <div className="mb-2">
          <p className="text-xl font-semibold text-pri-color">
            Website Audience Metrics
          </p>
          <p className="text-xs text-gray-500">
            Audience to which the users belonged while on the current date
            range.
          </p>
        </div>

        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="px-4 py-2 text-xs text-gray-500 border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-400 focus:text-blue-700"
          >
            Day
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs text-gray-500 border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-400 focus:text-blue-700"
          >
            Week
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs text-gray-500 border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-400 focus:text-blue-700"
          >
            Month
          </button>
        </div>
      </div>

      <div className="flex gap-4 px-4 mt-4 mb-4">
        <MyCard label="Users" value="13, 002" />
        <MyCard label="Bounce Rate" value="13, 002" />
        <MyCard label="Page Views" value="13, 002" />
        <MyCard label="Sessions" value="13, 002" />
      </div>

      <div className="w-full h-56">
        <MyArea fill="#00b7c7" stroke="#0d88e6" />
      </div>
    </div>
  );
};

export default AudienceMetrics;
