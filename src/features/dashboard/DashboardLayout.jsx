import Stats from "./DashboardStats";
import DurationChart from "./DurationChart";
import { mockPumpData } from "../../data/mockData";
import TodayActivity from "./TodayActivity";

function DashboardLayout() {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_22rem_auto] gap-6">
      <Stats />
      <div className="col-span-2">
        <TodayActivity />
      </div>
      <div className="col-span-2">
        <DurationChart pumpData={mockPumpData} />
      </div>
      <div className="col-span-4">Last chart</div>
    </div>
  );
}

export default DashboardLayout;
