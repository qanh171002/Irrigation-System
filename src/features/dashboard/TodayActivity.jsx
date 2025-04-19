import { useEffect, useState } from "react";
import Tag from "../../ui/Tag";
import { BASE_URL } from "../../utils/constants";

function TodayActivity() {
  const [logs, setLogs] = useState([]);
  const today = new Date().toLocaleDateString("vi-VN");

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch(`${BASE_URL}/sensors/data/logs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          const filteredLogs = data.result
            .map((log) => {
              const [date, time] = log.timestamp.split(" ");
              const [hours, minutes] = time.split(":");

              return {
                id: log.id,
                date,
                time: `${hours}:${minutes}`,
                type: log.type,
                value: log.value,
              };
            })
            .filter((log) => log.date === today);

          setLogs(filteredLogs);
        } else {
          console.error("Fetch failed:", data.message);
        }
      } catch (err) {
        console.error("Error fetching logs:", err);
      }
    };

    fetchLogs();
  }, [today]);

  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-100 bg-white p-6">
      <p className="mb-4 text-lg font-semibold">Today Activity</p>
      <ul className="scrollbar-none flex-1 overflow-y-auto">
        {logs.length === 0 ? (
          <li className="rounded-md bg-gray-100 p-4 text-center font-medium text-gray-500 italic shadow-md">
            No activity today...
          </li>
        ) : (
          logs.map((log) => (
            <li
              key={log.id}
              className="grid grid-cols-[8rem_1fr_6rem] items-center gap-3 border-b border-gray-100 py-2 text-[1rem] first:border-t"
            >
              <Tag className="bg-primary-100 text-primary-700 ring-primary-100 ring-1">
                {log.time}
              </Tag>
              <div className="font-medium text-gray-700">{log.type}</div>
              <div className="text-primary-600 text-right font-medium">
                {log.value}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodayActivity;
