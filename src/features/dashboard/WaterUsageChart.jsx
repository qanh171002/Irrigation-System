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
  { time: "00:00", usage: 4 },
  { time: "04:00", usage: 3 },
  { time: "08:00", usage: 6 },
  { time: "12:00", usage: 8 },
  { time: "16:00", usage: 7 },
  { time: "20:00", usage: 5 },
  { time: "24:00", usage: 4 },
];

function WaterUsageChart() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="border-b border-neutral-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold text-neutral-900">
              Water Usage Trend
            </h2>
            <p className="text-sm text-neutral-500">Daily water consumption</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4a944a" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#4a944a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="time" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="usage"
              stroke="#3d7a3d"
              fillOpacity={1}
              fill="url(#colorUsage)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WaterUsageChart;
