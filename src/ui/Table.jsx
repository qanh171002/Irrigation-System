import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="rounded-md border border-gray-200 bg-gray-50 text-sm">
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
      className={`grid ${columns} gap-x-6 border-b border-gray-200 bg-gray-100 p-4 font-semibold text-gray-600 uppercase`}
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
      className={`grid ${columns} gap-x-6 border-b border-gray-100 bg-gray-50 p-4 font-medium text-gray-600 last:border-none`}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length)
    return (
      <p className="p-6 text-center text-base font-medium">
        No data to show at the moment
      </p>
    );

  return <div>{data.map(render)}</div>;
}

function Footer({ children }) {
  if (!children) return null;
  return <div className="flex justify-center bg-gray-100 p-3">{children}</div>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
