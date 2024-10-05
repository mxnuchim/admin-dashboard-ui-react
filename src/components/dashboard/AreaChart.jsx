// components/dashboard/AreaChart.js
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomAreaChart = ({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={chartData} // Use the chartData prop directly here
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 20,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={"#52DBB2"} stopOpacity={0.5} />
            <stop offset="100%" stopColor={"#52DBB2"} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" style={{ fontSize: 12 }} axisLine={false} />
        <YAxis
          tickFormatter={(value) => `${value / 1000}k`}
          style={{ fontSize: 12 }}
          axisLine={false}
        />
        <Tooltip itemStyle={{ textTransform: "capitalize" }} />
        <Area
          type="monotone"
          dataKey="transactions"
          stroke={"#52DBB2"}
          fill="url(#colorUv)"
          strokeWidth={4}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChart;
