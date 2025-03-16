import Pagination from "../ui/Pagination";
import { mockLogsData } from "../data/mockData";
import Table from "../ui/Table";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

function Logs() {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentData = mockLogsData.slice(startIndex, endIndex);
  return (
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
            <div>{log.id}</div>
            <div>{log.name}</div>
            <div>{log.date}</div>
            <div>{log.time}</div>
            <div>{log.amount}</div>
          </Table.Row>
        )}
      />

      <Table.Footer>
        <Pagination count={mockLogsData.length} />
      </Table.Footer>
    </Table>
  );
}

export default Logs;
