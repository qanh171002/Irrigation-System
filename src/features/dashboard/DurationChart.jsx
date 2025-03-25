import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function DurationChart({ pumpData }) {
  const activeTime = pumpData.reduce((sum, entry) => sum + entry.activeTime, 0);
  const inactiveTime = pumpData.reduce(
    (sum, entry) => sum + entry.inactiveTime,
    0,
  );

  const data = [
    { name: "Active Time", value: activeTime, color: "#4a944a" },
    { name: "Inactive Time", value: inactiveTime, color: "#ffb3b3" },
  ];

  return (
    <div className="h-full rounded-lg border border-gray-100 bg-white p-6">
      <p className="mb-4 text-lg font-semibold">Pump Operation Summary</p>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            nameKey="name"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} stroke={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={10}
            iconType="circle"
            wrapperStyle={{ fontSize: "18px", color: "#4b5563" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DurationChart;
