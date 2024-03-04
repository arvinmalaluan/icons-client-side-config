import React, { PureComponent } from "react";
import { randomArray } from "../../assets/dummy/randomdata";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = randomArray;

const MyBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="barid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffa300" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ffa300" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Bar dataKey="uv" fill="url(#barid)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;
