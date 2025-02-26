import Stats from "./DashboardStats"

function DashboardLayout() {
    return (
        <div className="grid grid-cols-4 grid-rows-[auto_34rem_auto] gap-6">
            <Stats />
            <div>Today activity</div>
            <div>Chart</div>
        </div>
    )
}

export default DashboardLayout
