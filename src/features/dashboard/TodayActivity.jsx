import Tag from "../../ui/Tag";
import { mockLogsData } from "../../data/mockData";

function TodayActivity() {
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-100 bg-white p-6">
      <p className="mb-4 text-lg font-semibold">Today Watering</p>
      <ul className="scrollbar-none flex-1 overflow-y-auto">
        {mockLogsData.map((log) => (
          <li
            key={log.id}
            className="grid grid-cols-[8rem_1fr_6rem] items-center gap-3 border-b border-gray-100 py-2 text-[1rem] first:border-t"
          >
            <Tag className="bg-primary-100 text-primary-700 ring-primary-100 ring-1">
              {log.time}
            </Tag>
            <div className="font-medium text-gray-700">{log.name}</div>
            <div className="text-right">{log.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodayActivity;
