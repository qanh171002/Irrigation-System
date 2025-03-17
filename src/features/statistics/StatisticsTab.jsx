import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  { day: "Mon", temperature: 21, moisture: 60, waterUsed: 5 },
  { day: "Tue", temperature: 23, moisture: 65, waterUsed: 4.5 },
  { day: "Wed", temperature: 25, moisture: 70, waterUsed: 6 },
  { day: "Thu", temperature: 26, moisture: 55, waterUsed: 5.2 },
  { day: "Fri", temperature: 22, moisture: 68, waterUsed: 4.8 },
  { day: "Sat", temperature: 19, moisture: 72, waterUsed: 5.5 },
  { day: "Sun", temperature: 24, moisture: 63, waterUsed: 5.1 },
];

const tabs = [
  {
    id: "temperature",
    label: "Temperature",
    color: "#FF8C00",
    dataKey: "temperature",
    unit: "°C",
  },
  {
    id: "moisture",
    label: "Soil Moisture",
    color: "#4CAF50",
    dataKey: "moisture",
    unit: "%",
  },
  {
    id: "waterUsed",
    label: "Used Water",
    color: "#2196F3",
    dataKey: "waterUsed",
    unit: "L",
  },
];

function StatisticsTab() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="p-6">
      <div className="mt-4 flex w-fit gap-2 rounded-md border border-gray-200 p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`rounded-md px-4 py-2 text-xl font-normal ${
              activeTab.id === tab.id
                ? "bg-green-600 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10 flex min-h-[450px] w-full justify-center p-4">
        <ResponsiveContainer width="70%" height={450}>
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis
              ticks={
                activeTab.id === "temperature"
                  ? [0, 10, 20, 30, 40, 50]
                  : activeTab.id === "moisture"
                    ? [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                    : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
              }
              domain={[
                0,
                activeTab.id === "temperature"
                  ? 30
                  : activeTab.id === "moisture"
                    ? 100
                    : 10,
              ]}
            />

            <Tooltip formatter={(value) => `${value} ${activeTab.unit}`} />
            <Legend />
            <Bar dataKey={activeTab.dataKey} fill={activeTab.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StatisticsTab;
