import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Pagination from "../ui/Pagination";
import Table from "../ui/Table";
import { PAGE_SIZE, BASE_URL } from "../utils/constants";

function Logs() {
  const [logs, setLogs] = useState([]);
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch(`${BASE_URL}/sensors/data/logs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          const mappedLogs = data.result.map((log, index) => {
            const [time, date] = log.timestamp.split(" ");
            const [hours, minutes, seconds] = time.split(":");
            const [day, month, year] = date.split("/");

            const formattedDate = `${day}/${month}/${year}`;
            const formattedTime = `${hours}:${minutes}:${seconds}`;

            return {
              id: index + 1,
              type: log.type,
              date: formattedDate,
              time: formattedTime,
              value: log.value,
              sensorId: log.sensorId,
            };
          });

          setLogs(mappedLogs);
        } else {
          console.error("Fetch failed:", data.message);
        }
      } catch (err) {
        console.error("Error fetching logs:", err);
      }
    };

    fetchLogs();
  }, []);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentData = logs.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold text-neutral-900">
            Activity Logs
          </h2>
          <p className="text-sm text-neutral-500">
            Monitor all pump activities and water usage
          </p>
        </div>
      </div>

      <Table columns="grid-cols-[0.4fr_1.6fr_1.6fr_1.4fr_1fr_1fr]">
        <Table.Header>
          <div>ID</div>
          <div>Type</div>
          <div>Date</div>
          <div>Time</div>
          <div>Value</div>
          <div>Sensor ID</div>
        </Table.Header>

        <Table.Body
          data={currentData}
          render={(log) => (
            <Table.Row key={log.id}>
              <div className="font-medium text-neutral-600">#{log.id}</div>
              <div className="font-medium text-neutral-700">{log.type}</div>
              <div className="text-neutral-600">{log.date}</div>
              <div className="text-neutral-600">{log.time}</div>
              <div className="text-primary-600 font-medium">{log.value}</div>
              <div className="text-neutral-600">{log.sensorId}</div>
            </Table.Row>
          )}
        />

        <Table.Footer>
          <Pagination count={logs.length} />
        </Table.Footer>
      </Table>
    </div>
  );
}

export default Logs;
