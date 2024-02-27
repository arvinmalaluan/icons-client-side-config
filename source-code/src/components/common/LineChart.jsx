import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page Views", uv: 50000 },
  { name: "Unique Visitors", uv: 15000 },
  { name: "Engagement Rate", uv: 0.75 },
  { name: "Conversion Rate", uv: 0.05 },
  { name: "Average Time Spent", uv: 180 },
  { name: "Bounce Rate", uv: 0.2 },
  { name: "New Users", uv: 8000 },
  { name: "Returning Users", uv: 12000 },
  { name: "Social Shares", uv: 2500 },
  { name: "Email Subscribers", uv: 3500 },
  { name: "Click-through Rate (CTR)", uv: 0.03 },
  { name: "Video Views", uv: 100000 },
  { name: "Demographic: Age 18-24", uv: 6000 },
  { name: "Demographic: Age 25-34", uv: 12000 },
  { name: "Demographic: Age 35-44", uv: 8000 },
  { name: "Geographic: United States", uv: 25000 },
  { name: "Geographic: Europe", uv: 18000 },
  { name: "Device: Desktop", uv: 30000 },
  { name: "Device: Mobile", uv: 20000 },
  { name: "Device: Tablet", uv: 5000 },
];

const MyAreaChart = (props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MyAreaChart;
