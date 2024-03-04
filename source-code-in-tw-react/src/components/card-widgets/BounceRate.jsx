import React from "react";
import MyAreaChart from "../common/LineChart";

const BounceRate = () => {
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
    <div className="relative w-full h-full col-span-2 border rounded">
      <div className="p-4">
        <p className="text-xs text-gray-500">Bounce Rate</p>
        <p className="text-2xl font-semibold text-pri-color">33%</p>
      </div>

      <div className="absolute bottom-0 w-full h-2/3">
        <MyArea fill="#fd7f6f" stroke="#b30000" />
      </div>
    </div>
  );
};

export default BounceRate;
