import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { randomArray } from "../../assets/dummy/randomdata";

const MyBarChart2d = () => {
  const data = randomArray;
  const gradientId = `barGradient_${Math.random().toString(36).substr(2, 9)}`;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 80,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#e60049" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#e60049" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Tooltip />
        <Bar dataKey="pv" fill={`url(#${gradientId})`} />
        <Bar dataKey="uv" fill={`url(#${gradientId})`} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart2d;
