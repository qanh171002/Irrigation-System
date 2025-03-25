import StatisticsTab from "./StatisticsTab";

function StatisticsLayout() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold text-neutral-900">
            Average Reports
          </h2>
          <p className="text-sm text-neutral-500">Weekly average overview</p>
        </div>
      </div>

      <StatisticsTab />
    </div>
  );
}

export default StatisticsLayout;
