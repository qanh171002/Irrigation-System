import { useState } from "react";
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { mockHistoryData } from "../data/mockData";
import Button from "../ui/Button";


function Logs() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockHistoryData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(mockHistoryData.length / itemsPerPage);

  return (
    <div className="p-6">
      <div className="overflow-x-auto bg-white rounded-md">
        <table className="w-full border-collapse text-sm font-medium">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Time</th>
              <th className="p-4 font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((log) => (
              <tr key={log.id} >
                <td className="p-4 text-gray-700">{log.name}</td>
                <td className="p-4 text-gray-700">{log.date}</td>
                <td className="p-4 text-gray-700">{log.time}</td>
                <td className="p-4 text-gray-700">{log.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-2 mt-4">
        <Button
          size="medium"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`px-3 py-2 rounded-md transition
          bg-gray-200 hover:bg-green-600 hover:text-gray-50 group 
          disabled:bg-gray-300 disabled:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={currentPage === 1}
        >
          <HiOutlineArrowLongLeft 
            className={`w-5 h-5 ${currentPage === 1 ? "text-gray-600" : "group-hover:text-gray-50"}`} 
          />
        </Button>

        <Button
          size="medium"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className={`px-3 py-2 rounded-md transition
            bg-gray-200 hover:bg-green-600 hover:text-gray-50 group 
            disabled:bg-gray-300 disabled:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={currentPage === totalPages}
        >
          <HiOutlineArrowLongRight 
            className={`w-5 h-5 ${currentPage === totalPages ? "text-gray-600" : "group-hover:text-gray-50"}`} 
          />
        </Button>
      </div>
    </div>
  );
}

export default Logs;
