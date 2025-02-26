import Stats from "./DashboardStats"
import DurationChart from "./DurationChart"
import { mockPumpData } from "../../data/mockData"

function DashboardLayout() {
    return (
        <div className="grid grid-cols-4 grid-rows-[auto_34rem_auto] gap-6">
            <Stats />
            <div className="col-span-2">Today activity</div>
            <div className="col-span-2">
                <DurationChart pumpData={mockPumpData} />
            </div>
        </div>
    )
}

export default DashboardLayout
