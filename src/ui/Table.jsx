import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
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
      className={`grid ${columns} gap-x-6 border-b border-neutral-200 bg-neutral-50/80 p-5 text-sm font-semibold text-neutral-500`}
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
      className={`grid ${columns} gap-x-6 border-b border-neutral-100 p-5 text-sm transition-colors last:border-none hover:bg-neutral-50`}
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
