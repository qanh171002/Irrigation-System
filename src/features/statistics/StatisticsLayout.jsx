import StatisticsTab from "./StatisticsTab"

function StatisticsLayout() {
    return (
        <div className="bg-white p-6 rounded-md border border-gray-100 flex flex-col overflow-hidden">
            <p className="font-normal text-gray-800">Average Reports</p>
            <p className="text-xl font-normal text-gray-600 ">Weekly average overview</p>

            <StatisticsTab />
        </div>
    )
}

export default StatisticsLayout
