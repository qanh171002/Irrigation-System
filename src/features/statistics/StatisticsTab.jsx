import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BASE_URL } from "../../utils/constants";

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
    color: "#4a944a",
    dataKey: "moisture",
    unit: "%",
  },
  {
    id: "humidity",
    label: "Humidity",
    color: "#3B82F6",
    dataKey: "humidity",
    unit: "%",
  },
];

const normalizeDay = (day) => {
  const map = {
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
    sun: "Sun",
  };
  return map[day.toLowerCase()] || day;
};

function StatisticsTab() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const res = await fetch(`${BASE_URL}/sensors/data/statistics`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        if (res.ok) {
          const json = await res.json();
          const dataFromAPI = json.result.map((item) => ({
            ...item,
            day: normalizeDay(item.day),
          }));
          setChartData(dataFromAPI);
        } else {
          throw new Error("Get statistics failed");
        }
      } catch (error) {
        console.error("Get error:", error.message);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="rounded-md border border-neutral-200 bg-white p-6">
      <div className="mt-4 flex w-fit gap-2 rounded-md border border-gray-200 p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`rounded-md px-4 py-2 text-xl font-normal transition-colors duration-300 ${
              activeTab.id === tab.id
                ? "bg-primary-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10 flex min-h-[450px] w-full justify-center p-4">
        {chartData.length === 0 ? (
          <div className="flex items-center justify-center text-lg font-medium">
            No data to show at the moment
          </div>
        ) : (
          <ResponsiveContainer width="70%" height={450}>
            <BarChart data={chartData}>
              <XAxis dataKey="day" />
              <YAxis
                ticks={
                  activeTab.id === "temperature"
                    ? [0, 10, 20, 30, 40]
                    : [0, 20, 40, 60, 80, 100]
                }
                domain={[0, activeTab.id === "temperature" ? 40 : 100]}
              />
              <Tooltip formatter={(value) => `${value} ${activeTab.unit}`} />
              <Legend />
              <Bar dataKey={activeTab.dataKey} fill={activeTab.color} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

export default StatisticsTab;
