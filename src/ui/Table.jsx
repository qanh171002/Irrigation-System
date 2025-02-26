import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="border border-gray-200 bg-gray-50 rounded-md text-sm">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className={`grid ${columns} gap-x-6 bg-gray-100 border-b border-gray-200 p-4 uppercase font-semibold text-gray-600`}
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className={`grid ${columns} bg-gray-50 text-gray-600 font-medium gap-x-6 p-4 border-b border-gray-100 last:border-none`}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length)
    return <p className="text-center text-base font-medium p-6">No data to show at the moment</p>;

  return <div>{data.map(render)}</div>;
}

function Footer({ children }) {
  if (!children) return null; 
  return <div className="bg-gray-100 p-3 flex justify-center">{children}</div>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
