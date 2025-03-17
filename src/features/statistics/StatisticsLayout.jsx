import StatisticsTab from "./StatisticsTab";

function StatisticsLayout() {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-gray-100 bg-white p-6">
      <p className="font-normal text-gray-800">Average Reports</p>
      <p className="text-xl font-normal text-gray-600">
        Weekly average overview
      </p>

      <StatisticsTab />
    </div>
  );
}

export default StatisticsLayout;
