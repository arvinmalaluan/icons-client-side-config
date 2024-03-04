import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const MyAreaChart = (props) => {
  const gradientId = `colorGradient_${Math.random().toString(36).substr(2, 9)}`;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={props.data}
        margin={{
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={props.fill} stopOpacity={0.8} />
            <stop offset="95%" stopColor={props.fill} stopOpacity={0} />
          </linearGradient>
        </defs>

        <Tooltip />
        <Area
          type="linear"
          dataKey="uv"
          stroke={props.stroke}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MyAreaChart;
