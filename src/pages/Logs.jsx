import Pagination from "../ui/Pagination";
import { mockLogsData } from "../data/mockData";
import Table from "../ui/Table";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

function Logs() {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentData = mockLogsData.slice(startIndex, endIndex);
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

      <Table columns="grid-cols-[0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem]">
        <Table.Header>
          <div>ID</div>
          <div>Name</div>
          <div>Date</div>
          <div>Time</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={currentData}
          render={(log) => (
            <Table.Row key={log.id}>
              <div className="font-medium text-neutral-600">#{log.id}</div>
              <div className="font-medium text-neutral-700">{log.name}</div>
              <div className="text-neutral-600">{log.date}</div>
              <div className="text-neutral-600">{log.time}</div>
              <div className="text-primary-600 font-medium">{log.amount}</div>
              <button className="rounded-lg p-2 hover:bg-neutral-100">
                <HiOutlineEllipsisVertical className="h-5 w-5 text-neutral-400" />
              </button>
            </Table.Row>
          )}
        />

        <Table.Footer>
          <Pagination count={mockLogsData.length} />
        </Table.Footer>
      </Table>
    </div>
  );
}

export default Logs;
